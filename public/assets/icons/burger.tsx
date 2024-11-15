import { ComponentProps, FC } from 'react';
import styled from 'styled-components';

interface Props extends ComponentProps<'svg'> {}

export const BurgerIcon: FC<Props> = (props) => (
  <svg
    width="32"
    height="10"
    viewBox="0 0 32 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="32" height="3" fill="#1D1E24" />
    <rect y="7" width="32" height="3" fill="#1D1E24" />
  </svg>
);

export const StyledBurgerIcon = styled(BurgerIcon)`
  width: 42px;
  height: 20px;

  cursor: pointer;
`;
