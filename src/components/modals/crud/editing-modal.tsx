import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import { useUserData } from '../../../hooks/useUserData';
import { Modal } from '../../../modules/modal';
import { updatedTaskService } from '../../../services/task-service';
import { Task, updateTask } from '../../../store/task-slice';
import { TaskForm } from '../../form/task';
import { useAuthData } from '@/hooks/useAuthData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
}

export const EditingModal = ({ isOpen, onClose, task }: Props) => {
  const dispatch = useDispatch();

  const { token, userId } = useAuthData();

  const handleUpdateTask = async (task: Task) => {
    try {
      if (!token) {
        console.error('Token отсутствует.');
        throw new Error('Требуется аутентификация. Попробуйте еще раз.');
      }

      if (!userId) {
        console.error('User ID отсутствует.');
        throw new Error(
          'Требуется идентификатор пользователя. Пожалуйста, убедитесь, что вы вошли в систему.',
        );
      }

      const updatedTask = await updatedTaskService(token, task.id, task);
      dispatch(updateTask(updatedTask));
      onClose();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const modalContent = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TaskForm onAdd={handleUpdateTask} task={task} columnId={task.columnId} />
    </Modal>
  );

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  return ReactDOM.createPortal(modalContent, modalRoot);
};
