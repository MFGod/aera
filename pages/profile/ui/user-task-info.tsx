import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 7;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px 16px 16px 24px;

  border: 0.5px solid #1d1e24;
  border-radius: 15px;
`;

export const UserTaskInfo = ({}) => (
  <Wrapper>
    <Div>
      <p>Мои задачи</p>
      <p>выполнено всего Задач: число</p>
    </Div>
    <TaskDiv>тут будут задачи</TaskDiv>
  </Wrapper>
);
