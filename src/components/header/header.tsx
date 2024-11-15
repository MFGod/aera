import styled from 'styled-components';
import { StyledBurgerIcon } from '../../../public/assets/icons/burger';
import { StyledPhotoIcon } from '../../../public/assets/icons/photo';

const Div = styled.div`
  padding: 22px 36px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.5px solid #1d1e24;
`;

const Button = styled.button`
  padding: 4px;
  border-radius: 50px;

  display: flex;
  align-items: center;
  gap: 6px;

  p {
    font-size: 20px;
  }
`;

export const Header = () => {
  return (
    <Div>
      <StyledBurgerIcon />

      <Button>
        <StyledPhotoIcon />
        <p>user name</p>
      </Button>
    </Div>
  );
};
