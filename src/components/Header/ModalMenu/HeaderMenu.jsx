import { NavLink } from "react-router-dom";
import { HeaderMenuItem, HeaderMenuList } from "./HeaderMenu.styled";

export const HeaderMenu = () => {
  return (
    <>
      <HeaderMenuList>
        <HeaderMenuItem>
          <NavLink to="/">Home</NavLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <NavLink to="/about">About</NavLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <NavLink to="/service">Service</NavLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <NavLink to="/shop">Shop</NavLink>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <NavLink to="/news">News</NavLink>
        </HeaderMenuItem>
      </HeaderMenuList>
    </>
  );
};
