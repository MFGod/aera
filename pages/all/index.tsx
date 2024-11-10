import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Board } from '../../src/components/board/board';
import { Header } from '../../src/components/header/header';

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

interface DragContext {
  canDrag?: boolean;
  setCanDrag: (canDrag: boolean) => void;
}

const DragContext = createContext<DragContext>({
  canDrag: true,
  setCanDrag: () => {},
});

interface Propterties {
  children: ReactNode;
}
export const DragProvider: FC<Propterties> = ({ children }) => {
  const [canDrag, setCanDrag] = useState(true);

  return (
    <DragContext.Provider value={{ canDrag, setCanDrag }}>
      {children}
    </DragContext.Provider>
  );
};

export const useCanDrag = () => useContext(DragContext);

const AllPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    }
  }, [router]);

  const onLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    router.push('/');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <DragProvider>
        <Header />
        <Board />
        <StyledButton onClick={onLogout}>Выйти</StyledButton>
      </DragProvider>
    </DndProvider>
  );
};

export default AllPage;
