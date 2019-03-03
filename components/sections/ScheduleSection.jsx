import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "@emotion/core";

const ScheduleSection = () => (
  <SectionWrapper header="Schedule Outline" subhead="Coming soon">
    <div
      css={css`
        font-family: "OdudoMono-Regular";
        opacity: 0.5;
      `}
    />
  </SectionWrapper>
);

export default ScheduleSection;
