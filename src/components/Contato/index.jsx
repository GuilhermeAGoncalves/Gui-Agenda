import React from "react";
import css from "./style.module.css";

export default function Contato({ nome, numero }) {
  return (
    <>
      {" "}
      <li className={css.contatoElement}>
        <div className={css.contatoElementInfos}>
          <p>Nome: {nome}</p>
          <p>Numero: {numero}</p>
        </div>
      </li>
    </>
  );
}
