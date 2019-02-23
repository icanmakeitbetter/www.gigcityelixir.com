import { css } from "@emotion/core";
import { breakpoint } from "../utils/breakpoints";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";

export default function DateAndVenue() {
  return (
    <div
      className="ff-odudomono-l"
      css={css`
        text-transform: uppercase;
        letter-spacing: 0.3333ch;
        margin: ${typography.rhythm(1)};
        background-color: ${colors.plum};
        /* @supports (display: grid) {
          ${breakpoint("medium")} {
            margin: ${typography.rhythm(3)} 0 ${typography.rhythm(1)};
            grid-area: top;
            box-shadow: 0 0 0 ${typography.rhythm(1)} ${colors.plum};
          }
        } */
      `}
    >
      <span
        css={css`
          color: ${colors.peach};
        `}
      >
        October
      </span>{" "}
      31, 2019
      <br />
      The Edney Innovation Center
      <br />
      Chattanooga, TN
    </div>
  );
}
