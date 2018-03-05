import Typography from 'typography'
import { injectGlobal } from 'emotion'

import oml from '../fonts/odudo-mono-light.woff'
import oml2 from '../fonts/odudo-mono-light.woff2'
import omr from '../fonts/odudo-mono-regular.woff'
import omr2 from '../fonts/odudo-mono-regular.woff2'
import omsb from '../fonts/odudo-mono-semi-bold.woff'
import omsb2 from '../fonts/odudo-mono-semi-bold.woff2'
import { purple } from "../styles/variables";

require("typeface-roboto")

injectGlobal`
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

  h1 { color: ${purple}; }
  input, input, textarea {
    border-color: ${purple};
    border-radius: 3px;
    margin-bottom: 14px;
    width: 100%;
  }

  .button {
    background-color: ${purple};
    border-radius: 3px;
    color: white;
    cursor: pointer;
    font-family: "OdudoMono-Regular", sans-serif;
    font-size: 32px;
    height: 78px;
    width: 100%;
  }

  .limit-width {
    max-width: 625px;
    margin: 0px auto;
    padding: 0 20px;

    @supports (display: grid) {
      @media (min-width: 1230px) {
        max-width: 1230px;
      }
    }
  }
`

  // TODO move above inputs and place them in their own file


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "OdudoMono-SemiBold",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "Sans-Serif",
  ],
  bodyFontFamily: ["Roboto", "sans-serif"],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
