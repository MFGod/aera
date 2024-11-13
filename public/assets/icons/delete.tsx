import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'svg'> {}

const DeleteIcon: FC<Props> = (props) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_120_635)">
      <path
        d="M9.68652 5.5498L5.54995 9.68638"
        stroke="#1D1E24"
        strokeWidth="0.835714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.78662 5.5498L9.9232 9.68638"
        stroke="#1D1E24"
        strokeWidth="0.835714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <rect
      x="0.675"
      y="0.675"
      width="13.65"
      height="13.65"
      rx="3.25"
      stroke="#1D1E24"
      strokeWidth="0.65"
    />
    <defs>
      <rect x="1" y="1" width="13" height="13" rx="2.925" fill="white" />
    </defs>
  </svg>
);

export const StyledDeleteIcon = styled(DeleteIcon)`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
