import { FaChild } from "react-icons/fa";
import { TbHomeEco } from "react-icons/tb";

import {
  HomeAboutBgWrapper,
  HomeAboutBtn,
  HomeAboutDescription,
  HomeAboutDescriptionWrapper,
  HomeAboutImg,
  HomeAboutList,
  HomeAboutListItem,
  HomeAboutSection,
  HomeAboutSubTitle,
  HomeAboutTitle,
  HomeAboutTitleBamboo,
  HomeAboutWrapper,
} from "./HomeAbout.styled";
import bamboo from "../../img/png-bamboo.png";

export const HomeAbout = () => {
  return (
    <HomeAboutSection>
      <HomeAboutBgWrapper>
        <HomeAboutImg src={bamboo} />
      </HomeAboutBgWrapper>

      <HomeAboutWrapper>
        <HomeAboutTitle>About Bamboo</HomeAboutTitle>
        <HomeAboutSubTitle>
          We believe in the value and utility of bamboo
        </HomeAboutSubTitle>
        <HomeAboutDescription>
          Bamboo is a type of flowering plant in the grass family Poaceae. It is
          characterized by its tall, woody stems known as culms that have a
          jointed and segmented structure. Bamboo is known for its rapid growth
          and is considered one of the fastest-growing plants on Earth. It can
          be found in various parts of the world, primarily in Asia, Africa, and
          the Americas.
        </HomeAboutDescription>
      </HomeAboutWrapper>
      <HomeAboutList>
        <HomeAboutListItem>
          <FaChild className="about-icon-style" />
          <HomeAboutDescriptionWrapper>
            <HomeAboutTitleBamboo>A wide range of uses</HomeAboutTitleBamboo>
            <HomeAboutDescription>
              Bamboo has a wide range of uses, including construction,
              furniture-making, paper production, and as a food source. Its
              strong and lightweight properties make it a popular choice for
              building materials and various crafts. Additionally, bamboo shoots
              are consumed as a delicacy in many Asian cuisines.
            </HomeAboutDescription>
          </HomeAboutDescriptionWrapper>
        </HomeAboutListItem>
        <HomeAboutListItem>
          <TbHomeEco className="about-icon-style" />
          <HomeAboutDescriptionWrapper>
            <HomeAboutTitleBamboo>Environmental benefits</HomeAboutTitleBamboo>
            <HomeAboutDescription>
              Due to its sustainability and environmental benefits, bamboo is
              often considered an eco-friendly alternative to materials like
              wood and plastic. Its extensive root system helps prevent soil
              erosion, and it can also absorb significant amounts of carbon
              dioxide from the atmosphere, contributing to carbon sequestration.
            </HomeAboutDescription>
          </HomeAboutDescriptionWrapper>
        </HomeAboutListItem>
      </HomeAboutList>
      <HomeAboutBtn type="button">Shop now</HomeAboutBtn>
    </HomeAboutSection>
  );
};
