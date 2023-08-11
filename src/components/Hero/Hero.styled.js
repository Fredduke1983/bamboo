import styled from "styled-components";
import { colors } from "../../utils/_variables";
import bg from "../../img/bamboo-bg.jpg";
import bgChina1 from "../../img/china1.jpg";
import bgChina2 from "../../img/china2.jpg";
import bgChina3 from "../../img/china3.jpg";

const HeroSection = styled.section`
  button {
    width: 40px;
  }

  button.slick-prev {
    z-index: 1;
    left: 25px;

    &:before {
      font-size: 40px;
    }
  }

  button.slick-next {
    z-index: 1;
    right: 25px;
    &:before {
      font-size: 40px;
    }
  }
`;

const HeroBG = styled.div`
  position: relative;
  opacity: 0.8;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  &.bg-1 {
    background-image: url(${bg});
  }
  &.bg-2 {
    background-image: url(${bgChina1});
  }
  &.bg-3 {
    background-image: url(${bgChina2});
  }
  &.bg-4 {
    background-image: url(${bgChina3});
  }
`;

const HeroTitle = styled.h1`
  text-align: center;
  text-shadow: 1px 1px #000;
  padding-top: 5%;

  font-family: "Yellowtail", cursive;
  font-size: 56px;
  color: ${colors.titleColor};
`;

const HeroDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 36px;
  color: ${colors.mainTextColor};
  text-shadow: 1px 1px 3px #fff;

  margin: 50px auto;
  display: block;
  width: 350px;
`;

const HeroExploreBtn = styled.button`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 50px;

  border: none;
  cursor: pointer;
  background-color: #efd000;
  border-radius: 16px;
  min-height: 79px;
  min-width: 160px;
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

export { HeroTitle, HeroDescription, HeroExploreBtn, HeroBG, HeroSection };
