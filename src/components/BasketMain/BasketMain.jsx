import {
  BasketCustomerItem,
  BasketCustomerList,
  BasketMainWrapper,
} from "./BasketMain.styled";

export const BasketMain = () => {
  return (
    <BasketMainWrapper>
      <BasketCustomerList>
        <BasketCustomerItem></BasketCustomerItem>
        <BasketCustomerItem></BasketCustomerItem>
      </BasketCustomerList>
    </BasketMainWrapper>
  );
};
