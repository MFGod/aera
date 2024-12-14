import styled from 'styled-components';
import { StyledAddIcon } from '../../../public/assets/icons/add-column';
import { PhotoIcon } from '../../../public/assets/icons/photo';
import { useUserData } from '@/hooks/getUserData';
import { useState } from 'react';
import { updateUserName } from '@/services/user-service';

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
  const { username, userId, token } = userData;

  const [name, setName] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const handleChangeName = async () => {
    if (!name.trim()) {
      console.error('Название пользователя не может быть пустым');
      return;
    }
    if (!userId || !token) {
      console.error('Отсутствует токен или userId');
      return;
    }
    try {
      const response = await updateUserName(userId, username, token)
      console.log('Response', response)
      return response;

    } catch (error) {
      console.error('Ошибка при смене имени пользователя', error);
    }
  }

  return (
    <Wrapper>
      <PhotoIcon />

      <Div>
        <Input
          type="text"
          value={username}
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setPlaceholder('')}
        />
        <button onClick={handleChangeName}>Change Name</button>

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
