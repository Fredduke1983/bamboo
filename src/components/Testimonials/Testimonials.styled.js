import styled from "styled-components";
import { colors } from "../../utils/_variables";

const TestimonialWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;

  background-color: #cccccc50;
`;

const TestimonialStyle = styled.div`
  text-align: center;
  width: 100%;
  padding: 60px;
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
  width: 500px;
  font-size: 18px;

  margin: 0 auto;
  color: ${colors.textColor};
`;

const TestimonialBg = styled.img``;

export {
  TestimonialWrapper,
  TestimonialStyle,
  TestimonialTitle,
  TestimonialSubTitle,
  CustomerImg,
  TestimonialDescription,
  CustomerName,
  TestimonialBg,
};
