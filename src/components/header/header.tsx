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

export const Header = () => {
  const router = useRouter();
  const username = useSelector((state: RootState) => state.user.username);

  useUserData();
  return (
    <Div>
      <StyledBurgerIcon />
      <button onClick={() => router.push('/all')}>Main</button>
      <Button onClick={() => router.push('/profile')}>
        <StyledPhotoIcon />
        <p>{username}</p>
      </Button>
    </Div>
  );
};
