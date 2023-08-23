import styled from "styled-components";
import { colors } from "../../utils/_variables";

const HeaderNav = styled.header`
  /* position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  padding: 45px 0;

  @media screen and (max-width: 1279px) {
    gap: 20px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 25px 0;
  } */
`;
const LogoTitleWrapper = styled.div`
  @media screen and (min-width: 320px) {
    padding: 15px 0;
  }
  /* display: flex;
  align-items: center; */
`;

const HeaderLogo = styled.img`
  height: 65px;
`;

const HeaderTitle = styled.h1`
  font-size: 38px;

  color: ${colors.mainTextColor};
  /* margin-right: 80px;
  margin-left: 6px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 25px 0;
    margin-right: 0;
    margin-left: 0;
  } */
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 15px;
    font-size: 20px;
    color: ${colors.mainTextColor};
  }
`;

const HeaderListItem = styled.li`
  transition: color 300ms;
  &:hover {
    color: ${colors.accentColor};
  }
`;

export {
  HeaderNav,
  HeaderList,
  HeaderTitle,
  HeaderLogo,
  HeaderListItem,
  LogoTitleWrapper,
  MenuWrapper,
};
