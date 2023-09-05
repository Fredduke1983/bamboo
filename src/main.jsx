import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/bamboo"> */}
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>

    {/* </BrowserRouter> */}
  </React.StrictMode>
);
