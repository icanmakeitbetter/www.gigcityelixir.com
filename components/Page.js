import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { TypographyStyle } from "react-typography";
import { css } from "@emotion/core";
import { points } from "../utils/breakpoints";
import { GlobalStyles, typography } from "../utils/typography";
import Column from "./Column";

export default function Page({ children, title = "Gig City Elixir" }) {
  return (
    <div>
      <Head>
        <TypographyStyle typography={typography} />
        <title>{title}</title>
        <link rel="icon" href="/static/favicon-32x32-alt.png" sizes="32x32" />
        <link rel="icon" href="/static/favicon-96x96-alt.png" sizes="96x96" />
        <link rel="icon" href="/static/favicon-16x16-alt.png" sizes="16x16" />
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
