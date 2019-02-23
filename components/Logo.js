import { css } from "@emotion/core";
import { breakpoint } from "../utils/breakpoints";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";

export default function Logo() {
  return (
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
        /* @supports (display: grid) {
          ${breakpoint("medium")} {
            font-size: 3rem;
            background: ${colors.plum};
            padding-left: ${typography.rhythm(1 / 2)};
            box-shadow: 0 0 0 ${typography.rhythm(1)} ${colors.plum};
          }
          ${breakpoint("large")} {
            padding-left: ${typography.rhythm(1)};
            font-size: 4rem;
          }
        } */
      `}
    >
      <span>Gig</span> <span className="l">City</span>{" "}
      <span className="l">Eli</span>
      <span>xir</span>
    </h1>
  );
}
