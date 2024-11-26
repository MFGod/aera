import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  flex: 3;
`;

const NoticesDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 21px 24px;

  border: 0.5px solid #1d1e24;
  border-radius: 15px;
`;

export const Notices = ({}) => (
  <Wrapper>
    <p>Уведомления: число</p>
    <NoticesDiv>тут будут уведомления</NoticesDiv>
  </Wrapper>
);
