import styled from "styled-components";
import bgAboutHero from "../../../img/about-hero-bg2.jpg";
import { colors } from "../../../utils/_variables";

const AboutHeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  min-height: 500px;
  width: 100%;

  background-image: url(${bgAboutHero});
`;

const AboutHeroTitle = styled.h2`
  text-align: center;
  text-shadow: 1px 1px #000;

  font-family: "Yellowtail", cursive;
  font-size: 56px;
  color: ${colors.titleColor};
`;

export { AboutHeroWrapper, AboutHeroTitle };
