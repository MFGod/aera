import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useUserData } from './getUserData';
import { getAllColumnsService } from '../services/column-service';
import { getTasksService } from '../services/task-service';
import { setColumns } from '../store/column-slice';
import { setTasks } from '../store/task-slice';

export const useBoardData = () => {
   const dispatch = useDispatch();
   const { userData, loading: userLoading } = useUserData(); // Данные пользователя из useUserData
 
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | null>(null);
 
   useEffect(() => {
     const loadBoardData = async () => {
       if (!userData?.token || !userData?.userId || userLoading) {
         setLoading(false);
         return;
       }
 
       try {
         setLoading(true);
         // Загрузка колонок
         const columnsData = await getAllColumnsService(userData.token, userData.userId);
         dispatch(setColumns(columnsData));
 
         // Загрузка задач
         const tasksData = await getTasksService(userData.token, userData.userId);
         dispatch(setTasks(tasksData));
       } catch (error) {
         setError(error as Error);
         console.error('Ошибка при загрузке данных доски:', error);
       } finally {
         setLoading(false);
       }
     };
 
     loadBoardData();
   }, [userData, userLoading, dispatch]); // Запускать эффект при изменении userData или userLoading
 
   return { loading, error };
 };