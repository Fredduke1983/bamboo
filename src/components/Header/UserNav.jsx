import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { IoIosBasket } from "react-icons/io";

import {
  AsideNav,
  AsideNavBasket,
  AsideNavForm,
  AsideNavInput,
  AsideNavSubmit,
  BasketBtn,
} from "./UserNav.styled";

export const UserNav = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AsideNav>
      <AsideNavForm>
        <AsideNavInput
          type="text"
          name="input"
          onChange={handleInput}
          value={inputValue}
        />
        <AsideNavSubmit type="submit" onClick={handleSubmit}>
          <FcSearch size={25} />
        </AsideNavSubmit>
      </AsideNavForm>
      <AsideNavBasket>
        <BasketBtn type="button">
          <IoIosBasket size={25} fill={"inherit"} />
        </BasketBtn>
        0
      </AsideNavBasket>
    </AsideNav>
  );
};