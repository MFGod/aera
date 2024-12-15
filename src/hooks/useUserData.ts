import { getUserService } from '@/services/user-service';
import { useEffect, useState } from 'react';
import { useAuthData } from './useAuthData';

type UserData = { username: string };

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const { token, userId } = useAuthData();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token || !userId) {
        setLoading(false);
        return;
      }

      try {
        const user = await getUserService(token, userId);
        console.log('Полученные данные пользователя: ', user);
        setUserData(user);
      } catch (error) {
        console.error('Ошибка при получении данных пользователя', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token, userId]);

  const userDataValues = userData ?? {
    username: '',
  };

  return { userData: userDataValues, loading };
};
