import { styled } from "styled-components";
import bambooPots from "../../img/shop/detail/bamboo-pots.jpg";
import { colors } from "../../utils/_variables";
const OneCardDetailWrapper = styled.div``;

const OneCardDetailHero = styled.div`
  background-image: url(${bambooPots});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  @media screen and (min-width: 320px) {
    height: 300px;
  }
  @media screen and (min-width: 768px) {
    height: 500px;
  }
  display: flex;
  justify-content: end;
  align-items: end;
`;
const OneCardDetailTitle = styled.h2`
  padding: 0 40px 40px 0;
  text-align: center;
  font-family: "Yellowtail", cursive;
  @media screen and (min-width: 320px) {
    font-size: 36px;
  }
  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
  color: ${colors.darkColor};
  text-shadow: 1px 3px 5px #fff;
`;
const CardWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: block;
    margin: 16px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    margin: 20px 50px 5px 50px;
  }
`;
const CardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CardImg = styled.img`
  border-radius: 5px;
  @media screen and (min-width: 320px) {
    display: block;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: block;
    width: 340px;
  }
`;

const CardDescriptionWrapper = styled.div``;
const CardName = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const CardPrice = styled.p`
  margin-bottom: 8px;

  span {
    font-weight: bold;
    font-size: 15px;
    color: ${colors.mainTextColor};
  }
`;
const CardDescription = styled.p`
  color: ${colors.textColor};
  margin-bottom: 8px;
`;
const CardTitleQuantity = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
`;
const CardQuantity = styled.input`
  margin: 0 10px;
  width: 50px;
  height: 50px;
  background-color: #cccccc50;
  text-align: center;
  border-radius: 5px;
  @media screen and(min-width: 320px) {
  }
`;
const CardBtnAdd = styled.button`
  margin: 0 10px;
  width: 50px;
  height: 50px;
  background-color: #cccccc50;
  text-align: center;
  border-radius: 5px;
`;
const CardBottomForm = styled.form`
  display: flex;
  align-items: center;
`;
const RatingDesWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;

export {
  OneCardDetailWrapper,
  OneCardDetailHero,
  OneCardDetailTitle,
  CardWrapper,
  CardImgWrapper,
  CardImg,
  CardDescriptionWrapper,
  CardName,
  CardPrice,
  CardDescription,
  CardTitleQuantity,
  CardQuantity,
  CardBtnAdd,
  CardBottomForm,
  RatingDesWrapper,
};
