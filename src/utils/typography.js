import Typography from 'typography'
import { injectGlobal } from 'emotion'
require("typeface-roboto")

injectGlobal`
  @font-face {
    font-family: "OdudoMono-SemiBold";
    src: url('.src/fonts/odudo-mono-semi-bold.woff2') format('woff2'),
         url('.src/fonts/odudo-mono-semi-bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: "OdudoMono-Light";
    src: url('.src/fonts/odudo-mono-light.woff2') format('woff2'),
         url('.src/fonts/odudo-mono-light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`

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
