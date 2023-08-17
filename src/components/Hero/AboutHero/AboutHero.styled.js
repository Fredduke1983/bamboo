import styled from "styled-components";
import bgAboutHero from "../../../img/about-hero-bg2.jpg";
import { colors } from "../../../utils/_variables";

const AboutHeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  width: 100%;

  background-image: url(${bgAboutHero});
`;

const AboutHeroTitle = styled.h2`
  align-self: center;
  font-family: "Yellowtail", cursive;
  font-size: 66px;
  color: ${colors.lightColor};
  text-shadow: 2px 2px 5px black;
`;

export { AboutHeroWrapper, AboutHeroTitle };
