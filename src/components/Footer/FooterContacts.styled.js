import styled from "styled-components";
import { colors } from "../../utils/_variables";

const FooterContacts = styled.div`
  @media screen and (min-width: 768px) {
    width: 30%;
    padding-right: 50px;
    text-align: end;
  }
`;

const FooterContactsTitle = styled.h4`
  margin-bottom: 28px;

  font-family: "Roboto", sans-serif;
  color: ${colors.mainTextColor};
  font-weight: 900;
  font-size: 30px;
`;

const FooterContactsList = styled.ul``;

const FooterContactsItem = styled.li`
  margin-bottom: 20px;
`;

const FooterContactsItemTitle = styled.h5`
  margin-bottom: 6px;
  font-weight: 900;
  font-size: 18px;
  color: ${colors.textColor};
`;

const FooterContactsDescription = styled.p``;

const FooterContactsAddress = styled.address``;

export {
  FooterContacts,
  FooterContactsTitle,
  FooterContactsList,
  FooterContactsItem,
  FooterContactsItemTitle,
  FooterContactsDescription,
  FooterContactsAddress,
};
