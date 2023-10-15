import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Shop } from "./pages/Shop/Shop";
import { News } from "./pages/News/News";

import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import { OneCardDetail } from "./components/OneCardDetail/OneCardDetail";
import { Basket } from "./pages/Basket/Basket";
import Registration from "./pages/Sign/Registration";
import Login from "./pages/Sign/Login";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = (load) => {
    setIsLoading(load);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          zIndex: "5",
        }}
      >
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={isLoading}
        />
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/about"
            element={<About toggleIsLoading={toggleIsLoading} />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<OneCardDetail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/news" element={<News />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
