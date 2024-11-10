import { useMemo } from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../../store/hooks';
import { selectFilteredTasks } from '../../../store/selectors';

import { FilterType, filterTaskByFilter } from '../../../utils/task-utils';

import { FilterButton } from '../../buttons/filter-button';

import { TaskFilter } from './task-filter';
import { Search } from './search';

const Wrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0px;
  right: 0px;

  padding: 20px;

  width: 328px; /* Ширина боковой панели */
  height: max-content;

  background-color: #ffffff;

  border: 0.5px solid #1d1e24;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 10;

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;

const Text = styled.p`
  font-size: 30px;
  color: #1d1e24;
  opacity: 20%;

  &::first-letter {
    font-family: 'Dirtyline 36Daysoftype 2022';
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

interface Props {
  onClick: () => void;
  isPanelOpen: boolean;
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const FilterPanel = ({
  onClick,
  isPanelOpen,
  filter,
  setFilter,
}: Props) => {
  const tasks = useAppSelector(selectFilteredTasks);
  const columns = useAppSelector((state) => state.columns.columns);

  const tasksCount = useMemo(
    () => ({
      recentlyAdded: filterTaskByFilter(tasks, 'recentlyAdded').length,
      all: filterTaskByFilter(tasks, 'all').length,
      week: filterTaskByFilter(tasks, 'week').length,
    }),
    [tasks, columns]
  );

  return (
    <Wrapper $isOpen={isPanelOpen}>
      <Div>
        <Text>Aera</Text>
        <FilterButton onClick={onClick} isPanelOpen={isPanelOpen} />
      </Div>

      <Search />

      <TaskFilter
        tasksCount={tasksCount}
        currentFilter={filter}
        onFilterChange={setFilter}
      />
    </Wrapper>
  );
};
