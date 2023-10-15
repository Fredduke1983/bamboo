import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { IoIosBasket } from "react-icons/io";
import { VscSignIn, VscSignOut } from "react-icons/vsc";
import { GiArchiveRegister } from "react-icons/gi";

import {
  AsideNav,
  AsideNavBasket,
  AsideNavFind,
  AsideNavInput,
  AsideNavSubmit,
  BasketBtn,
  LoginoutWrapper,
} from "./UserNav.styled";
import { useSelector } from "react-redux";
import { selectProductsAdded } from "../../redux/selectors";
import { Link } from "react-router-dom";

export const UserNav = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEmptyInput, setIsEmptyInput] = useState(true);
  const addedProducts = useSelector(selectProductsAdded);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    inputValue !== "" ? setIsEmptyInput(false) : setIsEmptyInput(true);
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AsideNav>
      <AsideNavFind>
        <AsideNavInput
          className={isEmptyInput ? "" : "no-empty"}
          type="text"
          name="input"
          onChange={handleInput}
          value={inputValue}
        />
        <AsideNavSubmit type="submit" onClick={handleSubmit}>
          <FcSearch size={25} />
        </AsideNavSubmit>
      </AsideNavFind>
      <AsideNavBasket>
        <BasketBtn to={`/basket`} type="button">
          <IoIosBasket size={25} fill={"inherit"} />
        </BasketBtn>
        {addedProducts.length}
      </AsideNavBasket>
      <LoginoutWrapper>
        <Link to={"/login"}>
          <VscSignIn />
          Signin
        </Link>
        {false && (
          <Link to={"/"}>
            <VscSignOut />
            Signout
          </Link>
        )}
        {true && (
          <Link to={"/registration"}>
            <GiArchiveRegister />
            Signup
          </Link>
        )}
      </LoginoutWrapper>
    </AsideNav>
  );
};
