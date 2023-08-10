import styled from "styled-components";
import { colors } from "../../utils/_variables";

const HeroTitle = styled.h1`
  text-align: center;
  text-shadow: 1px 1px black;
  padding-top: 5%;

  font-family: "Yellowtail", cursive;
  font-size: 36px;
  color: ${colors.titleColor};
`;
const HeroWrapper = styled.div`
  width: 550px;
  margin: 0 auto;
  margin-top: 80px;
`;

const HeroDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 26px;
  color: ${colors.mainTextColor};
  width: 250px;
`;

const HeroExploreBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: #efd000;
  border-radius: 16px;
  min-height: 79px;
  min-width: 160px;
  margin-top: 100px;
  box-shadow: 1px 1px 5px grey;
  transition: background-color 300ms, box-shadow 300ms;

  font-family: "Roboto", sans-serif;
  color: ${colors.mainTextColor};
  font-weight: 900;

  &:hover {
    background-color: #efd372;
  }

  &:active {
    background-color: #efd000;
    box-shadow: 0px 0px 1px grey;
  }
`;

export { HeroTitle, HeroDescription, HeroExploreBtn, HeroWrapper };
