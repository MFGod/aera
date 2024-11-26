import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getUserData } from '../../hooks/getUserData';
import { addColumnService } from '../../services/column-service';
import { addColumn, IColumn } from '../../store/column-slice';
import { StyledAddIcon } from '../../../public/assets/icons/add-column';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 293px;
  font-size: 16px;
  color: #1d1e24;

  background-color: transparent;

  border: none;

  &:focus {
    outline: none;
  }
`;

export const AddColumnButton = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [placeholder, setPlaceholder] = useState('Введите название колонки');

  const handleAddColumn = async () => {
    if (!title.trim()) {
      console.error('Название колонки не может быть пустым');
      return;
    }

    const { token, userId } = getUserData();

    if (!token || !userId) {
      console.error('Необходим токен и userId для добавления колонки.');
      return;
    }

    const newColumn: Omit<IColumn, 'id'> = {
      title,
    };

    try {
      const createdColumn = await addColumnService(token, userId, newColumn);
      dispatch(addColumn({ id: createdColumn.id, title: newColumn.title }));
      setTitle('');
    } catch (error) {
      console.error('Ошибка при добавлении колонки:', error);
    }
  };
  return (
    <Wrapper>
      <Div>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setPlaceholder('')}
          onBlur={() => {
            setPlaceholder('Введите название колонки');
          }}
        />
        <StyledAddIcon onClick={handleAddColumn} />
      </Div>
    </Wrapper>
  );
};
