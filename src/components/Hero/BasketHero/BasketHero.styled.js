import { styled } from "styled-components";
import bgBasketHero from "../../../img/shop/basket/baskets.jpg";

const BasketHeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-image: url(${bgBasketHero});
`;

const BasketHeroTitle = styled.h2`
  text-align: center;
  font-family: "Yellowtail", cursive;
  text-shadow: 2px 1px 3px #ccc;
  font-size: 56px;
`;

export { BasketHeroWrapper, BasketHeroTitle };
