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
      <span className="c-peach">Training</span> Thursday 10/17
      <br />
      <span className="c-peach">Conference</span> Friday 10/18 - Saturday 10/19
      <br />
      The Edney Innovation Center
      <br />
      Chattanooga, TN
    </div>
  );
}
