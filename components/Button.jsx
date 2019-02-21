import React from "react";
import { colors } from "../utils/constants";
import { css } from "@emotion/core";

const Button = ({ text, alert }) => (
  <button
    css={css`
      background-color: ${alert ? colors.peach : colors.plum};
      border-color: ${alert ? colors.peach : colors.plum};
      border-radius: 3px;
      border-style: solid;
      color: white;
      cursor: pointer;
      font-family: "OdudoMono-Regular", sans-serif;
      font-size: 32px;
      height: 78px;
      width: 100%;
    `}
  >
    {text}
  </button>
);

export default Button;
