import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'svg'> {}

export const CheckIcon: FC<Props> = (props) => (
  <svg
    width="5"
    height="4"
    viewBox="0 0 5 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.5 1.83335L1.47978 2.8131C1.67505 3.00835 1.9916 3.0084 2.1869 2.8131L4.5 0.5"
      stroke="black"
      strokeLinecap="round"
    />
  </svg>
);
