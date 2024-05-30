import { createPortal } from 'react-dom';
import { useState,useEffect } from "react";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ open, children, className }) => {
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalContainer(document.getElementById("modal"));
  }, []);

  if (!open || !modalContainer) return null;

  return createPortal(
    <div className={className}>
        {children}
    </div>,
    modalContainer
  );
};

export default Modal;