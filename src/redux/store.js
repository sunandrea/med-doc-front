import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { infoReducer } from './info/slice';
import { appointmentReducer } from './appointment/slice';
import { visitsReducer } from './visits/slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['accessToken', 'user', 'isLoggedIn'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        info: infoReducer,
        appointment: appointmentReducer,
        visits: visitsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
