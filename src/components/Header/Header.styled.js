import styled from "styled-components";

const HeaderNav = styled.header`
  display: flex;
  align-items: baseline;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #00000005;
  box-shadow: 0px 1px 4px black;
`;

const HeaderTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 38px;
  color: #274c5b;
`;

const HeaderList = styled.ul`
  display: flex;
  gap: 10px;
`;

export { HeaderNav, HeaderList, HeaderTitle };
