import styled from 'styled-components';

const Div = styled.div`
  padding: 22px 36px;

  display: flex;
  justify-content: space-between;

  border-bottom: 0.5px solid #1d1e24;
`;

export const Header = () => {
  return (
    <Div>
      <p>Бургер</p>

      <p>Кабинет</p>
    </Div>
  );
};
