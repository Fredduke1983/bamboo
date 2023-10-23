import { useEffect, useState } from "react";
import { ShopHero } from "../../components/Hero/ShopHero/ShopHero";
import { Container } from "../../utils/_container";
import { ShopList, ShopStyled } from "./Shop.styled";
import { ShopCard } from "./ShopCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsThunk } from "../../redux/reducers";
import { selectProducts } from "../../redux/selectors";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (products.length < 1) {
      setProducts(allProducts);
    }
  }, [allProducts, products]);

  return (
    <ShopStyled>
      <ShopHero />
      <Container>
        <ShopList>
          {products.map((product) => {
            const { _id, img, name, price, rating } = product;

            return (
              <ShopCard
                key={_id}
                index={_id}
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
