import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { TypographyStyle } from "react-typography";
import { css } from "@emotion/core";
import { points } from "../utils/breakpoints";
import { GlobalStyles, typography } from "../utils/typography";
import Column from "./Column";

export default function Page({ children }) {
  return (
    <div>
      <Head>
        <TypographyStyle typography={typography} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <Header />
      <Column
        extraCss={css`
          margin-top: ${typography.rhythm(2)};
          margin-bottom: ${typography.rhythm(2)};
        `}
      >
        <article>{children}</article>
      </Column>
      <Footer
        extraCss={css`
          max-width: ${points.medium};
          margin-left: auto;
          margin-right: auto;
        `}
      />
    </div>
  );
}
