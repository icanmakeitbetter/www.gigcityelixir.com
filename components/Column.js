import { breakpoint, points } from "../utils/breakpoints";
import { css } from "@emotion/core";

export default function Column({ children, extraCss }) {
  return (
    <div
      css={css`
        max-width: ${points.medium};
        margin-left: auto;
        margin-right: auto;
        ${extraCss}
      `}
    >
      {children}
    </div>
  );
}
