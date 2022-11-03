import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer/authReducer'

export const store = configureStore({
    reducer: {
        authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})