import styled from "styled-components";

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
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
  min-height: 300px;
  width: 80%;
  max-width: 400px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
