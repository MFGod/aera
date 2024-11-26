import { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getUserData } from '../../../hooks/getUserData';
import { Modal } from '../../../modules/modal';
import { deleteTaskService } from '../../../services/task-service';
import { deleteTask, Task } from '../../../store/task-slice';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  gap: 40px;

  height: 100%;
`;

export const Title = styled.p`
  font-size: 26px;

  text-align: center;

  color: #1d1e24;
`;

export const Text = styled.p`
  font-size: 26px;

  text-align: center;

  color: #1d1e24;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

const Button = styled.button`
  align-self: center;

  font-size: 20px;

  padding: 16px 56px;

  background-color: transparent;

  border: 1px solid #1d1e24;
  border-radius: 15px;

  cursor: pointer;

  &:active {
    outline: none;
  }
`;

interface DeleteModalInterface {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
}

export const DeleteModal: FC<DeleteModalInterface> = ({
  task,
  isOpen,
  onClose,
}) => {
  const [taskId, setTaskId] = useState<number | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      setTaskId(task.id);
    }
  }, [isOpen, task]);

  const confirmDeleteTask = async () => {
    if (taskId) {
      const { token, userId } = getUserData();

      if (!token || !userId) {
        console.error('Необходим токен и userId для добавления задачи.');
        return;
      }

      try {
        // Отправка задачи на сервер
        await deleteTaskService(taskId, token);
        dispatch(deleteTask(taskId));
        onClose();
      } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
      }
    }
  };

  const modalContent = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title>Удаление задачи</Title>
      <Div>
        <Text>Желаете ли вы удалить задачу с названием:</Text>
        <Text>"{task.title}"</Text>
        <ButtonsDiv>
          <Button onClick={confirmDeleteTask}>Удалить</Button>
          <Button onClick={onClose}>Отмена</Button>
        </ButtonsDiv>
      </Div>
    </Modal>
  );

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  return ReactDOM.createPortal(modalContent, modalRoot);
};
