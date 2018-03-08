import React from "react";
import { rhythm } from "../utils/typography";
import * as consts from "../styles/variables";

const SectionWrapper = ({ children, header, subhead, suppressLine }) => (
  <section
    css={`
      @supports (display: grid) {
        @media (min-width: 1230px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      }
      margin-bottom: ${rhythm(2)};
      padding-top: ${rhythm(1)};
      border-top: ${consts.purple} solid ${suppressLine ? "0" : "3"}px;
    `}>
    <div css={` max-width: 450px;`}>
      <h1
        css={`
          margin-bottom: ${rhythm(1 / 3)};
        `}>
        {header}
      </h1>
      <h5
        css={`
          letter-spacing: 1px;
        `}>
        {subhead}
      </h5>
    </div>
    <div className="body-group">{children}</div>
  </section>
);

export default SectionWrapper;
