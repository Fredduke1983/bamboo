import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/_variables";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0) scale(1);
  }
  50%{
    transform:scale(0.5);
  }
  100% {
    transform: rotate(180deg) scale(1);
  }
`;

const MenuNavigationWrapper = styled.div``;

const HeaderNav = styled.header`
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  .burger-menu {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    transition: transform 0.6s;
    transform-origin: center;
    animation: ${rotateAnimation} 0.6s linear;

    &.close {
      color: ${colors.lightColor};
    }
  }
`;

const BurgerMenuBtn = styled.button`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }

  display: block;
  z-index: 2;
  position: relative;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  background-color: transparent;

  border: none;
`;

const LogoTitleWrapper = styled.div`
  @media screen and (min-width: 320px) {
    padding-bottom: 15px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const HeaderLogo = styled.img`
  height: 65px;
`;

const HeaderTitle = styled.h1`
  font-size: 38px;

  color: ${colors.mainTextColor};
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
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
  MenuNavigationWrapper,
  HeaderNav,
  HeaderList,
  HeaderTitle,
  HeaderLogo,
  HeaderListItem,
  LogoTitleWrapper,
  MenuWrapper,
  BurgerMenuBtn,
};
