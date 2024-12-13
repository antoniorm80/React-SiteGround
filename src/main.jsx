import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimerComponente } from "./PrimerComponente";
import { UsersApp } from "./UsersApp";
import { Enrutamiento } from "./Enrutamiento";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      {/* <PrimerComponente /> */}
      {/* <UsersApp/> */}
      
      <Enrutamiento />
    </StrictMode>
  </BrowserRouter>
);
