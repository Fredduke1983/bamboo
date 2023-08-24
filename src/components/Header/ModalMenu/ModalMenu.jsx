import PropTypes from "prop-types";
import { HeaderMenu } from "./HeaderMenu";
import { ModalMenuWrapper } from "./ModalMenu.styled";

export const ModalMenu = ({ isModalShow }) => {
  return (
    <ModalMenuWrapper className={isModalShow ? "open" : "close"}>
      <HeaderMenu />
    </ModalMenuWrapper>
  );
};

ModalMenu.propTypes = {
  isModalShow: PropTypes.bool,
};
