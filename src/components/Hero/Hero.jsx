import {
  HeroDescription,
  HeroExploreBtn,
  HeroTitle,
  HeroWrapper,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <>
      <HeroTitle>100% Natural Bamboo</HeroTitle>
      <HeroWrapper>
        <HeroDescription>
          Choose only the best natural bamboo from the best.
        </HeroDescription>
        <HeroExploreBtn type="button">Explore Now</HeroExploreBtn>
      </HeroWrapper>
    </>
  );
};
