import axios from 'axios';

const URL = 'https://meddoc-backend.herokuapp.com/api';

const api = axios.create({
    baseURL: URL,
    // params: {
    //     page: 1,
    // },
});

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },

    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export class Api {
    login = async credentials => {
        try {
            const { data } = await api.post('/auth/login', credentials);
            data.then(response => {
                console.log('Success:', response.data);
            }).catch(error => {
                console.error('Error:', error);
            });
            token.set(data.accessToken);
            return data;
        } catch (error) {
            return error.massage;
        }
    };
    registration = async credentials => {
        try {
            const { data } = await api.post('/auth/register', credentials);
            data.then(response => {
                console.log('Success:', response.data);
            }).catch(error => {
                console.error('Error:', error);
            });
            token.set(data.accessToken);
            return data;
        } catch (error) {
            return error.massage;
        }
    };
    logout = async () => {
        try {
            const { data } = await api.post('/auth/logout');
            data.then(response => {
                console.log('Success:', response.data);
            }).catch(error => {
                console.error('Error:', error);
            });
            token.unset();
            return data;
        } catch (error) {
            return error.massage;
        }
    };

    // getUsers = async () => {
    //     try {
    //         const { data } = await api.get('/users/info');
    //         return data;
    //     } catch (error) {
    //         return error.massage;
    //     }
    // };

    // getUserById = async id => {
    //     try {
    //         const { data } = await api.get(`/users/info/${id}`);
    //         return data;
    //     } catch (error) {
    //         return error.massage;
    //     }
    // };
}
