import React, { FC, useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useCanDrag } from '../../../../pages/all';
import { StyledDeleteIcon } from '../../../../public/assets/icons/delete';
import { Task, moveTask } from '../../../store/task-slice';
import { TaskList } from '../../task/task-list';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 323px;
`;

const Input = styled.input`
  font-size: 16px;

  color: #1d1e24;

  background-color: transparent;

  border: none;

  &:focus {
    outline: none;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  p {
    font-size: 20px;
  }
`;

interface ColumnProps {
  id: number;
  title: string;
  tasks: Task[];
  onEditTitle: (newTitle: string) => void;
  onDelete: () => void;
}

const Column: FC<ColumnProps> = ({
  id,
  title,
  tasks,
  onEditTitle,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const { setCanDrag } = useCanDrag();

  const [{}, taskDrop] = useDrop({
    accept: 'TASK',
    drop: (item: { id: number; column: string }) => {
      if (item.column !== id.toString()) {
        dispatch(
          moveTask({ taskId: item.id, source: item.column, destination: id }),
        );
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const dropRef = useRef<HTMLDivElement | null>(null);

  // Apply taskDrop ref to dropRef using useEffect
  useEffect(() => {
    if (dropRef.current) {
      taskDrop(dropRef.current);
    }
  }, [taskDrop]);

  return (
    <Wrapper>
      <Div>
        <Input
          type="text"
          defaultValue={title}
          onBlur={(e) => {
            onEditTitle(e.target.value);
            setCanDrag(true);
          }}
          onFocus={() => setCanDrag(false)}
        />
        <Div>
          <p>{tasks.length}</p>

          <StyledDeleteIcon onClick={onDelete} />
        </Div>
      </Div>

      <div ref={dropRef}>
        <TaskList tasks={tasks} columnId={id} />
      </div>
    </Wrapper>
  );
};

export default Column;
