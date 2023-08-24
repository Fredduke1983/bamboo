import { Outlet, useLocation } from "react-router";
import { Container } from "../utils/_container";
import { Footer } from "./Footer/Footer";
import { ModalMenu } from "./Header/ModalMenu/ModalMenu";
import { Header } from "./Header/Header";
import { useEffect, useState } from "react";

export const Layout = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isModalShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalShow]);

  useEffect(() => {
    setIsModalShow(false);
  }, [location]);

  return (
    <>
      <Container>
        <Header
          isMenuOpen={isModalShow}
          toggleMenu={() => setIsModalShow(!isModalShow)}
        />
      </Container>
      <Outlet />
      <Container>
        <Footer />
      </Container>

      <ModalMenu isModalShow={isModalShow} />
    </>
  );
};
