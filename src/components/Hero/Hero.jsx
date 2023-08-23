import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  HeroBG,
  HeroDescription,
  HeroExploreBtn,
  HeroSection,
  HeroTitle,
} from "./Hero.styled";

export const Hero = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 7000,
    dots: true,
    infinite: true,
    speed: 2000,
    easing: "linear",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <HeroSection>
      <Slider {...settings} className="slider">
        <HeroBG className="bg-1">
          <HeroTitle>100% Natural Bamboo</HeroTitle>
          <HeroExploreBtn type="button">Explore Now</HeroExploreBtn>
        </HeroBG>
        <HeroBG className="bg-2">
          <HeroDescription>
            Choose only the best natural bamboo from the best.
          </HeroDescription>
          <HeroExploreBtn type="button">Explore Now</HeroExploreBtn>
        </HeroBG>
        <HeroBG className="bg-3">
          <p></p>
          <HeroExploreBtn type="button">Explore Now</HeroExploreBtn>
        </HeroBG>
        <HeroBG className="bg-4">
          <p></p>
          <HeroExploreBtn type="button">Explore Now</HeroExploreBtn>
        </HeroBG>
      </Slider>
    </HeroSection>
  );
};
