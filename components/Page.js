import Header from "./Header";
import Footer from "./Footer";
import GCEHead from "./GCEHead";
import { css } from "@emotion/core";
import { points } from "../utils/breakpoints";
import { typography } from "../utils/typography";
import Column from "./Column";

export default function Page({ children, title = "Gig City Elixir 2019" }) {
  return (
    <div>
      <GCEHead title={title} />
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
