import styled from 'styled-components';
import { StyledAddIcon } from '../../../public/assets/icons/add-column';
import { PhotoIcon } from '../../../public/assets/icons/photo';

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

export const UserInfo = ({}) => (
  <Wrapper>
    <PhotoIcon />

    <Div>
      <p>Иван иванов</p>
      <Button>
        Специальность <StyledAddIcon />
      </Button>
      <Button>
        описание <StyledAddIcon />
      </Button>
    </Div>
  </Wrapper>
);
