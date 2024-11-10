import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import { handleRegistration } from '../services/auth-service';

export const useRegistration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('Все поля являются обязательными');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают.');
      return;
    }

    try {
      await handleRegistration(username, email, password, router);
      alert('Регистрация завершена!');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsOpen(false);
    } catch (error) {
      setError('Ошибка при регистрации. Попробуйте снова!');
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    handleSubmit,
  };
};
