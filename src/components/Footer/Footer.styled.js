import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 64px 0 60px 0;
  }

  border-bottom: 1px solid #d4d4d4;
`;

const FooterCopyright = styled.p`
  text-align: center;
  padding: 15px;

  span {
    font-weight: 900;
  }
`;

export { FooterWrapper, FooterCopyright };
