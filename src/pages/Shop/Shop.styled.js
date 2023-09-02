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
  border-radius: 15px;
  background: linear-gradient(45deg, #ffffff80, #9198e560);
  @media screen and (min-width: 320px) {
    width: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 1280px) {
    width: 300px;
  }
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
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
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
`;

const CardDescriptionWrapper = styled.div`
  display: block;
  padding: 0 10px;
`;

const CardBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 7px 0 5px 0;
  margin: 0 4px;
  border-top: 1px solid #cccccc50;
`;

const StarsContainer = styled.div``;

export {
  ShopStyled,
  ShopList,
  ShopItem,
  ShopCardCategory,
  ShopCardImg,
  ShopCardTitle,
  ShopCardPrice,
  CardDescriptionWrapper,
  StarsContainer,
  CardBottomContainer,
};
