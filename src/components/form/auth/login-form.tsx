import styled from 'styled-components';

import { useLogin } from '../../../hooks/useLogin';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Input = styled.input`
  font-size: 20px;
  color: #1d1e24;
  text-align: center;

  min-width: 500px;

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

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

export const LoginForm = () => {
  const {
    emailLogin,
    setEmailLogin,
    password,
    setPassword,
    error,
    handleSubmit,
  } = useLogin();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="email"
        value={emailLogin}
        onChange={(e) => setEmailLogin(e.target.value)}
        placeholder="логин"
        required
      />

      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="пароль"
        required
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <StyledButton type="submit">вход</StyledButton>
    </StyledForm>
  );
};
