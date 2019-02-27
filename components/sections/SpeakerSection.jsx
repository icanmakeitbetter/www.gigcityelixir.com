import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { colors } from "../../utils/constants";

const SpeakerSection = () => (
  <SectionWrapper header="Our Speakers" subhead="Coming soon">
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        margin-left: -${typography.rhythm(1)};
      `}
    >
      <PlaceholderBio>...</PlaceholderBio>
      <PlaceholderBio>...</PlaceholderBio>
      <PlaceholderBio>...</PlaceholderBio>
      <PlaceholderBio>...</PlaceholderBio>
    </div>
  </SectionWrapper>
);

export default SpeakerSection;

function PlaceholderBio({ children }) {
  return (
    <div
      className="ff-odudomono-r"
      css={css`
        height: 25vh;
        border: 1px solid ${colors.peachy_plum};
        border-radius: 3px;
        padding: 3px;
        margin-left: ${typography.rhythm(1)};
        margin-bottom: ${typography.rhythm(1)};
        width: calc(50% - ${typography.rhythm(1)});
        display: flex;
        align-items: center;
        justify-content: center;
        ${typography.scale(1.5)}
        color: ${colors.blush};
      `}
    >
      {children}
    </div>
  );
}
