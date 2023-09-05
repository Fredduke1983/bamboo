import { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { selectProductsAdded } from "../../redux/selectors";

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
      <AsideNavForm>
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
      </AsideNavForm>
      <AsideNavBasket>
        <BasketBtn to={`/basket`} type="button">
          <IoIosBasket size={25} fill={"inherit"} />
        </BasketBtn>
        {addedProducts.length}
      </AsideNavBasket>
    </AsideNav>
  );
};
