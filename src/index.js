import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContatosProvider from "./context/contatos";
import "./reset.css";
import Router from "./routes";

createRoot(document.querySelector("#root")).render(
  <ContatosProvider>
    <StrictMode>
      <Router />
    </StrictMode>
  </ContatosProvider>
);
