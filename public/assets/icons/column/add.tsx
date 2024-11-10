import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'svg'> {}

const AddColumnIcon: FC<Props> = (props) => (
  <svg
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="0.5">
      <path
        d="M5.53101 1.51257L5.53101 8.26257"
        stroke="#1D1E24"
        strokeWidth="0.964285"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.12939 4.98401L8.87939 4.98401"
        stroke="#1D1E24"
        stroke-width="0.964285"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const StyledAddColumnIcon = styled(AddColumnIcon)`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
