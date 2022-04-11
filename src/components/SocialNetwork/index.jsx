import React from "react";
import { GrGithub, GrGoogle, GrFacebook } from "react-icons/gr";
import css from "./style.module.css";

export default function SocialNetwork(props) {
  return (
    <div {...props}>
      <span>
        <GrGoogle className={css.icon} />
      </span>
      <span>
        <GrFacebook className={css.icon} />
      </span>
      <span>
        <GrGithub className={css.icon} />
      </span>
    </div>
  );
}
