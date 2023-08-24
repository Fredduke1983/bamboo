import styled from "styled-components";

const ModalMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  transition: opacity 0.6s, transform 1s;

  &.open {
    opacity: 1;
    transform: translateY(0);
  }
  &.close {
    opacity: 0;
    transform: translateY(100%);
  }
`;

export { ModalMenuWrapper };
