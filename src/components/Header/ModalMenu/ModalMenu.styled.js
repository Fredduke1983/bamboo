import styled from "styled-components";
import bg from "../../../img/menu/falling-snow.gif";
import { colors } from "../../../utils/_variables";

const ModalMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  color: ${colors.lightColor};
  background-size: cover;
  transition: opacity 0.6s, transform 1s;

  &.open {
    opacity: 1;
    z-index: 1;
    /* transform: translateY(0); */
  }
  &.close {
    opacity: 0;
    z-index: -1;
    /* transform: translateY(100%); */
  }
`;

export { ModalMenuWrapper };
