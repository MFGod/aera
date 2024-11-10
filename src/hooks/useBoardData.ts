import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getUserData } from './getUserData';
import { getAllColumnsService } from '../services/column-service';
import { getTasksService } from '../services/task-service';
import { setColumns } from '../store/column-slice';
import { setTasks } from '../store/task-slice';

export const useBoardData = () => {
  const dispatch = useDispatch();

  // Состояния для обработки загрузки и ошибок
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Загрузка всех колонок из API
  const loadAllColumns = async () => {
    const { token, userId } = getUserData();

    if (token && userId) {
      try {
        setLoading(true);
        const columnsData = await getAllColumnsService(token, userId);
        console.log('Полученные колонки:', columnsData);
        dispatch(setColumns(columnsData));
      } catch (error) {
        setError(error as Error);
        console.error('Ошибка при загрузке колонок:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Загрузка задач из API
  const loadTasks = async () => {
    const { token, userId } = getUserData();

    if (token && userId) {
      try {
        const tasksData = await getTasksService(token, userId); // Получаем задачи по userId
        console.log('Полученные задачи:', tasksData);
        dispatch(setTasks(tasksData));
      } catch (error) {
        console.error('Ошибка при загрузке задач:', error);
      }
    }
  };

  useEffect(() => {
    loadAllColumns();
    loadTasks();
  }, []);

  return { loading, error };
};
