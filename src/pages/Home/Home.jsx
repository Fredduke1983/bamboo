import { Hero } from "../../components/Hero/Hero";
import { HomeAbout } from "../../components/HomeAbout/HomeAbout";
import { Offers } from "../../components/Offers/Offers";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { Container } from "../../utils/_container";

export const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <Offers />
        <HomeAbout />
      </Container>
      <Testimonials />
    </>
  );
};
