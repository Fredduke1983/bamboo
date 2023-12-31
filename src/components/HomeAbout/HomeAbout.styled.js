import styled from "styled-components";
import { colors } from "../../utils/_variables";

const HomeAboutSection = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const HomeAboutImg = styled.img`
  display: block;
  width: 100%;
`;

const HomeAboutBgWrapper = styled.div`
  display: block;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const HomeAboutWrapper = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const HomeAboutTitle = styled.h2`
  font-family: "Yellowtail", cursive;
  font-size: 26px;
  color: ${colors.titleColor};
  text-align: center;
  margin-bottom: 10px;
`;

const HomeAboutSubTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 36px;
  color: ${colors.mainTextColor};
  margin-bottom: 8px;
`;

const HomeAboutTitleBamboo = styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: ${colors.mainTextColor};
  margin-bottom: 6px;
`;

const HomeAboutList = styled.ul``;
const HomeAboutListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .about-icon-style {
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
      width: 40px;
      height: 40px;
      background-color: #cccccc35;
      border-radius: 10px;
      margin-right: 12px;
    }
  }
`;
const HomeAboutDescriptionWrapper = styled.div`
  text-align: justify;
`;

const HomeAboutDescription = styled.p`
  font-size: 18px;
  text-align: justify;
  padding-left: 20px;
  color: ${colors.textColor};
`;

const HomeAboutBtn = styled.button`
  display: block;
  margin: 20px auto;
  border: none;
  cursor: pointer;
  background-color: #efd000;
  border-radius: 16px;
  min-height: 79px;
  min-width: 160px;
  box-shadow: 1px 1px 5px grey;
  transition: background-color 300ms, box-shadow 300ms;

  font-family: "Roboto", sans-serif;
  color: ${colors.mainTextColor};
  font-weight: 900;

  &:hover {
    background-color: #efd372;
  }

  &:active {
    background-color: #efd000;
    box-shadow: 0px 0px 1px grey;
  }
`;

export {
  HomeAboutSection,
  HomeAboutImg,
  HomeAboutTitle,
  HomeAboutSubTitle,
  HomeAboutDescription,
  HomeAboutTitleBamboo,
  HomeAboutList,
  HomeAboutListItem,
  HomeAboutDescriptionWrapper,
  HomeAboutBtn,
  HomeAboutBgWrapper,
  HomeAboutWrapper,
};
