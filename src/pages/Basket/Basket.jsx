import { BasketMain } from "../../components/BasketMain/BasketMain";
import { BasketHero } from "../../components/Hero/BasketHero/BasketHero";
import { Container } from "../../utils/_container";

export const Basket = () => {
  return (
    <>
      <BasketHero />
      <Container>
        <BasketMain />
      </Container>
    </>
  );
};
