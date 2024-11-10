import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './store';

export const selectFilteredTasks = createSelector(
  [
    (state: RootState) => state.tasks.tasks,
    (state: RootState) => state.tasks.searchQuery,
  ],
  (tasks, searchQuery) => {
    if (!searchQuery) {
      return tasks;
    }

    return tasks.filter(
      (task) =>
        task.title.toLocaleLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);
