import { useState } from 'react';
import styled from 'styled-components';

import { AddTaskModal } from '../modals/crud/add-modal';

const Button = styled.button`
  text-align: center;

  font-size: 16px;
  padding: 14px 16px;

  background-color: #ffffff;

  border-radius: 15px;
  border: 0.5px solid #1d1e24;
`;

interface Props {
  columnId: number;
}

export const AddTaskButton = ({ columnId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>создать новую задачу</Button>

      <AddTaskModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        columnId={columnId}
      />
    </>
  );
};
