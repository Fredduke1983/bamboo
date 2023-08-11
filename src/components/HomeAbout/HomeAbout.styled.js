import styled from "styled-components";
import { colors } from "../../utils/_variables";

const HomeAboutSection = styled.section`
  display: flex;
`;

const HomeAboutImg = styled.img`
  display: block;
  width: 50%;
`;

const HomeAboutTitle = styled.h2`
  font-family: "Yellowtail", cursive;
  font-size: 26px;
  color: ${colors.titleColor};
`;

const HomeAboutSubTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 36px;
  color: ${colors.mainTextColor};
`;

const HomeAboutTitleBamboo = styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: ${colors.mainTextColor};
`;

const HomeAboutList = styled.ul``;
const HomeAboutListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .about-icon-style {
    width: 40px;
    height: 40px;
    display: block;
    background-color: #cccccc35;
    border-radius: 10px;
    margin-right: 12px;
  }
`;
const HomeAboutDescriptionWrapper = styled.div`
  text-align: justify;
  width: 400px;
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
};
