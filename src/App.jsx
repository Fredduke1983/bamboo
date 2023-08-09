import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Service } from "./pages/Service/Service";
import { Shop } from "./pages/Shop/Shop";
import { News } from "./pages/News/News";

import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";

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
          <Route path="/service" element={<Service />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="*" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
