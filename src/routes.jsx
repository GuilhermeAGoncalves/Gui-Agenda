import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastro";
import Contatos from "./pages/Contatos";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Cadastrar />} />
        <Route path="/" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
