import { getUserService } from '@/services/user-service';
import { useEffect} from 'react';
import { useAuthData } from './useAuthData';
import { useDispatch } from 'react-redux';
import { setUsername } from '@/store/user-slice';

export const useUserData = () => {
  const { token, userId } = useAuthData();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token || !userId) return;

      try {
        const user = await getUserService(token, userId);
        console.log('Полученные данные пользователя: ', user);

        dispatch(setUsername(user.username));

        if (typeof window !== 'undefined') {
          localStorage.setItem('username', user.username); 
        }
      } catch (error) {
        console.error('Ошибка при получении данных пользователя', error);
      }
    };

    fetchUserData();
  }, [token, userId, dispatch]);
};
