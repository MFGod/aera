import { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import Column from './column/column';
import { useCanDrag } from '../../../pages/all';
import { Task } from '../../store/task-slice';

interface Properties {
  id: number;
  index: number;
  title: string;
  tasks: Task[];
  moveColumn: (dragIndex: number, hoverIndex: number) => void;
  onEditTitle: (title: string) => void;
  onDelete: () => void;
}

export const DraggableColumn: FC<Properties> = ({
  id,
  index,
  title,
  tasks,
  moveColumn,
  onEditTitle,
  onDelete,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { canDrag } = useCanDrag();

  const [{ handlerId }, drop] = useDrop<
    { index: number },
    void,
    { handlerId: string | symbol | null }
  >({
    accept: 'COLUMN',
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index; // Индекс перетаскиваемой колонки
      const hoverIndex = index; // Индекс столбца, на который наведен курсор

      // Если индексы одинаковые, то ничего не делаем
      if (dragIndex === hoverIndex) {
        return;
      }

      // Выполняем перемещение
      moveColumn(dragIndex, hoverIndex);
      item.index = hoverIndex; // Обновляем индекс перетаскиваемого элемента
    },
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'COLUMN',
    item: { id, index },
    canDrag: canDrag,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref)); // Объединяем drag and drop рефссылки

  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <Column
        id={id}
        title={title}
        tasks={tasks}
        onEditTitle={onEditTitle}
        onDelete={onDelete}
      />
    </div>
  );
};
