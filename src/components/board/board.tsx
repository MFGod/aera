import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useUserData } from '../../hooks/getUserData';
import { useBoardData } from '../../hooks/useBoardData';
import {
  deleteColumnService,
  updateColumnsService,
} from '../../services/column-service';
import {
  deleteColumn,
  updateColumn,
  setColumns,
} from '../../store/column-slice';
import { useAppSelector } from '../../store/hooks';
import { selectFilteredTasks } from '../../store/selectors';
import { filterTaskByFilter, FilterType } from '../../utils/task-utils';
import { AddColumnButton } from '../buttons/add-column';
import { DraggableColumn } from '../drag-column/drag-column';
import { Filter } from '../filter/filter';

export const Wrapper = styled.div`
  padding: 12px 36px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 26px;
  flex-wrap: nowrap;

  overflow-x: auto;
  overflow-y: hidden;
  height: calc(100vh - 40px);
`;

export const Board = () => {
  const dispatch = useDispatch();
  const { userData } = useUserData();

  console.log("userData",userData)  

  const tasks = useAppSelector(selectFilteredTasks);
  const columns = useAppSelector((state) => state.columns.columns);

  const board = useBoardData();

  console.log(columns);

  const [filter, setFilter] = useState<FilterType>('all');

  const handleChangeColumnTitle = async (id: number, newTitle: string) => {


    if (!userData?.token || !userData?.userId) {
      console.error('Необходим токен и userId для обновления колонки.');
      return;
    }

    const taskColumnId = id;
    try {
      const updatedColumn = await updateColumnsService(
        userData?.token,
        userData?.userId,
        taskColumnId,
        newTitle,
      );

      dispatch(updateColumn({ id, title: updatedColumn.title })); // Обновляем состояние в Redux
    } catch (error) {
      console.error('Ошибка при обновлении колонки:', error);
    }
  };

  const handleDeleteColumn = async (id: number, title: string) => {
    console.log('Удаление колонки с id:', id, 'и заголовком:', title); // Логирование id


    const taskColumnId = id;

    if (!userData?.token || !taskColumnId) {
      console.error(
        'Необходим токен и корректный taskColumnId для удаления колонки.',
      );
      return;
    }

    try {
      await deleteColumnService(userData?.token, taskColumnId);

      dispatch(deleteColumn(id));
    } catch (error) {
      console.error('Ошибка при удалении колонки:', error);
    }
  };

  // Функция перемещения колонок
  const moveColumn = (dragIndex: number, hoverIndex: number) => {
    const updatedColumns = [...columns];
    const [movedColumn] = updatedColumns.splice(dragIndex, 1);
    updatedColumns.splice(hoverIndex, 0, movedColumn);

    // Обновляем состояние в Redux
    dispatch(setColumns(updatedColumns));
  };

  return (
    <Wrapper>
      {board.loading ? (
        <p>Загрузка</p>
      ) : board.error ? (
        <div>Ошибка при загрузке данных: {board.error.message}</div>
      ) : (
        <>
          <Div>
            <Filter filter={filter} setFilter={setFilter} />
          </Div>

          <Ul>
            {columns.map(({ id, title }, index) => {
              const filteredTasks = filterTaskByFilter(tasks, filter);

              return (
                <DraggableColumn
                  key={id}
                  index={index}
                  id={id}
                  title={title}
                  tasks={filteredTasks.filter((task) => task.columnId === id)}
                  moveColumn={moveColumn}
                  onEditTitle={(newTitle) =>
                    handleChangeColumnTitle(id, newTitle)
                  }
                  onDelete={() => handleDeleteColumn(id, title)}
                />
              );
            })}

            <AddColumnButton />
          </Ul>
        </>
      )}
    </Wrapper>
  );
};
