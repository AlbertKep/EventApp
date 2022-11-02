import styled from "styled-components";

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
export const ModalContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 275px;
  min-height: 300px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
