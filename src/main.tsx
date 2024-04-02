import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/shop_ts_react">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
