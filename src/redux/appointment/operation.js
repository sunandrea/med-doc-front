import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/api';

export const setAppointment = createAsyncThunk('setAppointment', async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/appointment', credentials);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.status);
    }
});

export const getCurrentUserAppointments = createAsyncThunk(
    'getCurrentUserAppointment',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/appointment');
            // console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.response.status);
        }
    }
);

export const getAppointmentById = createAsyncThunk('getAppointmentById', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`/appointment/${id}`);
        // console.log(data);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.status);
    }
});
