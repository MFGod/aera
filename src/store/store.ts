import { configureStore } from '@reduxjs/toolkit';

import columnReducer from './column-slice';
import tasksReducer from './task-slice';
import userReducer from './user-slice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    columns: columnReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;