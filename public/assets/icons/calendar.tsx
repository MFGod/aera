import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'svg'> {}

const CalendarIcon: FC<Props> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 9C1.5 6.17157 1.5 4.75736 2.37868 3.87868C3.25736 3 4.67157 3 7.5 3H10.5C13.3284 3 14.7427 3 15.6213 3.87868C16.5 4.75736 16.5 6.17157 16.5 9V10.5C16.5 13.3284 16.5 14.7427 15.6213 15.6213C14.7427 16.5 13.3284 16.5 10.5 16.5H7.5C4.67157 16.5 3.25736 16.5 2.37868 15.6213C1.5 14.7427 1.5 13.3284 1.5 10.5V9Z"
      stroke="white"
      strokeWidth="0.78125"
    />
    <path
      d="M5.25 3V1.875"
      stroke="white"
      strokeWidth="0.78125"
      strokeLinecap="round"
    />
    <path
      d="M12.75 3V1.875"
      stroke="white"
      strokeWidth="0.78125"
      strokeLinecap="round"
    />
    <path
      d="M1.875 6.75H16.125"
      stroke="white"
      strokeWidth="0.78125"
      strokeLinecap="round"
    />
    <path
      d="M13.5 12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75C12 12.3358 12.3358 12 12.75 12C13.1642 12 13.5 12.3358 13.5 12.75Z"
      fill="white"
    />
    <path
      d="M13.5 9.75C13.5 10.1642 13.1642 10.5 12.75 10.5C12.3358 10.5 12 10.1642 12 9.75C12 9.33578 12.3358 9 12.75 9C13.1642 9 13.5 9.33578 13.5 9.75Z"
      fill="white"
    />
    <path
      d="M9.75 12.75C9.75 13.1642 9.41422 13.5 9 13.5C8.58578 13.5 8.25 13.1642 8.25 12.75C8.25 12.3358 8.58578 12 9 12C9.41422 12 9.75 12.3358 9.75 12.75Z"
      fill="white"
    />
    <path
      d="M9.75 9.75C9.75 10.1642 9.41422 10.5 9 10.5C8.58578 10.5 8.25 10.1642 8.25 9.75C8.25 9.33578 8.58578 9 9 9C9.41422 9 9.75 9.33578 9.75 9.75Z"
      fill="white"
    />
    <path
      d="M6 12.75C6 13.1642 5.66421 13.5 5.25 13.5C4.83579 13.5 4.5 13.1642 4.5 12.75C4.5 12.3358 4.83579 12 5.25 12C5.66421 12 6 12.3358 6 12.75Z"
      fill="white"
    />
    <path
      d="M6 9.75C6 10.1642 5.66421 10.5 5.25 10.5C4.83579 10.5 4.5 10.1642 4.5 9.75C4.5 9.33578 4.83579 9 5.25 9C5.66421 9 6 9.33578 6 9.75Z"
      fill="white"
    />
  </svg>
);

export const StyledCalendarIcon = styled(CalendarIcon)`
  width: 20px;
  height: 20px;
  padding-bottom: 2px;

  cursor: pointer;
`;
