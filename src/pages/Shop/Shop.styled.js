import styled from "styled-components";
import { colors } from "../../utils/_variables";

const ShopStyled = styled.div``;
const ShopList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;
const ShopItem = styled.li`
  position: relative;
  display: block;
  width: 20%;
  border-radius: 5px;
  background: linear-gradient(45deg, #ffffff80, #9198e560);
`;
const ShopCardCategory = styled.p`
  position: absolute;
  top: 7px;
  left: 7px;
  padding: 4px;
  border-radius: 3px;
  background-color: #1b1b66;
  color: #fff;
`;
const ShopCardImg = styled.img`
  display: block;
  width: 100%;
  border-radius: inherit;
`;
const ShopCardTitle = styled.h3`
  text-align: center;
  padding: 6px 0;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 16px;
  color: ${colors.mainTextColor};
`;
const ShopCardPrice = styled.p`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 10px;
  color: ${colors.mainTextColor};
  padding: 7px 0 2px 0;
  border-top: 1px solid #cccccc50;
`;

const CardDescriptionWrapper = styled.div`
  display: block;
  padding: 0 10px;
`;

export {
  ShopStyled,
  ShopList,
  ShopItem,
  ShopCardCategory,
  ShopCardImg,
  ShopCardTitle,
  ShopCardPrice,
  CardDescriptionWrapper,
};
