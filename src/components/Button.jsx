import React from "react";
import { purple, orange } from "../styles/variables";

const Button = ({ text, alert }) => (
  <button
    css={`
      background-color: ${alert ? orange : purple};
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
