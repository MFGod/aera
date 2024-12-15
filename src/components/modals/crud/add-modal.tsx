import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Modal } from '../../../modules/modal';
import { addTaskService } from '../../../services/task-service';
import { addTask, Task } from '../../../store/task-slice';
import { getCurrentDate } from '../../../utils/date-utils';
import { TaskForm } from '../../form/task';
import { useAuthData } from '@/hooks/useAuthData';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
`;

type NewTask = Omit<Task, 'id'>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  columnId: number;
}

export const AddTaskModal = ({ isOpen, onClose, columnId }: Props) => {
  const dispatch = useDispatch();

  const { token, userId } = useAuthData();

  const handleAddTask = async (
    task: Omit<NewTask, 'userId' | 'createdDate' | 'column'>,
  ) => {
    if (!token || !userId) {
      console.error('Необходим токен и userId для добавления задачи.');
      return;
    }

    const newTask: NewTask = {
      ...task,
      userId,
      columnId: columnId,
      createdAt: getCurrentDate(),
      completedAt: task.completedAt || '',
      inProgress: false,
      completed: false,
      deleted: false,
    };

    try {
      const createdTask = await addTaskService(newTask, token);
      console.log('Добавленная задача:', createdTask);
      dispatch(addTask({ ...task, id: createdTask.createdTaskId }));
      onClose();
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  };

  const modalContent = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Wrapper>
        <TaskForm onAdd={handleAddTask} columnId={columnId} />
      </Wrapper>
    </Modal>
  );

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  return ReactDOM.createPortal(modalContent, modalRoot);
};
