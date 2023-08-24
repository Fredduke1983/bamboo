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
  .burger-menu {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: transform 0.6s;
    transform-origin: center;
    animation: ${rotateAnimation} 0.6s linear;
  }
`;

const BurgerMenuBtn = styled.button`
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
    padding: 15px 0;
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
  BurgerMenuBtn,
};
