import styled from "styled-components";
import bgShopHero from "../../../img/shop/bamboo-bg.jpg";
import { colors } from "../../../utils/_variables";

const ShopHeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  min-height: 500px;
  width: 100%;

  background-image: url(${bgShopHero});
`;

const ShopHeroTitle = styled.h2`
  text-align: center;
  text-shadow: 1px 1px #000;

  font-family: "Yellowtail", cursive;
  font-size: 56px;
  color: ${colors.titleColor};
`;

export { ShopHeroWrapper, ShopHeroTitle };
