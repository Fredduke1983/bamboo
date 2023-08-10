import {
  CardOffer,
  CardOfferDescription,
  CardOfferTitle,
  OffersWrapper,
} from "./Offers.styled";

export const Offers = () => {
  return (
    <OffersWrapper>
      <CardOffer className="left-card">
        <CardOfferTitle className="left-card-title">Natural!!!</CardOfferTitle>
        <CardOfferDescription className="left-card-description">
          Get Garden Green Bamboo
        </CardOfferDescription>
      </CardOffer>

      <CardOffer className="right-card">
        <CardOfferTitle className="right-card-title">Offer!!</CardOfferTitle>
        <CardOfferDescription className="right-card-description">
          Get 10% off your first bamboo
        </CardOfferDescription>
      </CardOffer>
    </OffersWrapper>
  );
};
