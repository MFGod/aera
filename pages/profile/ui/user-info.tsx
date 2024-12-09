import styled from 'styled-components';
import { StyledAddIcon } from '../../../public/assets/icons/add-column';
import { PhotoIcon } from '../../../public/assets/icons/photo';
import { useUserData } from '@/hooks/getUserData';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 14px;

  padding: 8px 14px;
  width: max-content;

  background-color: transparent;

  border: 1px solid #1d1e24;
  border-radius: 50px;

  cursor: pointer;

  &:active {
    outline: none;
  }
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

export const UserInfo = () => {
  const { userData, loading } = useUserData();
  console.log(userData);

  return (
    <Wrapper>
      <PhotoIcon />

      <Div>
        <Input
          type="text"
          value={userData?.username}
          onChange={() => { }}
        //placeholder={placeholder}
        //onFocus={() => setPlaceholder('')}
        />
        <Button>
          Специальность <StyledAddIcon />
        </Button>
        <Button>
          описание <StyledAddIcon />
        </Button>
      </Div>
    </Wrapper>
  );
};
