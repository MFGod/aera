import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { StyledCloseModalIcon } from '../../../public/assets/icons/close-modal';

const ModalOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: end;
  align-items: end;

  background: rgba(0, 0, 0, 0.5);

  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  width: 50%;
  height: 80%;

  padding: 40px;

  border-top-left-radius: 15px;
  border-top: 0.5px solid #1d1e24;
  border-left: 0.5px solid #1d1e24;

  background: #ffffff;
`;

interface ModalInterface {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalInterface> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent ref={modalRef}>
        <StyledCloseModalIcon onClick={onClose} />
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
