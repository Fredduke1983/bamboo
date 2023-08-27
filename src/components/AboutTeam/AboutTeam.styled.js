import styled from "styled-components";
import { colors } from "../../utils/_variables";

const AboutTeamDesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 70px 0;
  padding: 110px 0;
  background-color: #cccccc60;
`;

const AboutTeamTitle = styled.h2`
  align-self: center;
  font-family: "Yellowtail", cursive;
  font-size: 26px;
  color: ${colors.titleColor};
  text-shadow: 1px 1px 1px grey;
`;

const AboutTeamDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 60px;
  color: ${colors.mainTextColor};
  text-shadow: 1px 1px 3px #fff;
  margin-bottom: 30px;
`;

const AboutTeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 85px;
  @media screen and (min-width: 1280px) {
    gap: 45px;
  }
`;
const AboutTeamItem = styled.li``;
const AboutTeamCardImg = styled.img`
  max-width: 260px;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const AboutTeamNamePerson = styled.p`
  padding: 10px;

  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: ${colors.mainTextColor};
`;

const AboutTeamRole = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const TeamRoleTitle = styled.h3`
  font-family: "Yellowtail", cursive;
  font-size: 18px;
  color: ${colors.titleColor};
`;

const TeamRoleListSocial = styled.ul`
  display: flex;
  gap: 8px;
  border-radius: 50%;
  background-color: ${colors.socialsBgColor};

  svg {
    cursor: pointer;

    width: 24px;
    height: 24px;
    fill: #00005c;
    transition: fill 300ms ease;
    &:hover {
      fill: #00accc;
    }
  }
`;
const TeamRoleItem = styled.li``;

export {
  AboutTeamDesWrapper,
  AboutTeamTitle,
  AboutTeamDescription,
  AboutTeamList,
  AboutTeamItem,
  AboutTeamCardImg,
  AboutTeamNamePerson,
  AboutTeamRole,
  TeamRoleTitle,
  TeamRoleListSocial,
  TeamRoleItem,
};
