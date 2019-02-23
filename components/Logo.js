import { css } from "@emotion/core";
import { colors } from "../utils/constants";
import Link from "next/link";

export default function Logo({ extraCss }) {
  return (
    <Link href="/">
      <a
        css={css`
          text-decoration: none;
          color: white;
          cursor: pointer;
        `}
      >
        <h1
          className="ff-odudomono-r"
          css={css`
            display: flex;
            flex-direction: column;
            text-transform: uppercase;
            letter-spacing: 0.5ch;
            line-height: 0.95;
            margin: 0;
            padding: 0.5em 0.125em 0.5em 0;
            border-right: 0.1em solid ${colors.peach};
            font-size: 1.75rem;
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
