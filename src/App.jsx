import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Views from "./components/Views.jsx";

render((
  <BrowserRouter>
    <div>
      <Header />
      <Views />
    </div>
  </BrowserRouter>
), document.getElementById("app"));
