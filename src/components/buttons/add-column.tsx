import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getUserData } from '../../hooks/getUserData';
import { addColumnService } from '../../services/column-service';
import { addColumn, IColumn } from '../../store/column-slice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  font-size: 16px;
  width: 300px;

  color: #1d1e24;

  background-color: transparent;

  border: none;
`;

const Button = styled.button`
  text-align: center;

  font-size: 16px;
  padding: 14px 16px;

  background-color: #ffffff;

  border-radius: 15px;
  border: 0.5px solid #1d1e24;
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
          onChange={e => setTitle(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setPlaceholder('')} // Убираем placeholder при фокусе
          onBlur={() => {
            setPlaceholder('Введите название колонки'); // Возвращаем placeholder только если поле пустое
          }}
        />
        {/*<StyledAddColumnIcon onClick={handleAddColumn} />*/}
      </Div>

      <Button onClick={handleAddColumn}>
        нажмите чтобы создать новую колонку
      </Button>
    </Wrapper>
  );
};
