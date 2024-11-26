import { Header } from '@/components/header/header';
import styled from 'styled-components';
import { StyledLogoutIcon } from '../../public/assets/icons/logout';
import { StyledAddIcon } from '../../public/assets/icons/add-column';

import { UserInfo } from './ui/user-info';
import { UserTaskInfo } from './ui/user-task-info';
import { Notices } from './ui/notices';
import { Organization } from './ui/organization';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  padding: 12px 36px;
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

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  width: 100%;
`;

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Div>
          <Button>
            Создать новую задачу
            <StyledAddIcon />
          </Button>
          <Button>
            Выйти с аккаунта
            <StyledLogoutIcon />
          </Button>
        </Div>

        <UserInfo />

        <UserInfoDiv>
          <UserTaskInfo />

          <Notices />
        </UserInfoDiv>

        <Organization />
      </Wrapper>
    </>
  );
};

export default ProfilePage;
