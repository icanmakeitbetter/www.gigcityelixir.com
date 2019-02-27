import React from "react";
import { colors } from "../utils/constants";
import { css } from "@emotion/core";
import { typography } from "../utils/typography";

export const buttonCss = css`
  background-color: ${colors.plum};
  border: 0;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-family: "OdudoMono-Regular", sans-serif;
  font-size: ${typography.rhythm(1.25)};
  padding: ${typography.rhythm(3 / 4)};
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  :hover,
  :focus {
    background-color: ${colors.peachy_plum};
  }
  :active {
    background-color: ${colors.dusk};
  }
`;

export const reverseButtonCss = css`
  ${buttonCss};
  border: 2px solid currentColor;
  color: currentColor;
  background: transparent;
`;

export const altButtonCss = css`
  ${reverseButtonCss}
  border-color: ${colors.plum};
  color: ${colors.plum};
  :hover,
  :focus {
    background-color: ${colors.peachy_plum};
  border-color: ${colors.peachy_plum};
    color: white;
  }
  :active {
    background-color: ${colors.dusk};
  border-color: ${colors.dusk};
    color: white;
  }
`;

const Button = ({ text }) => <button css={buttonCss}>{text}</button>;

export default Button;
