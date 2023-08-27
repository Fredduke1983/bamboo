import styled from "styled-components";
import { colors } from "../../utils/_variables";

const AboutAdvantagesWrapper = styled.div``;
const AboutAdvantagesList = styled.ul`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;
const AboutAdvantagesItem = styled.li`
  display: block;
  margin: 20px auto;
  padding-top: 20px;
  width: 280px;
  height: 180px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 280px;
  }
  background-color: #cccccc50;
  border-radius: 15px;
`;

const AboutAdvantagesImg = styled.img`
  display: block;
  margin: 0 auto;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 20px;
`;
const AboutAdvantagesTitle = styled.p`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 26px;
  color: ${colors.titleColor};
  text-shadow: 1px 1px 3px #fff;
`;
const AboutAdvantagesDescription = styled.p`
  text-align: center;
  margin-top: 20px;
  padding: 0 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.mainTextColor};
  line-height: 1.14;
`;

export {
  AboutAdvantagesWrapper,
  AboutAdvantagesList,
  AboutAdvantagesItem,
  AboutAdvantagesImg,
  AboutAdvantagesTitle,
  AboutAdvantagesDescription,
  DescriptionWrapper,
};
