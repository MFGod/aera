import styled from 'styled-components';
import { StyledAddIcon } from '../../../public/assets/icons/add-column';
import { PhotoIcon } from '../../../public/assets/icons/photo';
import { useUserData } from '@/hooks/useUserData';
import { useState } from 'react';
import { updateUsername } from '@/services/user-service';
import { useAuthData } from '@/hooks/useAuthData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 14px;

  padding: 8px 14px;
  width: max-content;

  background-color: transparent;

  border: 1px solid #1d1e24;
  border-radius: 50px;

  cursor: pointer;

  &:active {
    outline: none;
  }
`;

const Input = styled.input`
  width: 293px;
  font-size: 16px;
  color: #1d1e24;

  background-color: transparent;

  border: none;

  &:focus {
    outline: none;
  }
`;

export const UserInfo = () => {
  const { userData } = useUserData();
  const { token, userId } = useAuthData();

  const [name, setName] = useState(userData?.username || '');
  const [placeholder, setPlaceholder] = useState(
    userData?.username || 'Введите новое имя',
  );

  const handleChangeName = async (newName: string) => {
    if (!token || !userId) {
      console.error('Необходим токен и userId для обновления имени.');
      return;
    }

    if (!name.trim()) {
      console.error('Имя не может быть пустым');
      return;
    }

    try {
      const data = await updateUsername(token, userId, newName);

      setName(data.username);

      console.log('Имя пользователя успешно обновлено:', data.username);
    } catch (error) {
      console.error('Ошибка при обновлении имени пользователя:', error);
    }
  };
  const handleFocus = () => {
    setPlaceholder(''); 
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value.trim()) {
      setPlaceholder(userData?.username || 'Введите новое имя'); 
    }
    handleChangeName(e.target.value); 
  };

  return (
    <Wrapper>
      <PhotoIcon />

      <Div>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder={userData?.username}
          onFocus={handleFocus} 
          onBlur={handleBlur}
        />
        <Button>
          Специальность <StyledAddIcon />
        </Button>
        <Button>
          описание <StyledAddIcon />
        </Button>
      </Div>
    </Wrapper>
  );
};
