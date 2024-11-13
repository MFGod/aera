import { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getUserData } from '../../../hooks/getUserData';
import { Modal } from '../../../modules/modal';
import { deleteTaskService } from '../../../services/task-service';
import { deleteTask, Task } from '../../../store/task-slice';
import { Text } from '../styles';

const Block = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;

const StyledButton = styled.button`
  align-self: center;

  font-size: 20px;

  padding: 16px 56px;

  background-color: transparent;

  border: 1px solid #1d1e24;
  border-radius: 50px;

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
      <p>Удалить задачу?</p>
      <Text>Вы уверены, что хотите удалить задачу "{task.title}"?</Text>
      <Block>
        <StyledButton onClick={confirmDeleteTask}>Удалить</StyledButton>
        <StyledButton onClick={onClose}>Отмена</StyledButton>
      </Block>
    </Modal>
  );

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  return ReactDOM.createPortal(modalContent, modalRoot);
};
