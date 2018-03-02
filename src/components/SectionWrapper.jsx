import React from "react";
import { rhythm } from "../utils/typography";
import * as consts from "../styles/variables";

const SectionWrapper = ({ children, header, subhead }) => (
  <section
    css={`
      margin-bottom: ${rhythm(2)};
      padding-top: ${rhythm(1)};
      border-top: ${consts.purple} solid 3px;
    `}>
    <h1
      css={`
        margin-bottom: ${rhythm(1 / 3)};
      `}>
      {header}
    </h1>
    <p
      css={`
        font-weight: 700;
      `}>
      {subhead}
    </p>
    {children}
  </section>
);

export default SectionWrapper;
