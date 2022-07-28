import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { Overlay, Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <>
      <Overlay>
        <Container>
          {children}
        </Container>
      </Overlay>
    </>, document.body
  )
}