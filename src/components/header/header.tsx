import styled from 'styled-components';
import { StyledBurgerIcon } from '../../../public/assets/icons/burger';
import { StyledPhotoIcon } from '../../../public/assets/icons/photo';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useUserData } from '@/hooks/useUserData';

const Div = styled.div`
  padding: 22px 36px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.5px solid #1d1e24;
`;

const Button = styled.button`
  padding: 6px;
  border-radius: 50px;

  display: flex;
  align-items: center;
  gap: 6px;

  p {
    font-size: 20px;
  }
`;

const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Header = () => {
  const router = useRouter();
  const username = useSelector((state: RootState) => state.user.username);
  const userimage = useSelector((state: RootState) => state.user.userimage)

  useUserData();
  return (
    <Div>
      <StyledBurgerIcon />
      <button onClick={() => router.push('/all')}>Main</button>
      <Button onClick={() => router.push('/profile')}>
        {userimage ? (
          <UserImage src={userimage} alt="User" /> // Отображаем изображение, если оно есть
        ) : (
          <StyledPhotoIcon /> // Или отображаем иконку по умолчанию
        )}
        <p>{username}</p>
      </Button>
    </Div>
  );
};
