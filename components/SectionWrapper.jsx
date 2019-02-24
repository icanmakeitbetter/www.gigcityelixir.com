import { colors } from "../utils/constants";
import { css } from "@emotion/core";
import { typography } from "../utils/typography";
import { breakpoint, points } from "../utils/breakpoints";
const { rhythm } = typography;

export const grid = css`
  @supports (display: grid) {
    ${breakpoint("medium")} {
      display: grid;
      grid: "title content content";
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: ${rhythm(3)};
      max-width: ${points.maxWidth};
      margin: 0px auto;
    }
  }
`;

const SectionWrapper = ({ children, header, subhead }) => (
  <section
    css={css`
      margin-left: ${rhythm(1)};
      margin-right: ${rhythm(1)};
      margin-bottom: ${rhythm(2)};
      padding-top: ${rhythm(1)};
    `}
  >
    <div css={grid}>
      <div
        css={css`
          @supports (display: grid) {
            ${breakpoint("medium")} {
              grid-area: title;
              text-align: right;
            }
          }
        `}
      >
        <SectionHeader>{header}</SectionHeader>
        <SectionSubHeader>{subhead}</SectionSubHeader>
      </div>
      <div
        css={css`
          grid-area: content;
          @supports (display: grid) {
            ${breakpoint("medium")} {
              padding: 0 ${rhythm(2)};
            }
          }
        `}
      >
        {children}
      </div>
    </div>
  </section>
);

export default SectionWrapper;

export function SectionHeader({ children, extraCss }) {
  return (
    <h2
      css={css`
        text-transform: uppercase;
        margin-bottom: 0;
        letter-spacing: 0.25ch;
        line-height: 1.075;
        font-size: 1.25rem;
        color: ${colors.plum};
        ${extraCss}
      `}
    >
      {children}
    </h2>
  );
}

export function SectionSubHeader({ children, extraCss }) {
  return (
    <p
      className="ff-odudomono-l"
      css={css`
        letter-spacing: 0.25ch;
        opacity: 0.75;
        color: ${colors.ash};
        ${extraCss}
      `}
    >
      {children}
    </p>
  );
}
