import styled from "styled-components";
import { colors } from "../../utils/_variables";

const TestimonialWrapper = styled.section`
  margin: 50px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin: 120px 0;
  }

  background-color: #cccccc50;
`;

const TestimonialStyle = styled.div`
  text-align: center;
  padding: 50px;
  padding-bottom: 0;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const TestimonialTitle = styled.h2`
  font-family: "Yellowtail", cursive;
  font-size: 26px;
  color: ${colors.titleColor};

  margin-bottom: 8px;
`;
const TestimonialSubTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 36px;
  color: ${colors.mainTextColor};
  margin-bottom: 60px;
`;

const CustomerImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 9px 6px #aacccc;
  margin-bottom: 6px;
`;

const CustomerName = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 25px;
  color: ${colors.mainTextColor};
  margin-bottom: 18px;
`;

const TestimonialDescription = styled.p`
  font-size: 18px;
  line-height: 1.35;

  margin: 0 auto;
  color: ${colors.textColor};
`;

const TestimonialBg = styled.img`
  width: 100%;
`;

const TestimonialBgWrapper = styled.div`
  display: block;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export {
  TestimonialWrapper,
  TestimonialStyle,
  TestimonialTitle,
  TestimonialSubTitle,
  CustomerImg,
  TestimonialDescription,
  CustomerName,
  TestimonialBg,
  TestimonialBgWrapper,
};
