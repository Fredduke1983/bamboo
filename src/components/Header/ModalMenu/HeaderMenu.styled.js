import styled from "styled-components";
import { colors } from "../../../utils/_variables";

const HeaderMenuList = styled.ul`
  display: grid;
  gap: 20px;
  padding-top: 80px;
`;
const HeaderMenuItem = styled.li`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 22px;
  transition: scale 300ms;
  &:hover {
    scale: 1.2;
    color: ${colors.accentColor};
  }
`;

export { HeaderMenuItem, HeaderMenuList };
