import Typography from "typography";
import { css, Global } from "@emotion/core";

import oml from "../static/fonts/odudo-mono-light.woff";
import oml2 from "../static/fonts/odudo-mono-light.woff2";
import omr from "../static/fonts/odudo-mono-regular.woff";
import omr2 from "../static/fonts/odudo-mono-regular.woff2";
import omsb from "../static/fonts/odudo-mono-semi-bold.woff";
import omsb2 from "../static/fonts/odudo-mono-semi-bold.woff2";
import { colors } from "./constants";
import { points } from "./breakpoints";

export const GlobalStyles = () => (
  <Global
    styles={css`
  @font-face {
    font-family: "OdudoMono-Light";
    src: url(${oml}) format('woff'),
         url(${oml2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "OdudoMono-Regular";
    src: url(${omr}) format('woff'),
         url(${omr2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "OdudoMono-SemiBold";
    src: url(${omsb}) format('woff'),
         url(${omsb2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  .ff-odudomono-l {
    font-family: "OdudoMono-Light";
  }
  .ff-odudomono-r {
    font-family: "OdudoMono-Regular";
  }
  .ff-odudomono-sb {
    font-family: "OdudoMono-SemiBold";
  }
  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }

  input, input, textarea {
    border-color: ${colors.plum};
    border-radius: 3px;
    margin-bottom: 14px;
    width: 100%;
  }
  

  /* .button {
    background-color: ${colors.plum};
    border-radius: 3px;
    border-style: solid;
    border-color: ${colors.plum}
    color: white;
    cursor: pointer;
    font-family: "OdudoMono-Regular", sans-serif;
    font-size: 32px;
    height: 78px;
    width: 100%;
  } */

  .limit-width {
    max-width: ${points.maxWidth};
    margin: 0px auto;
  }
`}
  />
);

export const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.45,
  scaleRatio: 3.3333,
  headerFontFamily: ["OdudoMono-SemiBold", "Menlo", "Courier", "monospace"],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Open Sans",
    "Helvetica Neue",
    "sans-serif"
  ],
  bodyGray: 30,
  bodyGrayHue: 324
});

// Hot reload typography in development.
// if (process.env.NODE_ENV !== "production") {
//   typography.injectStyles();
// }
