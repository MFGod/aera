import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'svg'> {}

const DeleteIcon: FC<Props> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_24_52)">
      <path
        d="M14.364 8L8.00005 14.364"
        stroke="#1D1E24"
        strokeWidth="1.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.36401 8L14.728 14.364"
        stroke="#1D1E24"
        strokeWidth="1.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <rect x="0.5" y="0.5" width="21" height="21" rx="5" stroke="#1D1E24" />
    <defs>
      <rect x="1" y="1" width="20" height="20" rx="4.5" fill="white" />
    </defs>
  </svg>
);

export const StDeleteIcon = styled(DeleteIcon)`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
