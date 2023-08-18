import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './authenticationSlice';
import { tasks } from '@/data-layer/tasks';

export const store = configureStore({
  reducer: {
    [tasks.reducerPath]: tasks.reducer,
    authentication: authenticationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasks.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
