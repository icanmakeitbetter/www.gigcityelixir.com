import { colors } from "../utils/constants";
import { css } from "@emotion/core";
import { typography } from "../utils/typography";
const { rhythm } = typography;

const SectionWrapper = ({
  children,
  header,
  subhead,
  suppressLine,
  singleColumn
}) => (
  <section
    css={css`
      @supports (display: grid) {
        @media (min-width: 1230px) {
          display: grid;
          grid-template-columns: ${singleColumn ? "unset" : "repeat(2, 1fr)"};
        }
      }
      margin-left: ${rhythm(1)};
      margin-right: ${rhythm(1)};
      margin-bottom: ${rhythm(2)};
      padding-top: ${rhythm(1)};
      border-top: ${colors.plum} solid ${suppressLine ? "0" : "3"}px;
    `}
  >
    <div>
      <h2
        css={css`
          text-transform: uppercase;
          margin-bottom: ${typography.rhythm(1 / 4)};
          letter-spacing: 0.25ch;
          /* color: ${colors.plum}; */
        `}
      >
        {header}
      </h2>
      <p
        className="ff-odudomono-l"
        css={css`
          letter-spacing: 0.25ch;
          /* color: ${colors.plum}; */
        `}
      >
        {subhead}
      </p>
    </div>
    <div className="body-group">{children}</div>
  </section>
);

export default SectionWrapper;
