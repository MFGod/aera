import { useMemo } from 'react';
import styled from 'styled-components';

import { StyledOpenTaskIcon } from '../../../public/assets/icons/task/open';

import { calculateDaysLeft, formatDate } from '../../utils/date-utils';

import { Task } from '../../store/task-slice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DateDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  p {
    font-size: 20px;

    color: #1d1e24;

    opacity: 50%;
  }
`;

const Span = styled.span<{ $backgroundColor: string }>`
  width: 50px;
  height: 8px;

  background-color: ${({ $backgroundColor }) => $backgroundColor};

  border-radius: 4.5px;
`;

const Title = styled.p`
  font-size: 26px;
`;

interface Props {
  task: Task;
  onClick: () => void;
}

export const TaskInformation = ({ task, onClick }: Props) => {
  const daysLeft = calculateDaysLeft(task.completedAt || '');

  const backgroundColor = useMemo(() => {
    if (daysLeft <= 3) {
      return '#FF2E00';
    } else if (daysLeft <= 7) {
      return '#FFC700';
    } else {
      return '#05FF00';
    }
  }, [daysLeft]);

  return (
    <Wrapper>
      <Div>
        <StyledOpenTaskIcon onClick={onClick} />
        <DateDiv>
          <p>Добавлен</p>
          <p>
            {task.createdAt
              ? formatDate(
                  globalThis.navigator.language,
                  { month: 'numeric', day: 'numeric' },
                  new Date(task.createdAt)
                )
              : ''}
          </p>
        </DateDiv>
      </Div>

      <Span $backgroundColor={backgroundColor} />

      <Title>{task.title}</Title>
    </Wrapper>
  );
};
