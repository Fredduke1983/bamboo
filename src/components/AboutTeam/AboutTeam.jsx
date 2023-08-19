import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import {
  AboutTeamCardImg,
  AboutTeamDescription,
  AboutTeamDesWrapper,
  AboutTeamItem,
  AboutTeamList,
  AboutTeamNamePerson,
  AboutTeamRole,
  AboutTeamTitle,
  TeamRoleItem,
  TeamRoleListSocial,
  TeamRoleTitle,
} from "./AboutTeam.styled";
import holderHe from "../../img/about/holder-he.jpg";
import holderShe from "../../img/about/holder-she.jpg";
import { Container } from "../../utils/_container";

export const AboutTeam = () => {
  return (
    <>
      <AboutTeamDesWrapper>
        <AboutTeamTitle>Team</AboutTeamTitle>
        <AboutTeamDescription>Our experts</AboutTeamDescription>

        <Container>
          <AboutTeamList>
            <AboutTeamItem>
              <AboutTeamCardImg src={holderHe}></AboutTeamCardImg>
              <AboutTeamNamePerson>Max Sparrow</AboutTeamNamePerson>
              <AboutTeamRole>
                <TeamRoleTitle>Owner / Farmer</TeamRoleTitle>
                <TeamRoleListSocial>
                  <TeamRoleItem>
                    <AiFillTwitterCircle />
                  </TeamRoleItem>
                  <TeamRoleItem>
                    <FaInstagramSquare />
                  </TeamRoleItem>
                  <TeamRoleItem>
                    <FaFacebook />
                  </TeamRoleItem>
                </TeamRoleListSocial>
              </AboutTeamRole>
            </AboutTeamItem>
            <AboutTeamItem>
              <AboutTeamCardImg src={holderShe}></AboutTeamCardImg>
              <AboutTeamNamePerson>Lesya Sparrow</AboutTeamNamePerson>
              <AboutTeamRole>
                <TeamRoleTitle>Owner / Farmer</TeamRoleTitle>
                <TeamRoleListSocial>
                  <TeamRoleItem>
                    <AiFillTwitterCircle />
                  </TeamRoleItem>
                  <TeamRoleItem>
                    <FaInstagramSquare />
                  </TeamRoleItem>
                  <TeamRoleItem>
                    <FaFacebook />
                  </TeamRoleItem>
                </TeamRoleListSocial>
              </AboutTeamRole>
            </AboutTeamItem>
            <AboutTeamItem>
              <AboutTeamCardImg src={holderHe}></AboutTeamCardImg>
              <AboutTeamNamePerson>Ihor Nechai</AboutTeamNamePerson>
              <AboutTeamRole>
                <TeamRoleTitle>Programmer / Driver</TeamRoleTitle>
                <TeamRoleListSocial>
                  <TeamRoleItem>
                    <AiFillTwitterCircle />
                  </TeamRoleItem>
                  <TeamRoleItem>
                    <FaInstagramSquare />
                  </TeamRoleItem>
                  <TeamRoleItem>
                    <FaFacebook />
                  </TeamRoleItem>
                </TeamRoleListSocial>
              </AboutTeamRole>
            </AboutTeamItem>
          </AboutTeamList>
        </Container>
      </AboutTeamDesWrapper>
    </>
  );
};
