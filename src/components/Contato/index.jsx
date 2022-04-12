import React from "react";
import css from "./style.module.css";

export default function Contato({ nome, numero, ...props }) {
  return (
    <>
      {" "}
      <li className={css.contatoElement} {...props}>
        <div className={css.contatoElementInfos}>
          <p>Nome: {nome}</p>
          <p>Numero: {numero}</p>
        </div>
      </li>
    </>
  );
}
