import { ShopHero } from "../../components/Hero/ShopHero/ShopHero";
import { Container } from "../../utils/_container";
import { ShopList, ShopStyled } from "./Shop.styled";
import { ShopCard } from "./ShopCard";
import { bambooItems } from "./bamboos";

export const Shop = () => {
  const handleRatingChange = () => {};
  return (
    <ShopStyled>
      <ShopHero />
      <Container>
        <ShopList>
          {bambooItems.map((item) => {
            return (
              <ShopCard
                key={item.id}
                index={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                onRatingChange={handleRatingChange}
              />
            );
          })}
        </ShopList>
      </Container>
    </ShopStyled>
  );
};
