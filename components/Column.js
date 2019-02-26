import { breakpoint, points } from "../utils/breakpoints";
import { typography } from "../utils/typography";
import { css } from "@emotion/core";

export default function Column({ children, extraCss }) {
  return (
    <div
      css={css`
        max-width: ${points.medium};
        margin-left: auto;
        margin-right: auto;
        padding-right: ${typography.rhythm(1)};
        padding-left: ${typography.rhythm(1)};
        ${extraCss}
      `}
    >
      {children}
    </div>
  );
}
