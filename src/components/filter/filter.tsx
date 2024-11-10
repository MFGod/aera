import { useState } from 'react';
import styled from 'styled-components';

import { FilterType } from '../../utils/task-utils';
import { FilterButton } from '../buttons/filter-button';
import { FilterPanel } from './panel/filter-panel';

const Div = styled.div`
  position: relative;
`;

interface Props {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const Filter = ({ filter, setFilter }: Props) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handlePanelOpen = () =>
    isPanelOpen === false ? setIsPanelOpen(true) : setIsPanelOpen(false);
  return (
    <Div>
      <FilterButton
        onClick={() => handlePanelOpen()}
        isPanelOpen={isPanelOpen}
      />

      <FilterPanel
        onClick={() => handlePanelOpen()}
        isPanelOpen={isPanelOpen}
        filter={filter}
        setFilter={setFilter}
      />
    </Div>
  );
};
