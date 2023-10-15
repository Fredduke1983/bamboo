import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../utils/_variables";

const AsideNav = styled.div`
  display: flex;
  margin-left: 0;

  @media screen and (min-width: 320px) {
    justify-content: flex-end;
    flex-wrap: wrap;
  }
`;

const AsideNavFind = styled.div`
  position: relative;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    top: 9px;
    right: 80px;
    position: absolute;
  }
`;
const AsideNavInput = styled.input`
  @media screen and (min-width: 1280px) {
    width: 200px;
  }
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  padding: 0 40px 0 20px;
  border: 1px solid grey;
  border-radius: 36px;
  width: 20px;
  height: 40px;
  background-color: #fafafa;

  transition: width 1s;
  &:focus {
    @media screen and (min-width: 320px) {
      width: 130px;
    }
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
  &.no-empty {
    @media screen and (min-width: 320px) {
      width: 130px;
    }
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
`;
const AsideNavSubmit = styled.button`
  position: absolute;
  top: 1px;
  right: 2px;

  background-color: transparent;
  width: 39px;
  height: 39px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: scale 300ms;
  &:hover {
    scale: 1.2;
  }
  &:active {
    scale: 1.1;
  }
`;

const AsideNavBasket = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 9px;
    right: 0;
  }

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid grey;
  border-radius: 36px;
  width: 70px;
  height: 40px;
`;

const BasketBtn = styled(NavLink)`
  background: none;

  border: none;
  border-radius: 50%;
  cursor: pointer;

  fill: ${colors.accentColor};
  transition: fill 300ms, scale 300ms;
  &:hover {
    fill: #3c9371;
    scale: 1.2;
  }
  &:active {
    fill: #3cb000;
    scale: 1.1;
  }
`;

const LoginoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  gap: 15px;

  font-family: "Yellowtail", cursive;

  @media screen and (min-width: 320px) {
    width: 100%;

    margin: 10px auto 0;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 0 20px;
    width: inherit;
  }

  a {
    display: flex;
    align-items: center;

    color: ${colors.mainTextColor};
    transition: color 300ms;
    &:hover {
      color: ${colors.accentColor};
    }
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

export {
  AsideNav,
  AsideNavFind,
  AsideNavInput,
  AsideNavSubmit,
  AsideNavBasket,
  BasketBtn,
  LoginoutWrapper,
};
