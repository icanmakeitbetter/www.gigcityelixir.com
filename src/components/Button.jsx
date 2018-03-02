import React from "react";
import { rhythm } from "../utils/typography";

const Button = ({ text }) => (
  <button
    css={`
      background-color: ${purple};
      border-radius: 3px;
      color: white;
      cursor: pointer;
      font-family: "OdudoMono-Regular", sans-serif;
      font-size: 32px;
      height: 78px;
      width: 100%;
    `}>
    {text}
  </button>
);

export default Button;
