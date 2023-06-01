import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserAppointments, getAppointmentById } from './operation';

const initialState = {
    appointments: null,
    appointment: null,
    dataPicker: null,
};

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        setDataVisit(state, action) {
            state.dataPicker = action.payload;
        },
    },
    extraReducers: {
        [getCurrentUserAppointments.fulfilled](state, action) {
            state.appointments = action.payload;
        },
        [getAppointmentById.fulfilled](state, action) {
            state.appointment = action.payload;
        },
    },
});

export const appointmentReducer = appointmentSlice.reducer;
export const { setDataVisit } = appointmentSlice.actions;
