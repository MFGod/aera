import { FC, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Task } from '../../../store/task-slice';

import { getCurrentDate } from '../../../utils/date-utils';

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 14px;

  padding: 0 10px;
  color: #ff9d00;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Input = styled.input`
  font-size: 20px;

  padding: 16px 216px;

  text-align: center;

  color: #1d1e24;

  border: 1px solid #1d1e24;
  border-radius: 50px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #1d1e24;
    opacity: 30%;
  }
`;

const StyledButton = styled.button`
  align-self: center;

  font-size: 30px;

  padding: 16px 56px;

  background-color: transparent;

  border: 1px solid #1d1e24;
  border-radius: 50px;

  cursor: pointer;

  &:active {
    outline: none;
  }
`;

interface TaskFormProps {
  onAdd: (task: Task) => void;
  task?: Task | null;
  columnId: number;
}

export const TaskForm: FC<TaskFormProps> = ({ onAdd, task, columnId }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [completedAt, setCompletedAt] = useState('');

  useEffect(() => {
    if (task) {
      setTaskTitle(task.title);
      setTaskDescription(task.description);
      setCompletedAt(task.completedAt || '');
    }
  }, [task]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim() !== '' && taskDescription.trim() !== '') {
      const newTask: Task = {
        userId: localStorage.getItem('userId') || '',
        id: task?.id || Date.now(),
        title: taskTitle,
        description: taskDescription,
        columnId: columnId,
        createdAt: getCurrentDate(),
        completedAt: completedAt,
        completed: false,
        deleted: false,
      };
      onAdd(newTask);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Wrapper>
        <Input
          type="text"
          value={taskTitle}
          placeholder="Название задачи"
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <Input
          type="text"
          value={taskDescription}
          placeholder="Описание"
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <DateBlock>
          <Label>Срок завершения:</Label>
          <Input
            type="date"
            value={completedAt}
            placeholder="Cрок завершения"
            onChange={(e) => setCompletedAt(e.target.value)}
          />
        </DateBlock>
      </Wrapper>

      <StyledButton type="submit">
        {task ? 'Сохранить изменения' : 'Создать'}
      </StyledButton>
    </StyledForm>
  );
};
