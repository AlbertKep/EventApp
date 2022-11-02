import { ModalBackdrop, ModalContainer } from "./Modal.styled";

export default function Modal({ children }) {
  return (
    <ModalBackdrop>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackdrop>
  );
}
