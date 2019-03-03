import { css } from "@emotion/core";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";
import Link from "next/link";

export default function Logo({ extraCss }) {
  return (
    <Link href="/">
      <a
        css={css`
          text-decoration: none;
          color: white;
          cursor: pointer;
          :link,
          :visited,
          :hover,
          :focus,
          :active {
            color: white;
          }
        `}
      >
        <h1
          className="ff-odudomono-r"
          css={css`
            display: flex;
            background: ${colors.plum};
            flex-direction: column;
            text-transform: uppercase;
            letter-spacing: 0.5ch;
            line-height: 0.95;
            margin: 0 0 0 ${typography.rhythm(1 / 2)};
            padding: ${typography.rhythm(1 / 2)} ${typography.rhythm(1 / 2)};
            border-right: 0.1em solid ${colors.peach};
            font-size: 1.5rem;
            span {
              padding-left: 1.5ch;
            }
            .l {
              padding-left: 0;
            }
            ${extraCss}
          `}
        >
          <span>Gig</span> <span className="l">City</span>{" "}
          <span className="l">Eli</span>
          <span>xir</span>
        </h1>
      </a>
    </Link>
  );
}
