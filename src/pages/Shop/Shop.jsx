import { useEffect, useState } from "react";
import { ShopHero } from "../../components/Hero/ShopHero/ShopHero";
import { Container } from "../../utils/_container";
import { ShopList, ShopStyled } from "./Shop.styled";
import { ShopCard } from "./ShopCard";
import { getProducts } from "../../fetches/getProducts";

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length < 1) {
      getProducts().then((products) => {
        setProducts(products);
      });
    }
  }, [products.length]);
  return (
    <ShopStyled>
      <ShopHero />
      <Container>
        <ShopList>
          {products.map((product) => {
            const { id, img, name, price, rating } = product;

            return (
              <ShopCard
                key={id}
                index={id}
                name={name}
                img={img}
                price={price}
                rating={rating}
              />
            );
          })}
        </ShopList>
      </Container>
    </ShopStyled>
  );
};
