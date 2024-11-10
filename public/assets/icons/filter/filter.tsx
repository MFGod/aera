import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'svg'> {}

const FilterIcon: FC<Props> = (props) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.3125 0.666667C0.3125 0.29848 0.61098 0 0.979167 0H11.6458C12.014 0 12.3125 0.29848 12.3125 0.666667C12.3125 1.03485 12.014 1.33333 11.6458 1.33333H0.979167C0.61098 1.33333 0.3125 1.03485 0.3125 0.666667ZM2.3125 4C2.3125 3.6318 2.61098 3.33333 2.97917 3.33333H9.64583C10.014 3.33333 10.3125 3.6318 10.3125 4C10.3125 4.3682 10.014 4.66667 9.64583 4.66667H2.97917C2.61098 4.66667 2.3125 4.3682 2.3125 4ZM4.3125 7.33333C4.3125 6.96513 4.61098 6.66667 4.97917 6.66667H7.64583C8.01403 6.66667 8.3125 6.96513 8.3125 7.33333C8.3125 7.70153 8.01403 8 7.64583 8H4.97917C4.61098 8 4.3125 7.70153 4.3125 7.33333Z"
    />
  </svg>
);

export const StyledFilterIcon = styled(FilterIcon)<{ $isActive: boolean }>`
  width: 20px;
  height: 20px;
  padding: 2px;

  fill: ${({ $isActive }) => ($isActive ? ' #ffffff' : ' #1d1e24')};
`;
