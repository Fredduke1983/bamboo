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
} from "./BasketMain.styled";

import buyImg from "../../img/shop/detail/bamboo-pots.jpg";

export const BasketMain = () => {
  return (
    <BasketMainWrapper>
      <BasketCustomerList>
        <BasketCustomerItem>
          <ItemImgWrapper>
            <BasketItemImg src={buyImg} />
            <BasketItemName>Бамбук звичайний (Bambusa vulgaris)</BasketItemName>
          </ItemImgWrapper>
          <BasketItemQuantity>x1</BasketItemQuantity>=
          <BasketItemTotal> 13</BasketItemTotal>UAH
          <BasketItemDelete type="button">
            <TiDeleteOutline />
          </BasketItemDelete>
        </BasketCustomerItem>
        <BasketCustomerItem>
          <ItemImgWrapper>
            <BasketItemImg src={buyImg} />
            <BasketItemName>Плейобластус (Pleioblastus)</BasketItemName>
          </ItemImgWrapper>
          <BasketItemQuantity>x1</BasketItemQuantity>=
          <BasketItemTotal> 13</BasketItemTotal>UAH
          <BasketItemDelete type="button">
            <TiDeleteOutline />
          </BasketItemDelete>
        </BasketCustomerItem>
        <BasketCustomerItem>
          <ItemImgWrapper>
            <BasketItemImg src={buyImg} />
            <BasketItemName>Филлостахис (Phyllostachys)</BasketItemName>
          </ItemImgWrapper>
          <BasketItemQuantity>x2</BasketItemQuantity>=
          <BasketItemTotal> 13</BasketItemTotal>UAH
          <BasketItemDelete type="button">
            <TiDeleteOutline />
          </BasketItemDelete>
        </BasketCustomerItem>
        <BasketCustomerItem>
          <ItemImgWrapper>
            <BasketItemImg src={buyImg} />
            <BasketItemName>Фаргезия (Fargesia)</BasketItemName>
          </ItemImgWrapper>
          <BasketItemQuantity>x3</BasketItemQuantity>=
          <BasketItemTotal> 133332</BasketItemTotal>UAH
          <BasketItemDelete type="button">
            <TiDeleteOutline />
          </BasketItemDelete>
        </BasketCustomerItem>
      </BasketCustomerList>
    </BasketMainWrapper>
  );
};
