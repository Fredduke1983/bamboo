import { GiFarmTractor, GiFactory } from "react-icons/gi";
import {
  AboutMainImgWrapper,
  AboutMainLeft,
  AboutMainLeftDescription,
  AboutMainLeftTitle,
  AboutMainLeftTools,
  AboutMainRight,
  AboutMainWrapper,
  ToolDescription,
  ToolWrapper,
} from "./AboutMain.styled";
import aboutMainRightBg from "../../img/budda.png";

export const AboutMain = () => {
  return (
    <AboutMainWrapper>
      <AboutMainLeft>
        <AboutMainLeftTitle>About us</AboutMainLeftTitle>
        <AboutMainLeftDescription>
          There are several compelling reasons to choose us. We are a team of
          highly skilled professionals specializing in the cultivation and sale
          of high-quality bamboo, nurtured with the same care and dedication as
          our own beloved children. Our bamboo is cultivated with great love and
          attention to provide them with the best conditions for growth and
          development. We take pride in the fact that each of our bamboos is a
          result of our hard work and commitment. We put in special effort to
          grow plants with healthy root systems and strong stems. Our bamboo is
          not only ready to adorn your surroundings but also to bring joy with
          its natural beauty and elegance. Furthermore, we offer personalized
          consultations and advice on bamboo care. Our goal is not just to sell
          plants but to support you at every stage of their life cycle. We
          believe that our passionate work and the quality of our bamboo make us
          the best partners for those who appreciate nature and its beauty.
        </AboutMainLeftDescription>
      </AboutMainLeft>
      <AboutMainImgWrapper>
        <AboutMainRight src={aboutMainRightBg} />
      </AboutMainImgWrapper>
      <AboutMainLeftTitle>Why chose us</AboutMainLeftTitle>
      <AboutMainLeftDescription>
        By choosing us, you&apos;re not just selecting bamboo, but also a unique
        experience of working with plants that are created with love and
        meticulousness, as if they were our very own.
      </AboutMainLeftDescription>
      <AboutMainLeftTools>
        <ToolWrapper>
          <GiFarmTractor />
          <ToolDescription>Modern Agriculture Equipment</ToolDescription>
        </ToolWrapper>
        <ToolWrapper>
          <GiFactory />
          <ToolDescription>No growth hormones are used</ToolDescription>
        </ToolWrapper>
      </AboutMainLeftTools>
    </AboutMainWrapper>
  );
};
