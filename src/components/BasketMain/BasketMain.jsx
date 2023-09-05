import { TiDeleteOutline } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";

import {
  BasketCustomerItem,
  BasketCustomerList,
  BasketItemDelete,
  BasketItemImg,
  BasketItemName,
  BasketItemQuantity,
  BasketItemTotal,
  BasketMainWrapper,
  ItemImgWrapper,
  TotalCostOfProducts,
} from "./BasketMain.styled";

import { useSelector } from "react-redux";
import { selectProductsAdded } from "../../redux/selectors";
import { useEffect, useState } from "react";

export const BasketMain = () => {
  const addedProducts = useSelector(selectProductsAdded);
  const [products, setProducts] = useState([]);
  const total = products.reduce((acc, el) => acc + Number(el.price), 0);
  useEffect(() => {
    if (addedProducts.length > 0) {
      setProducts(addedProducts);
    }
  }, [addedProducts]);

  return (
    <BasketMainWrapper>
      <BasketCustomerList>
        {products.map((product) => {
          return (
            <BasketCustomerItem key={uuidv4()}>
              <ItemImgWrapper>
                <BasketItemImg src={product.img} />
                <BasketItemName>{product.name}</BasketItemName>
              </ItemImgWrapper>
              <BasketItemQuantity>x1</BasketItemQuantity>=
              <BasketItemTotal>{product.price}</BasketItemTotal>UAH
              <BasketItemDelete type="button">
                <TiDeleteOutline />
              </BasketItemDelete>
            </BasketCustomerItem>
          );
        })}
      </BasketCustomerList>
      <TotalCostOfProducts>Total: {total} UAH</TotalCostOfProducts>
    </BasketMainWrapper>
  );
};
