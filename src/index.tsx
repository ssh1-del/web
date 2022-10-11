import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./view/routes";
import { BrowserRouter } from "react-router-dom";

console.log(Router);
ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);
