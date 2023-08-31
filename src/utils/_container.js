import styled from "styled-components";

const Container = styled.div`
  //mobile
  @media screen and (min-width: 320px) {
    margin: 20px auto;
    padding-left: 16px;
    padding-right: 16px;
  }

  // tablet
  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  // desktop
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export { Container };
