import styled from "styled-components";
import bgLeft from "../../img/card-offer-natural.jpg";
import bgRight from "../../img/card-offer-discount.jpg";
import { colors } from "../../utils/_variables";

const OffersWrapper = styled.section`
  margin: 50px 0;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 0 auto;
    padding: 120px 0;
    height: 300px;
  }
`;

const CardOffer = styled.div`
  background-color: #0f0fa055;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  @media screen and (min-width: 1280px) {
    height: 100%;
  }
  &.left-card {
    background-image: url(${bgLeft});
  }
  &.right-card {
    background-image: url(${bgRight});
  }
`;

const CardOfferTitle = styled.p`
  font-family: "Yellowtail", cursive;
  font-size: 40px;
  &.left-card-title {
    color: ${colors.accentColor};
    padding: 50px 0 0 70px;
    text-shadow: 2px 2px 4px #000;
  }
  &.right-card-title {
    color: #fff;
    text-shadow: 2px 2px 4px #fff;
    text-align: end;
    padding: 50px 70px 0 0;
  }
`;

const CardOfferDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: 900;
  padding: 20px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
  &.left-card-description {
    /* padding: 50px 0 0 70px; */
    color: ${colors.mainTextColor};
  }
  &.right-card-description {
    color: #fff;
    text-align: end;
    /* padding: 50px 70px 0 0; */
  }
`;

export { OffersWrapper, CardOffer, CardOfferTitle, CardOfferDescription };
