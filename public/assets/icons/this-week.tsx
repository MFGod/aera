import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'svg'> {}

export const ThisWeekIcon: FC<Props> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="10" r="10" fill="#F2F2F2" />
    <path
      d="M10.0001 15.2082C12.8766 15.2082 15.2084 12.8763 15.2084 9.99984C15.2084 7.12335 12.8766 4.7915 10.0001 4.7915C7.1236 4.7915 4.79175 7.12335 4.79175 9.99984C4.79175 12.8763 7.1236 15.2082 10.0001 15.2082Z"
      stroke="#1D1E24"
      strokeWidth="0.78125"
    />
    <path
      d="M10 7.9165V9.99984L11.3021 11.3019"
      stroke="#1D1E24"
      strokeWidth="0.78125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
