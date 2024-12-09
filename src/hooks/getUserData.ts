import { getUserService } from '@/services/user-service';
import { useEffect, useState } from 'react';

type UserData = { token: string; userId: string; username: string } | null;

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const username = localStorage.getItem('username');

      if (!token) {
        setLoading(false);
        return;
      }

      if (token && userId && username) {
        setUserData({ token, userId, username });
        setLoading(false);
        return;
      }

      try {
        const user = await getUserService(token);
        console.log('Полученные данные пользователя: ', user);
        setUserData(user);
      } catch (error) {
        console.error('Ошибка при получении данных пользователя', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const userDataValues = userData
    ? { ...userData }
    : { token: '', userId: '', username: '' };

  return { userData: userDataValues, loading };
};
