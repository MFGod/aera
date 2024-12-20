import { NextRouter } from 'next/router';

export const handleRegistration = async (
  username: string,
  email: string,
  password: string,
  router: NextRouter,
) => {
  // Проверка входных данных
  if (!username || !email || !password) {
    throw new Error('Все поля должны быть заполнены');
  }

  const userData = {
    username,
    email,
    password,
  };

  try {
    const response = await fetch('https://localhost:7049/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка при регистрации: ${errorText}`);
    }

    const { userId, accessTokenString, username } = await response.json(); // Сервер возвращает userId и token
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', accessTokenString);
    localStorage.setItem('username', username);

    router.push('/all');

    return { userId, accessTokenString, username };
  } catch (error) {
    throw new Error('Ошибка при регистрации. Попробуйте снова!');
  }
};

export const handleLogin = async (
  emailLogin: string,
  password: string,
  router: NextRouter,
) => {
  if (!emailLogin || !password) {
    throw new Error('Все поля должны быть заполнены');
  }

  const userData = { emailLogin, password };

  try {
    const response = await fetch('https://localhost:7049/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Неверные учетные данные');
    }

    const { userId, accessTokenString, username } = await response.json();
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', accessTokenString);
    localStorage.setItem('username', username);

    //Принять useImage

    router.push('/all');

    return { userId, accessTokenString };
  } catch (error) {
    throw new Error('Ошибка при авторизации. Попробуйте снова!');
  }
};
