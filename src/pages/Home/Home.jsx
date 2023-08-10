import { Hero } from "../../components/Hero/Hero";
import { Offers } from "../../components/Offers/Offers";
import { Container } from "../../utils/_container";
import { HomeBG } from "./Home.styled";

export const Home = () => {
  return (
    <>
      <HomeBG>
        <Container>
          <Hero />
        </Container>
      </HomeBG>
      <Container>
        <Offers />
      </Container>
    </>
  );
};
