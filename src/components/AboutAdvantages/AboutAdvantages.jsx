import {
  AboutAdvantagesDescription,
  AboutAdvantagesImg,
  AboutAdvantagesItem,
  AboutAdvantagesList,
  AboutAdvantagesTitle,
  AboutAdvantagesWrapper,
  DescriptionWrapper,
} from "./AboutAdvantages.styled";
import card from "../../img/advantages/card-security.png";
import basket from "../../img/advantages/easy-purchase.png";
import food from "../../img/advantages/natural-food.png";
import time from "../../img/advantages/phone-time.png";

export const AboutAdvantages = () => {
  return (
    <AboutAdvantagesWrapper>
      <AboutAdvantagesList>
        <AboutAdvantagesItem>
          <AboutAdvantagesImg src={food} />
          <DescriptionWrapper>
            <AboutAdvantagesTitle>100% Natural</AboutAdvantagesTitle>
            <AboutAdvantagesDescription>
              Only natural, high quality items
            </AboutAdvantagesDescription>
          </DescriptionWrapper>
        </AboutAdvantagesItem>
        <AboutAdvantagesItem>
          <AboutAdvantagesImg src={time} />
          <DescriptionWrapper>
            <AboutAdvantagesTitle>Call anytime</AboutAdvantagesTitle>
            <AboutAdvantagesDescription>
              Place an order at any time
            </AboutAdvantagesDescription>
          </DescriptionWrapper>
        </AboutAdvantagesItem>
        <AboutAdvantagesItem>
          <AboutAdvantagesImg src={basket} />
          <DescriptionWrapper>
            <AboutAdvantagesTitle>Easy buy</AboutAdvantagesTitle>
            <AboutAdvantagesDescription>
              Just call us and get your bamboo
            </AboutAdvantagesDescription>
          </DescriptionWrapper>
        </AboutAdvantagesItem>
        <AboutAdvantagesItem>
          <AboutAdvantagesImg src={card} />
          <DescriptionWrapper>
            <AboutAdvantagesTitle>Easy & safe pay</AboutAdvantagesTitle>
            <AboutAdvantagesDescription>
              Pay by Mastercard, Visa or any credit card
            </AboutAdvantagesDescription>
          </DescriptionWrapper>
        </AboutAdvantagesItem>
      </AboutAdvantagesList>
    </AboutAdvantagesWrapper>
  );
};
