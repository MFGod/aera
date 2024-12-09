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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Основная функция для загрузки данных
    const loadBoardData = async () => {
      if (!userData?.token || !userData?.userId || userLoading) {
        // Ожидаем, пока загрузится `userData`
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        // Последовательная загрузка колонок и задач
        const columnsData = await getAllColumnsService(userData.token, userData.userId);
        console.log("Полученные колонки:", columnsData);
        dispatch(setColumns(columnsData));

        const tasksData = await getTasksService(userData.token, userData.userId);
        console.log("Полученные задачи:", tasksData);
        dispatch(setTasks(tasksData));
      } catch (error) {
        console.error("Ошибка при загрузке данных доски:", error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    loadBoardData();
  }, [userData, userLoading, dispatch]); // Обновляем данные только при изменении `userData` или завершении загрузки пользователя

  return { loading, error };
};