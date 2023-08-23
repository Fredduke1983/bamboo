import { Outlet } from "react-router";
import { Container } from "../utils/_container";
import { Footer } from "./Footer/Footer";
import { ModalMenu } from "./Header/ModalMenu/ModalMenu";
import { Header } from "./Header/Header";
import { useEffect, useState } from "react";

export const Layout = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  useEffect(() => {
    if (isModalShow) document.body.style.overflow = "hidden";
  }, [isModalShow]);

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Outlet />
      <Container>
        <Footer />
      </Container>
      {isModalShow && <ModalMenu />}
    </>
  );
};
