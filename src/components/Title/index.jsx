import React from "react";

function Title({ title, subTitle, ...props }) {
  return (
    <div {...props}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
}

export default Title;
