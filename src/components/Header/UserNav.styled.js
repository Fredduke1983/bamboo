import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../utils/_variables";

const AsideNav = styled.div`
  display: flex;
  margin-left: 0;

  @media screen and (min-width: 320px) {
    justify-content: flex-end;
  }
`;

const AsideNavForm = styled.form`
  position: relative;
  align-self: end;
  margin-right: 10px;
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
  height: 38px;
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
  background-color: transparent;
  top: 1px;
  right: 2px;
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid grey;
  border-radius: 36px;
  width: 70px;
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

export {
  AsideNav,
  AsideNavForm,
  AsideNavInput,
  AsideNavSubmit,
  AsideNavBasket,
  BasketBtn,
};
