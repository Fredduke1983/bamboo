import styled from "styled-components";
import { colors } from "../../utils/_variables";

const RegistrationFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  gap: 50px;
  margin: 0 auto;
  background-color: ${colors.bgColor};
  @media screen and (min-width: 320px) {
    width: 250px;
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 550px;
    height: 500px;
  }
`;

const RegistrationTitle = styled.p`
  font-family: "Yellowtail", cursive;
  color: ${colors.darkColor};
  font-size: 26px;
  text-shadow: 1px 1px 1px ${colors.mainTextColor};
  letter-spacing: 5px;
`;

const RegistrationForm = styled.form`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;
const RegistrationInputWrapper = styled.div`
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
const RegistrationInput = styled.input`
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
const RegistrationSubmit = styled.button`
  cursor: pointer;

  border: none;
  background-color: #efd000;
  border-radius: 16px;
  min-height: 79px;
  min-width: 160px;
  box-shadow: 1px 1px 5px grey;
  transition: background-color 300ms, box-shadow 300ms;
  font-family: "Roboto", sans-serif;
  color: #274c5b;
  font-weight: 900;
`;

export {
  RegistrationFormWrapper,
  RegistrationTitle,
  RegistrationForm,
  RegistrationInput,
  RegistrationSubmit,
  RegistrationInputWrapper,
};
