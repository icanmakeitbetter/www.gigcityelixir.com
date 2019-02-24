import { css } from "@emotion/core";
import Link from "next/link";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";
import Hr from "./Hr";

export default function Footer({ extraCss }) {
  return (
    <footer css={extraCss}>
      <Hr />
      <div
        css={css`
          justify-self: end;
          text-align: center;
          border-bottom: ${typography.rhythm(1 / 2)} solid ${colors.blush};
          padding: ${typography.rhythm(1 / 2)};
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          > a {
            padding: ${typography.rhythm(1 / 2)};
          }
        `}
      >
        <Link href="/" prefetch>
          <a href="/">Home</a>
        </Link>
        <Link href="/coc" prefetch>
          <a href="/coc">CoC</a>
        </Link>
        <Link href="/contact" prefetch>
          <a href="/contact">Contact</a>
        </Link>
        <Link href="/why-chattanooga" prefetch>
          <a href="/why-chattanooga">Why Chattanooga?</a>
        </Link>
      </div>
    </footer>
  );
}
