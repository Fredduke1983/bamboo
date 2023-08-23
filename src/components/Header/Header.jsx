import { NavLink } from "react-router-dom";
import {
  HeaderList,
  HeaderListItem,
  HeaderLogo,
  HeaderNav,
  HeaderTitle,
  LogoTitleWrapper,
  MenuWrapper,
} from "./Header.styled";
import { UserNav } from "./UserNav";
import logo from "../../img/bamboo-logo.png";

export const Header = () => {
  return (
    <HeaderNav>
      <MenuWrapper>
        <LogoTitleWrapper>
          <HeaderLogo src={logo} className="logo"></HeaderLogo>
          <HeaderTitle>Bamboo paradise</HeaderTitle>
        </LogoTitleWrapper>
        <p>burger</p>
      </MenuWrapper>

      <HeaderList>
        <HeaderListItem>
          <NavLink to="/">Home</NavLink>
        </HeaderListItem>
        <HeaderListItem>
          <NavLink to="/about">About</NavLink>
        </HeaderListItem>
        <HeaderListItem>
          <NavLink to="/service">Service</NavLink>
        </HeaderListItem>
        <HeaderListItem>
          <NavLink to="/shop">Shop</NavLink>
        </HeaderListItem>
        <HeaderListItem>
          <NavLink to="/news">News</NavLink>
        </HeaderListItem>
      </HeaderList>
      <UserNav />
    </HeaderNav>
  );
};
