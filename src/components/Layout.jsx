import { Outlet } from "react-router";
import { Container } from "../utils/_container";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Container>
        <Footer />
      </Container>
    </>
  );
};
