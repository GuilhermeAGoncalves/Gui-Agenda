import React from "react";
import { GrGithub, GrGoogle, GrFacebook } from "react-icons/gr";

export default function SocialNetwork(props) {
  return (
    <div {...props}>
      <span>
        <GrGoogle />
      </span>
      <span>
        <GrFacebook />
      </span>
      <span>
        <GrGithub />
      </span>
    </div>
  );
}
