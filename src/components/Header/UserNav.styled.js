import styled from "styled-components";
import { colors } from "../../utils/_variables";

const AsideNav = styled.div`
  display: flex;
  margin-left: 20px;
`;

const AsideNavForm = styled.form`
  position: relative;
  margin-right: 10px;
`;
const AsideNavInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  padding: 0 40px 0 20px;
  border: 1px solid grey;
  border-radius: 36px;
  min-width: 250px;
  height: 38px;
  background-color: #fafafa;
  &:focus {
    height: 38px;
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
  align-items: center;
  border: 1px solid grey;
  border-radius: 36px;
  width: 70px;
`;

const BasketBtn = styled.button`
  background: none;
  width: 39px;
  height: 39px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  fill: ${colors.accentColor};
  transition: fill 300ms;
  &:hover {
    fill: #3c9371;
  }
  &:active {
    fill: #3cb000;
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
