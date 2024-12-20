import Link from 'next/link';
import styled from 'styled-components';

import { LoginForm } from '../../src/components/form/auth/login-form';
import { Logo, LogoSizes } from '../../src/components/logo/logo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 100vh;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const StyledLink = styled(Link)`
  font-size: 12px;

  color: #1d1e24;

  opacity: 30%;
`;

const AuthorizationPage = () => {
  return (
    <Wrapper>
      <Div>
        <Logo size={LogoSizes.Small} />

        <LoginForm />
      </Div>

      <StyledLink href={'/registration'}>региСТРацИя</StyledLink>
    </Wrapper>
  );
};

export default AuthorizationPage;
