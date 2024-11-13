import { FC, FormEvent, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Task, updateTask } from '../../../store/task-slice';
import {
  calculateDaysLeft,
  formatDate,
  getCurrentDate,
} from '../../../utils/date-utils';
import { useDispatch } from 'react-redux';
import { CustomDateInput } from './custom-calendar/castom-calendar';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  font-size: 26px;

  padding: 14px 20px;

  color: #1d1e24;
  background-color: #f4f4f4;

  border: none;
  border-radius: 15px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #1d1e24;
    opacity: 30%;
  }
`;

const TextArea = styled.textarea`
  font-size: 16px;
  padding: 14px 20px;
  color: #1d1e24;
  background-color: #f4f4f4;

  border: none;
  border-radius: 15px;

  resize: none; /* Запрещаем ручное изменение размера */

  overflow: hidden; /* Скрываем полосу прокрутки */
  width: 100%; /* Растягиваем по ширине контейнера */

  min-height: 40px; /* Минимальная высота */
  line-height: 1.5;

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

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  padding: 6px 12px;

  width: max-content;

  background-color: #848484;

  border-radius: 5px;

  p {
    font-size: 20px;
  }
`;

const Span = styled.span`
  content: '';
  width: 1px;
  height: 16px;

  border-radius: 6px;

  background-color: #ffffff;
`;

interface TaskFormProps {
  onAdd: (task: Task) => void;
  task?: Task | null;
  columnId: number;
}

export const TaskForm: FC<TaskFormProps> = ({ onAdd, task, columnId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completedAt, setCompletedAt] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCompletedAt(task.completedAt || '');
    }
  }, [task]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() !== '' && description.trim() !== '') {
      const newTask: Task = {
        userId: localStorage.getItem('userId') || '',
        id: task?.id || Date.now(),
        title: title,
        description: description,
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
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Div>
          <p>Срок выполнения до:</p>
          <p>
            {completedAt
              ? formatDate(
                  globalThis.navigator.language,
                  { month: 'long', day: 'numeric' },
                  new Date(completedAt),
                )
              : ''}
          </p>
          <Span />
          <CustomDateInput
            value={completedAt}
            onChange={(e) => setCompletedAt(e.target.value)}
          />
        </Div>

        <FormItem>
          <label>Название</label>
          <Input
            type="text"
            value={title}
            placeholder="Название задачи"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <label>Описание</label>
          <TextArea
            value={description}
            placeholder="Описание"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormItem>
      </Wrapper>

      <StyledButton type="submit">
        {task ? 'Сохранить изменения' : 'Создать'}
      </StyledButton>
    </Form>
  );
};
