import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "@emotion/core";

const ScheduleSection = () => (
  <SectionWrapper header="Schedule Outline" subhead="Coming soon">
    <div
      css={css`
        text-align: center;
        font-family: "OdudoMono-Regular";
        opacity: 0.5;
      `}
    >
      The full schedule is be worked on, check back soon!
    </div>
  </SectionWrapper>
);

export default ScheduleSection;
