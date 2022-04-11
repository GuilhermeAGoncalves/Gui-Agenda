import React from "react";
import css from "./style.module.css";

function Modal({ children }) {
  return (
    <div className={css.modalWrapper}>
      <div className={css.modal}>{children}</div>
    </div>
  );
}

export default Modal;
