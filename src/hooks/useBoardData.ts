import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useUserData } from './getUserData';
import { getAllColumnsService } from '../services/column-service';
import { getTasksService } from '../services/task-service';
import { setColumns } from '../store/column-slice';
import { setTasks } from '../store/task-slice';

export const useBoardData = () => {
  const dispatch = useDispatch();
  const { userData, loading: userLoading } = useUserData();

  const { token, userId } = userData;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadBoardData = async () => {
      if (!token || !userId || userLoading) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Загрузка колонок
        const columnsData = await getAllColumnsService(token, userId);
        dispatch(setColumns(columnsData));

        // Загрузка задач
        const tasksData = await getTasksService(token, userId);
        dispatch(setTasks(tasksData));
      } catch (error) {
        setError(error as Error);
        console.error('Ошибка при загрузке данных доски:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBoardData();
  }, [userId, userLoading, dispatch]);

  return { loading, error };
};
