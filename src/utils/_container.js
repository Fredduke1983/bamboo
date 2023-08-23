import styled from "styled-components";

const Container = styled.div`
  /* margin: 0 auto;
  width: 1200px; */

  //mobile
  @media screen and (min-width: 320px) {
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
  }

  // tablet
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  // desktop
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export { Container };
