import { NavLink } from "react-router-dom";
import {
  HeaderList,
  HeaderListItem,
  HeaderLogo,
  HeaderNav,
  HeaderTitle,
} from "./Header.styled";
import { UserNav } from "./UserNav";
import logo from "../../img/bamboo-logo.png";

export const Header = () => {
  return (
    <HeaderNav>
      <HeaderLogo src={logo} className="logo"></HeaderLogo>
      <HeaderTitle>Bamboo paradise</HeaderTitle>
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
