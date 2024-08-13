import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000069;
  z-index: 100;
`;

const ModalWindow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  min-height: 220px;
  max-height: 80%;
  width: 100%;
  overflow: auto;

  background-color: #fff;
  backdrop-filter: opacity(50%);
  z-index: 100;
  padding: 32px 28px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;

  border-radius: 12px 12px 0px 0px;

  @media (min-width: 620px) {
    width: 470px;
    border-radius: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
    max-height: 532px;
  }
`;

const ModalContext = createContext();

function Open({ children }) {
  const { openModal } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => openModal() });
}

function Title({ children }) {
  return children;
}

function Icon({ children }) {
  return children;
}

function Description({ children }) {
  return children;
}

function Confirm({ children }) {
  const { closeModal } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      closeModal();
      children.props.clickHandler?.();
    },
  });
}

function Window({ children }) {
  const { isOpen, closeModal } = useContext(ModalContext);

  const ref = useRef(null);
  useEffect(() => {
    function clickHandler(e) {
      if (e.target.contains(ref.current) && e.target !== ref.current) closeModal();
    }

    if (!ref.current) return;
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [closeModal]);

  if (!isOpen) return null;
  return createPortal(
    <Overlay>
      <ModalWindow ref={ref}>{children}</ModalWindow>
    </Overlay>,
    document.getElementById("root")
  );
}

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Title = Title;
Modal.Icon = Icon;
Modal.Description = Description;
Modal.Confirm = Confirm;

export default Modal;
