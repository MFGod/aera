import styled from 'styled-components';

import { useRegistration } from '../../../hooks/useRegistration';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  font-size: 16px;
  color: #1d1e24;

  min-width: 300px;

  padding: 18px 30px;

  border: 1px solid #1d1e24;
  border-radius: 50px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #1d1e24;
    opacity: 30%;
  }
`;

const StyledButton = styled.button`
  align-self: center;

  font-size: 20px;

  padding: 16px 56px;

  background-color: transparent;

  border: 1px solid #1d1e24;
  border-radius: 50px;

  cursor: pointer;

  &:active {
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

export const RegistrationForm = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    handleSubmit,
  } = useRegistration();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Wrapper>
        <Block>
          <Input
            type="text"
            placeholder="имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Block>
        <Block>
          <Input
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Подтверждение пароля"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Block>
      </Wrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledButton type="submit">региСТРацИя</StyledButton>
    </StyledForm>
  );
};
