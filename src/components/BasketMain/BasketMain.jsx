import { TiDeleteOutline } from "react-icons/ti";

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

import { useDispatch, useSelector } from "react-redux";
import { selectProductsAdded } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { deleteFromAddedProducts } from "../../redux/Slices/ProductsSlice";

export const BasketMain = () => {
  const addedProducts = useSelector(selectProductsAdded);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const total = products.reduce(
    (acc, el) => acc + Number(el[0].price) * Number(el.qty),
    0
  );
  useEffect(() => {
    if (addedProducts.length > 0) {
      setProducts(addedProducts);
    }
    if (addedProducts.length === 0) {
      setProducts([]);
    }
  }, [addedProducts]);

  const handleDeleteItem = (event) => {
    dispatch(deleteFromAddedProducts(event.currentTarget.id));
  };

  return (
    <BasketMainWrapper>
      <BasketCustomerList>
        {products.map((product) => {
          return (
            <BasketCustomerItem key={product.keyId}>
              <ItemImgWrapper>
                <BasketItemImg src={product[0].img} />
                <BasketItemName>{product[0].name}</BasketItemName>
              </ItemImgWrapper>
              <BasketItemQuantity>x{product.qty}</BasketItemQuantity>=
              <BasketItemTotal>
                {Number(product[0].price) * Number(product.qty)}
              </BasketItemTotal>
              UAH
              <BasketItemDelete
                id={product.keyId}
                type="button"
                onClick={handleDeleteItem}
              >
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
