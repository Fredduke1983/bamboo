import styled from "styled-components";
import { colors } from "../../utils/_variables";

const HeaderNav = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  padding: 65px 80px;
  background-color: #00000005;
  box-shadow: 0px 1px 4px black;
`;

const HeaderLogo = styled.img`
  position: absolute;
  width: 44px;
  height: 65px;
  transform: translateY(-30%);
`;

const HeaderTitle = styled.h1`
  font-size: 38px;

  color: ${colors.mainTextColor};
  margin-right: 120px;
  margin-left: 60px;
`;

const HeaderList = styled.ul`
  display: flex;
  gap: 45px;
  font-size: 20px;
  color: ${colors.mainTextColor};
`;

const HeaderListItem = styled.li`
  transition: color 300ms;
  &:hover {
    color: ${colors.accentColor};
  }
`;

export { HeaderNav, HeaderList, HeaderTitle, HeaderLogo, HeaderListItem };
