import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useCanDrag } from '../../../../pages/all';
import { StyledDeleteColumnIcon } from '../../../../public/assets/icons/column/delete';
import { Task, moveTask } from '../../../store/task-slice';
import { TaskList } from '../../task/task-list';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  font-size: 16px;

  color: #1d1e24;

  background-color: transparent;

  border: none;
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

          <StyledDeleteColumnIcon onClick={onDelete}>
            Удалить
          </StyledDeleteColumnIcon>
        </Div>
      </Div>

      <div ref={taskDrop}>
        <TaskList tasks={tasks} columnTitle={title} columnId={id} />
      </div>
    </Wrapper>
  );
};

export default Column;
