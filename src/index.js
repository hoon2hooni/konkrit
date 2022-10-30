import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthContextWrapper from "@components/organisms/AuthContextWrapper";
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mock/browser");
  worker.start({ onUnhandledRequest: "bypass" });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextWrapper>
      <App />
    </AuthContextWrapper>
  </React.StrictMode>
);
