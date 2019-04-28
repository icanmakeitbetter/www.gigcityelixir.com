import { css } from "@emotion/core";
import Link from "next/link";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";
import Hr from "./Hr";
import { SkipToNavContent } from "../components/SkipToNav";

export default function Footer({ extraCss }) {
  return (
    <footer css={extraCss}>
      <Hr />
      <nav
        className="ff-odudomono-r"
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
            :link {
              color: ${colors.plum};
            }
            :visited {
              color: ${colors.peachy_plum};
            }
            :hover,
            :focus {
              color: ${colors.peach};
            }
            :active {
              color: ${colors.ash};
            }
          }
        `}
      >
        <SkipToNavContent />
        <Link href="/" prefetch>
          <a>Home</a>
        </Link>
        <Link href="/coc" prefetch>
          <a>CoC</a>
        </Link>
        <Link href="/contact" prefetch>
          <a>Contact</a>
        </Link>
        <Link href="/why-chattanooga" prefetch>
          <a>Why Chattanooga?</a>
        </Link>
        <Link href="https://2018.gigcityelixir.com/">
          <a>2018</a>
        </Link>
      </nav>
      <script
        crossorigin="anonymous"
        src="https://polyfill.io/v3/polyfill.min.js?flags=gated&features=Object.assign"
      />
    </footer>
  );
}
