import styled from 'styled-components';

import { LogoIcon } from '../../../public/assets/icons/logo';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;
`;

const Text = styled.p<{ size: string }>`
  font-size: ${({ size }) => size || '88px'};

  &::first-letter {
    font-family: 'Dirtyline 36Daysoftype 2022'; /* Специальный шрифт для первой буквы */
  }
`;

const StyledLogoIcon = styled(LogoIcon)<{ $iconSize: string }>`
  width: ${({ $iconSize }) => $iconSize || '70px'};
  height: ${({ $iconSize }) => $iconSize || '70px'};
`;

type Properties = {
  size: keyof typeof LogoSizes;
};

export let LogoSizes = {
  Small: 'Small',
  Medium: 'Medium',
} as const;

let IconSizes = {
  [LogoSizes.Small]: '70px',
  [LogoSizes.Medium]: '116px',
};

let TextSizes = {
  [LogoSizes.Small]: '88px',
  [LogoSizes.Medium]: '116px',
};

export const Logo = ({ size }: Properties) => (
  <Wrapper>
    <Div>
      <StyledLogoIcon $iconSize={IconSizes[size]} />
      <Text size={TextSizes[size]}>Aera</Text>
    </Div>

    <p>Твой taskmanager</p>
  </Wrapper>
);
