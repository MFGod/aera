import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'svg'> {}

export const AllTasksIcon: FC<Props> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="10" r="10" fill="#F2F2F2" />
    <rect x="7.5" y="7.5" width="8" height="2" rx="1" fill="#1D1E24" />
    <rect x="4.5" y="7.5" width="2" height="2" rx="1" fill="#1D1E24" />
    <rect x="7.5" y="10.5" width="8" height="2" rx="1" fill="#1D1E24" />
    <rect x="4.5" y="10.5" width="2" height="2" rx="1" fill="#1D1E24" />
  </svg>
);
