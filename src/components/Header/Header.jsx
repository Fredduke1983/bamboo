import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";

import {
  BurgerMenuBtn,
  HeaderList,
  HeaderListItem,
  HeaderLogo,
  HeaderNav,
  HeaderTitle,
  LogoTitleWrapper,
  MenuNavigationWrapper,
  MenuWrapper,
} from "./Header.styled";
import { UserNav } from "./UserNav";
import logo from "../../img/bamboo-logo.png";

export const Header = ({ isMenuOpen, toggleMenu }) => {
  return (
    <HeaderNav>
      <MenuNavigationWrapper>
        <MenuWrapper>
          <LogoTitleWrapper>
            <HeaderLogo src={logo} className="logo"></HeaderLogo>
            <HeaderTitle>Bamboo paradise</HeaderTitle>
          </LogoTitleWrapper>
          <BurgerMenuBtn type="button" onClick={toggleMenu}>
            {isMenuOpen ? (
              <RxCross2 className="burger-menu close" />
            ) : (
              <TiThMenu className="burger-menu open" />
            )}
          </BurgerMenuBtn>
        </MenuWrapper>

        <HeaderList>
          <HeaderListItem>
            <NavLink to="/">Home</NavLink>
          </HeaderListItem>
          <HeaderListItem>
            <NavLink to="/about">About</NavLink>
          </HeaderListItem>
          <HeaderListItem>
            <NavLink to="/shop">Shop</NavLink>
          </HeaderListItem>
          <HeaderListItem>
            <NavLink to="/news">News</NavLink>
          </HeaderListItem>
        </HeaderList>
      </MenuNavigationWrapper>

      <UserNav />
    </HeaderNav>
  );
};

Header.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
};
