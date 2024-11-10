import { configureStore } from '@reduxjs/toolkit';

import columnReducer from './column-slice';
import tasksReducer from './task-slice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    columns: columnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
