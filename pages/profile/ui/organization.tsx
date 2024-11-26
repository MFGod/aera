import styled from 'styled-components';
import { StyledAddIcon } from '../../../public/assets/icons/add-column';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  flex: 3;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrganizationDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px 24px;

  border: 0.5px solid #1d1e24;
  border-radius: 15px;
`;

const Button = styled.button`
  display: flex;
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

export const Organization = ({}) => (
  <Wrapper>
    <Div>
      <p>Организация</p>
      <Button>
        Создать организацию <StyledAddIcon />
      </Button>
    </Div>

    <OrganizationDiv>тут будут организации</OrganizationDiv>
  </Wrapper>
);
