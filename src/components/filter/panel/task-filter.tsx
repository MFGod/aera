import { FC } from 'react';
import styled from 'styled-components';

import { AllTasksIcon } from '../../../../public/assets/icons/filter/all-tasks';
import { CheckIcon } from '../../../../public/assets/icons/filter/check';
import { RecentlyAddedIcon } from '../../../../public/assets/icons/filter/recently-added';
import { ThisWeekIcon } from '../../../../public/assets/icons/filter/this-week';
import { FilterType } from '../../../utils/task-utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Li = styled.li<{ $isActive: boolean }>`
  font-size: 14px;
  color: #1d1e24;

  display: flex;
  align-items: center;
  gap: 6px;

  cursor: pointer;
`;

const CustomCheckbox = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid #1d1e24;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCheckIcon = styled(CheckIcon)<{ $isActive: boolean }>`
  width: 7px;
  height: 7px;

  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
`;

interface Properties {
  tasksCount: { [key: string]: number };
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TaskFilter: FC<Properties> = ({
  tasksCount,
  currentFilter,
  onFilterChange,
}) => {
  const handleFilterChange = (filter: FilterType) => {
    onFilterChange(currentFilter === filter ? 'none' : filter);
  };

  return (
    <Wrapper>
      <p>фильтрация по:</p>
      <Ul>
        {Object.entries(tasksCount).map(([key]) => (
          <Li
            key={key}
            $isActive={currentFilter === key}
            onClick={() => handleFilterChange(key as FilterType)}
          >
            <CustomCheckbox>
              <StyledCheckIcon $isActive={currentFilter === key} />
            </CustomCheckbox>
            {key === 'recentlyAdded' && (
              <>
                <RecentlyAddedIcon />
                Недавно добавленные
              </>
            )}
            {key === 'all' && (
              <>
                <AllTasksIcon />
                Все задачи
              </>
            )}
            {key === 'week' && (
              <>
                <ThisWeekIcon />
                Сделать на неделе
              </>
            )}
          </Li>
        ))}
      </Ul>
    </Wrapper>
  );
};
