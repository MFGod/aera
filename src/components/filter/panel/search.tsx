import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { StyledSearchIcon } from '../../../../public/assets/icons/filter/search';

import { setSearchQuery } from '../../../store/task-slice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Div = styled.div`
  padding: 8px 14px;

  border: 1px solid #1d1e24;
  border-radius: 50px;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  font-size: 12px;

  width: -webkit-fill-available;
  color: #1d1e24;
  opacity: 30%;

  border: none;
  outline: none;

  &:focus {
    opacity: 100%;
  }
`;

export const Search = () => {
  const [searchItem, setSearchItem] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchItem(query);
    dispatch(setSearchQuery(query));
  };

  return (
    <Wrapper>
      <label>Поиск</label>
      <Div>
        <StyledSearchIcon />
        <Input
          type="text"
          placeholder="ключевое слово"
          value={searchItem}
          onChange={handleChange}
        />
      </Div>
    </Wrapper>
  );
};
