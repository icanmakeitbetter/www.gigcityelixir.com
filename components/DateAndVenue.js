import { css } from "@emotion/core";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";

export default function DateAndVenue({ extraCss }) {
  return (
    <div
      className="ff-odudomono-l"
      css={css`
        text-transform: uppercase;
        letter-spacing: 0.3333ch;
        margin: ${typography.rhythm(1)};
        background-color: ${colors.plum};
        ${extraCss}
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
