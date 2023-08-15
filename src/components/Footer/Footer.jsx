import { FooterCopyright, FooterWrapper } from "./Footer.styled";
import { FaFacebook, FaInstagramSquare, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import {
  FooterContacts,
  FooterContactsAddress,
  FooterContactsDescription,
  FooterContactsItem,
  FooterContactsItemTitle,
  FooterContactsList,
  FooterContactsTitle,
} from "./FooterContacts.styled";
import { FooterLicenses } from "./FooterLicenses.styled";
import {
  FooterLogo,
  FooterSocialLinksItem,
  FooterSocialLinksList,
  FooterSocials,
  FooterSocialsDescription,
  FooterSocialsTitle,
  LogoWrapper,
} from "./FooterSocials.styled";
import logo from "../../img/bamboo-logo.png";

export const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <FooterContacts>
          <FooterContactsTitle>Contact Us</FooterContactsTitle>
          <FooterContactsList>
            <FooterContactsItem>
              <FooterContactsItemTitle>E-mail</FooterContactsItemTitle>
              <FooterContactsDescription>
                needhelp@Organia.com
              </FooterContactsDescription>
            </FooterContactsItem>
            <FooterContactsItem>
              <FooterContactsItemTitle>Phone</FooterContactsItemTitle>
              <FooterContactsDescription>0939999999</FooterContactsDescription>
            </FooterContactsItem>
            <FooterContactsItem>
              <FooterContactsItemTitle>Address</FooterContactsItemTitle>
              <FooterContactsAddress>
                88 road, borklyn street, USA
              </FooterContactsAddress>
            </FooterContactsItem>
          </FooterContactsList>
        </FooterContacts>
        <FooterSocials>
          <LogoWrapper>
            <FooterLogo src={logo} className="logo" />
            <FooterSocialsTitle>Bamboo Paradise</FooterSocialsTitle>
          </LogoWrapper>
          <FooterSocialsDescription>
            We are the best of the other best
          </FooterSocialsDescription>
          <FooterSocialLinksList>
            <FooterSocialLinksItem>
              <FaInstagramSquare />
            </FooterSocialLinksItem>
            <FooterSocialLinksItem>
              <FaFacebook />
            </FooterSocialLinksItem>
            <FooterSocialLinksItem>
              <AiFillTwitterCircle />
            </FooterSocialLinksItem>
            <FooterSocialLinksItem>
              <FaPinterest />
            </FooterSocialLinksItem>
          </FooterSocialLinksList>
        </FooterSocials>
        <FooterLicenses>Licenses</FooterLicenses>
      </FooterWrapper>
      <FooterCopyright>
        Copyright © <span>Sparrow 2023</span>
      </FooterCopyright>
    </div>
  );
};
