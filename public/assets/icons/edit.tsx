import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'svg'> {}

export const EditIcon: FC<Props> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_24_120)">
      <path
        d="M15.0749 8.96999L9.13986 14.905C8.60986 15.44 7.02486 15.685 6.63986 15.33C6.25486 14.975 6.53485 13.39 7.06485 12.855L12.9999 6.92C13.2739 6.65901 13.6392 6.51549 14.0176 6.5201C14.396 6.52471 14.7576 6.67709 15.0252 6.94469C15.2928 7.21229 15.4452 7.57391 15.4498 7.95232C15.4544 8.33073 15.3109 8.69595 15.0499 8.96999H15.0749Z"
        stroke="#1D1E24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 15.5H11"
        stroke="#1D1E24"
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

export const StyledEditIcon = styled(EditIcon)`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
