import { useRouter } from 'next/router';
import {
  FC,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  ComponentPropsWithRef,
} from 'react';
import styled from 'styled-components';
import { CloseButton } from './close-button';


interface IModalProps extends ComponentPropsWithRef<'dialog'> {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Wrapper = styled.dialog`
  margin: auto;

  background-color: white;
  border: none;

  ::backdrop {
    background-color: #000000aa;
  }
`;

const Controls = styled.div`
  margin-bottom: 16px;

  display: flex;
  justify-content: flex-end;
`;

const Close = styled(CloseButton)`
  cursor: pointer;
`;

export const Modal: FC<IModalProps> = ({
  open,
  setOpen,
  onClose,
  ...props
}) => {
  const initialRender = useRef(true);
  const router = useRouter();
  const ref = useRef<HTMLDialogElement>(null);

  const handleEscapePress = (event: KeyboardEvent) =>
    event.key === 'Escape' && closeModal();

  const handleOutsideClick = (event: MouseEvent) =>
    event.target === ref.current && closeModal();

  const openModal = () => {
    setOpen(true);

    ref.current?.showModal();
    ref.current?.addEventListener('click', handleOutsideClick);

    document.body.style.setProperty('overflow', 'hidden');
    document.addEventListener('keydown', handleEscapePress);
  };

  const closeModal = () => {
    setOpen(false);

    document.body.style.removeProperty('overflow');
    document.removeEventListener('keydown', handleEscapePress);

    ref.current?.close();
    ref.current?.removeEventListener('click', handleOutsideClick);
  };

  const controlModal = () => (open ? openModal() : closeModal());

  useEffect(() => {
    router.events.on('routeChangeStart', controlModal);

    return () => {
      router.events.off('routeChangeStart', controlModal);
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      controlModal();
    }
  }, [open]);

  return (
    <Wrapper ref={ref} onClose={onClose} {...props}>
      <Controls>
        <Close width={40} height={40} name="cross" onClick={closeModal} />
      </Controls>

      {props.children}
    </Wrapper>
  );
};
