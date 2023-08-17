import styled from "styled-components";
import { colors } from "../../utils/_variables";

const AboutAdvantagesWrapper = styled.div``;
const AboutAdvantagesList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const AboutAdvantagesItem = styled.li`
  background-color: #cccccc;
  border-radius: 15px;
  width: 200px;
  height: 280px;
`;

const AboutAdvantagesImg = styled.img`
  display: block;
  margin: 50px auto;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
const AboutAdvantagesTitle = styled.p`
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
