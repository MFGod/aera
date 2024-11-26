import { useRef } from 'react';
import styled from 'styled-components';

import { StyledCalendarIcon } from '../../../../../public/assets/icons/calendar';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateInput = styled.input.attrs({ type: 'date' })`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
`;

// Стили для контейнера с иконкой
const CalendarIconWrapper = styled.div`
  cursor: pointer;
`;

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomDateInput = ({ value, onChange }: Props) => {
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  // Обработчик клика по иконке
  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Показываем календарь
    }
  };

  return (
    <Wrapper onClick={handleIconClick}>
      <DateInput ref={dateInputRef} value={value} onChange={onChange} />

      <StyledCalendarIcon />
    </Wrapper>
  );
};
