import styled from "styled-components";
import { colors } from "../../utils/_variables";

const FooterSocials = styled.div`
  border-right: 1px solid #d4d4d4;
  border-left: 1px solid #d4d4d4;
  width: 40%;

  text-align: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const FooterLogo = styled.img`
  padding-right: 10px;
  height: 30px;
`;

const FooterSocialsTitle = styled.h4`
  font-family: "Roboto", sans-serif;
  color: ${colors.mainTextColor};
  font-weight: 900;
  font-size: 36px;

  margin-bottom: 22px;
`;

const FooterSocialsDescription = styled.p`
  color: ${colors.textColor};
  font-size: 18px;
  margin-bottom: 49px;
`;

const FooterSocialLinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0 30px;
`;

const FooterSocialLinksItem = styled.li`
  display: flex;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  justify-content: center;
  background-color: ${colors.socialsBgColor};

  svg {
    cursor: pointer;

    width: 30px;
    height: 30px;
    fill: #00005c;
    transition: fill 300ms ease;
    &:hover {
      fill: #00accc;
    }
  }
`;

export {
  FooterSocials,
  FooterSocialsTitle,
  FooterLogo,
  LogoWrapper,
  FooterSocialsDescription,
  FooterSocialLinksList,
  FooterSocialLinksItem,
};
