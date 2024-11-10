import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'svg'> {}

export const OpenTaskIcon: FC<Props> = (props) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.93506 4.91406L4.94981 7.65324e-05L3.71237 1.23751L6.57013 4.05442L0.920937 4.07486L0.92725 5.81832L6.57644 5.79787L3.739 8.63531L4.98531 9.86381L9.93506 4.91406Z"
      fill="#1D1E24"
    />
  </svg>
);

export const StyledOpenTaskIcon = styled(OpenTaskIcon)`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
