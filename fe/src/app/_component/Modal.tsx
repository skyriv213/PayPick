import { createPortal } from 'react-dom';
import { useState,useEffect } from "react";
import * as styles from './Modal.css'

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, children }) => {

const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null);

useEffect(() => {
  setModalContainer(document.getElementById("modal"));
}, []);
if (!open || !modalContainer) return null;

  return createPortal(
    <div className={styles.modalContainer}>
        {children}
    </div>,
    modalContainer
  );
};

export default Modal;