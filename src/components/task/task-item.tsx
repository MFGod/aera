import { FC, useEffect, useRef, useState } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

import { useCanDrag } from '../../../pages/all';

import { StyledEditIcon } from '../../../public/assets/icons/edit';
import { Task } from '../../store/task-slice';
import { formatDate } from '../../utils/date-utils';
import { DeleteModal } from '../modals/crud/delete-modal';
import { EditingModal } from '../modals/crud/editing-modal';
import { StyledDeleteIcon } from '../../../public/assets/icons/delete';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';
import { TaskInformation } from './task-information';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  width: 324px;

  padding: 14px 14px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border: 1px solid black;
  border-radius: 15px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconsDiv = styled.div`
  display: flex;
  gap: 14px;
`;

const StyledDate = styled.p`
  padding: 4px 12px;

  width: max-content;

  font-size: 20px;

  border-radius: 4.5px;
  background-color: #f4f4f4;
`;

interface TaskItemProps {
  task: Task;
}

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { canDrag } = useCanDrag();

  const [{}, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, column: task.columnId },
    canDrag: canDrag,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const dragRef = useRef<HTMLDivElement | null>(null);

  // Apply taskDrop ref to dropRef using useEffect
  useEffect(() => {
    if (dragRef.current) {
      drag(dragRef.current);
    }
  }, [drag]);

  return (
    <>
      <Wrapper ref={dragRef}>
        <TaskInformation task={task} onClick={() => setIsEditOpen(true)} />

        <Div>
          <StyledDate>
            {task.completedAt
              ? formatDate(
                  globalThis.navigator.language,
                  { month: 'short', day: 'numeric' },
                  new Date(task.completedAt),
                )
              : ''}
          </StyledDate>

          <IconsDiv>
            <StyledEditIcon onClick={() => setIsEditOpen(true)} />
            <StyledDeleteIcon onClick={() => setIsDeleteOpen(true)} />
          </IconsDiv>
        </Div>
      </Wrapper>

      <EditingModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        task={task}
      />

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        task={task}
      />
    </>
  );
};
