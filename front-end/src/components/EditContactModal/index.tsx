import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { Overlay, Container } from "./styles";

interface ModalProps {
  isOpenEdit: boolean;
  closeEdit: () => void;
  children: ReactNode;
}

export default function EditContactModal({ isOpenEdit, children }: ModalProps) {
  if (!isOpenEdit) return null;

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