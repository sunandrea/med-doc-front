import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = 'https://meddoc-backend.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api';
// axios.defaults.baseURL = 'https://wild-tan-mackerel-kilt.cyclic.app/api';
axios.defaults.baseURL = 'https://meddoc-backend.onrender.com/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },

    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const getUserInfo = createAsyncThunk('/getUserInfo', async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.accessToken;
    if (persistedToken === null) {
        return rejectWithValue();
    }
    try {
        token.set(persistedToken);
        const { data } = await axios.get('/info');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getUserInfoById = createAsyncThunk('/getUserInfoById', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`/info/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getAllUsersForRole = createAsyncThunk('/getAllUsersForRole', async (role, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`/info/all/${role}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
// export const getAllUsersForRole = createAsyncThunk(
//     '/getAllUsersForRole',
//     async ({ role, specialization, category }, { rejectWithValue }) => {
//         console.log(role);
//         try {
//             const params = {
//                 specialization: specialization || 'Show all',
//                 category: category || 'Show all',
//             };

//             const { data } = await axios.get(`/info/all/${role}`, { params });
//             return data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

export const updateUserInfo = createAsyncThunk('/updateUserInfo', async (information, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch('/info/update', information);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateAvatar = createAsyncThunk('/updateAvatar', async (formData, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch('/info/update/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateUserRating = createAsyncThunk('/updateUserRating', async ({ id, rating }, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch(`/info/update/rating/${id}`, { rating });
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const addUserExperience = createAsyncThunk('/addUserExperience', async (information, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/experience', information);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const updateUserExperience = createAsyncThunk(
    '/updateUserExperience',
    async ({ id, ...updatedExperience }, { rejectWithValue }) => {
        try {
            const { data } = await axios.patch(`/experience/${id}`, updatedExperience);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteUserExperience = createAsyncThunk('/deleteUserExperience', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`/experience/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getAllInstitution = createAsyncThunk('/institution', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/institution');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
