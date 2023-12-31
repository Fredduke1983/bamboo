import styled from "styled-components";
import { colors } from "../../utils/_variables";

const AboutMainWrapper = styled.section`
  display: block;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const AboutMainLeft = styled.div`
  border-top: 2px solid green;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const AboutMainLeftTitle = styled.h3`
  font-family: "Yellowtail", cursive;
  font-size: 56px;
  color: ${colors.titleColor};
  margin-bottom: 15px;
`;

const AboutMainLeftDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.16;
  color: ${colors.mainTextColor};
  text-shadow: 1px 1px 3px #fff;
  margin-bottom: 20px;
`;

const AboutMainLeftTools = styled.div`
  display: flex;
  justify-content: center;

  gap: 12px;
`;
const ToolWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 6px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  color: ${colors.mainTextColor};
  svg {
    width: 40px;
    height: 40px;
    fill: #0f2f0f;
  }
`;
const ToolDescription = styled.p`
  /* width: 150px; */
`;

const AboutMainImgWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
const AboutMainRight = styled.img`
  display: block;
  width: 100%;
`;

export {
  AboutMainWrapper,
  AboutMainLeft,
  AboutMainRight,
  AboutMainLeftTitle,
  AboutMainLeftDescription,
  AboutMainLeftTools,
  ToolWrapper,
  ToolDescription,
  AboutMainImgWrapper,
};
