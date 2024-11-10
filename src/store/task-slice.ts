// Импортируем необходимые функции и типы из Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUserData } from '../hooks/getUserData';
import { updatedTaskService } from '../services/task-service';
import { getCurrentDate } from '../utils/date-utils';

export interface Task {
  userId: string;
  id: number;
  title: string;
  description: string;
  columnId: number;
  createdAt: string;
  completedAt?: string;
  completed: boolean;
  inProgress?: boolean;
  deleted: boolean;
}

interface TasksState {
  tasks: Task[];
  searchQuery: string;
}

interface MoveTaskPayload {
  taskId: number;
  source: string;
  destination: number;
}

const initialState: TasksState = {
  tasks: [],
  searchQuery: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },

    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },

    addTask(
      state,
      action: PayloadAction<Omit<Task, 'userId' | 'createdDate'>>,
    ) {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        console.warn(
          'Предупреждение: userId не найден в localStorage. Задача не будет добавлена.',
        );
        return;
      }

      const newTask: Task = {
        ...action.payload,
        userId,
        columnId: action.payload.columnId,
        createdAt: getCurrentDate(),
      };

      state.tasks = state.tasks.concat(newTask);
    },

    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    deleteTasksByColumnId(state, action: PayloadAction<number>) {
      const columnIdToDelete = action.payload;
      state.tasks = state.tasks.filter(
        (task) => task.columnId !== columnIdToDelete,
      );
    },

    updateTask(state, action: PayloadAction<Task>) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task,
      );
    },

    moveTask(state, action: PayloadAction<MoveTaskPayload>) {
      const { taskId, destination } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);

      if (!task) {
        console.warn(`Задача с Id ${taskId} не найдена!.`);
        return;
      }

      // Обновляем значения задачи
      task.columnId = destination;
      task.inProgress = destination === 2;
      task.completed = destination === 3;

      const { token } = getUserData();

      if (token) {
        updatedTaskService(token, task.id, task)
          .then(() => {
            console.log(`Задача ${taskId} успешно обновлена на сервере.`);
          })
          .catch((error) => {
            console.error('Ошибка при обновлении задачи на сервере:', error);
          });
      }
    },
  },
});

export const {
  setTasks,
  setSearchQuery,
  addTask,
  deleteTask,
  deleteTasksByColumnId,
  updateTask,
  moveTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
