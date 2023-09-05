import { styled } from "styled-components";

const BasketMainWrapper = styled.div``;
const BasketCustomerList = styled.ul``;
const BasketCustomerItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 7px;
  width: 280px;
  transition: background-color 250ms;
  border-radius: 5px;
  &:hover {
    background-color: #cccccc30;
  }
  &:active {
    background-color: #cccccc30;
  }
`;

const ItemImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
`;
const BasketItemImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 5px;
`;
const BasketItemName = styled.span`
  font-weight: 600;
  font-size: 12px;
`;
const BasketItemQuantity = styled.span`
  font-weight: 900;
`;
const BasketItemTotal = styled.span`
  font-weight: 900;
`;
const BasketItemDelete = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    transition: scale 300ms;
    color: red;
    &:hover {
      scale: 1.2;
    }
  }
`;

export {
  BasketMainWrapper,
  BasketCustomerList,
  BasketCustomerItem,
  BasketItemImg,
  BasketItemQuantity,
  BasketItemTotal,
  BasketItemName,
  ItemImgWrapper,
  BasketItemDelete,
};
