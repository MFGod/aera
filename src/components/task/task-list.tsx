import { FC } from 'react';
import styled from 'styled-components';

import { TaskItem } from './task-item';
import { Task } from '../../store/task-slice';
import { AddTaskButton } from '../buttons/add-button';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Text = styled.p`
  font-size: 16px;

  color: #1d1e24;
`;

interface TaskListInterface {
  tasks: Task[];
  columnId: number;
}

export const TaskList: FC<TaskListInterface> = ({ tasks, columnId }) => {
  return (
    <Div>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })
      ) : (
        <Text>Нет задач для отображения.</Text>
      )}

      <AddTaskButton columnId={columnId} />
    </Div>
  );
};
