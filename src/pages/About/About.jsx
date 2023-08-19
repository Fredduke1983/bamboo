import { AboutAdvantages } from "../../components/AboutAdvantages/AboutAdvantages";
import { AboutMain } from "../../components/AboutMain/AboutMain";
import { AboutTeam } from "../../components/AboutTeam/AboutTeam";
import { AboutHero } from "../../components/Hero/AboutHero/AboutHero";
import { Container } from "../../utils/_container";

export const About = () => {
  return (
    <>
      <AboutHero />
      <Container>
        <AboutMain />
        <AboutAdvantages />
      </Container>
      <AboutTeam />
    </>
  );
};
