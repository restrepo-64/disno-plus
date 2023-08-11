import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

//below is template boilerplate code, usually don't have to write this

export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});