import styled from 'styled-components';

import { StyledFilterIcon } from '../../../public/assets/icons/filter/filter';

const Button = styled.button<{ $isActive: boolean }>`
  font-size: 14px;
  padding: 10px 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ $isActive }) => ($isActive ? ' #ffffff' : '#1d1e24')};
  background-color: ${({ $isActive }) => ($isActive ? ' #1d1e24 ' : '#ffffff')};

  border: 0.5px solid #1d1e24;
  border-radius: 24px;

  cursor: pointer;
`;

interface Props {
  onClick: () => void;
  isPanelOpen: boolean;
}

export const FilterButton = ({ onClick, isPanelOpen }: Props) => {
  return (
    <Button onClick={onClick} $isActive={isPanelOpen}>
      <StyledFilterIcon $isActive={isPanelOpen} />
      фильтр
    </Button>
  );
};
