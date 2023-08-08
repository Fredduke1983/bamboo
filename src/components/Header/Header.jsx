import { NavLink } from "react-router-dom";
import { HeaderList, HeaderNav, HeaderTitle } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderNav>
      <svg className="logo" width="44" height="65">
        <use href="/src/img/icons.svg#logo"></use>
      </svg>
      <HeaderTitle>Bamboo paradise</HeaderTitle>
      <HeaderList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/">Service</NavLink>
        </li>
        <li>
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/">News</NavLink>
        </li>
      </HeaderList>
    </HeaderNav>
  );
};
