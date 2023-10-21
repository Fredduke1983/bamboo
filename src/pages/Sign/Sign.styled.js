import styled from "styled-components";
import { colors } from "../../utils/_variables";

const SignFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  gap: 50px;
  margin: 0 auto;
  padding: 40px 10px;

  background-color: ${colors.bgColor};
  @media screen and (min-width: 320px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 550px;
    height: 500px;
    padding: 0;
  }
`;

const SignTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: ${colors.darkColor};
  font-size: 26px;
  text-shadow: 1px 1px 1px ${colors.mainTextColor};
  letter-spacing: 3px;
`;

const SignForm = styled.form`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
const SignInputWrapper = styled.div`
  position: relative;
  span {
    position: absolute;
    left: 2px;
    top: 43px;

    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: ${colors.darkColor};
  }
`;
const SignInput = styled.input`
  padding: 4px 8px;
  font-size: 14px;
  border: 2px solid ${colors.textColor};
  border-radius: 5px;

  @media screen and (min-width: 320px) {
    width: 160px;
    height: 28px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
const SignSubmit = styled.button`
  cursor: pointer;
  border: none;
  background-color: #efd000;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  letter-spacing: 3px;

  color: #274c5b;
  box-shadow: 1px 1px 5px grey;
  text-shadow: 1px 1px 3px grey;

  transition: background-color 300ms, color 300ms, box-shadow 300ms,
    text-shadow 300ms;

  &:hover {
    background-color: #efd055;
    box-shadow: 2px 2px 1px grey;
    text-shadow: 2px 1px 1px grey;

    color: #274c55dd;
  }

  &:active {
    box-shadow: 1px 1px 5px grey;
    text-shadow: 1px 1px 3px grey;
  }

  @media screen and (min-width: 320px) {
    border-radius: 7px;
    min-height: 50px;
    min-width: 120px;
  }
  @media screen and (min-width: 768px) {
    border-radius: 16px;
    min-height: 73px;
    min-width: 160px;
  }
`;

export {
  SignFormWrapper,
  SignTitle,
  SignForm,
  SignInput,
  SignSubmit,
  SignInputWrapper,
};
