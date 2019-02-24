import React from "react";
import { SectionHeader, SectionSubHeader } from "../SectionWrapper";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { breakpoint } from "../../utils/breakpoints";

const AboutUsSection = () => (
  <section
    css={css`
      padding: ${typography.rhythm(1)};
      @supports (display: grid) {
        ${breakpoint("medium")} {
          margin: ${typography.rhythm(1)} 0 ${typography.rhythm(2)};
          padding: 0 ${typography.rhythm(2)};
        }
      }
    `}
  >
    <SectionHeader
      extraCss={css`
        color: white;
      `}
    >
      About Us
    </SectionHeader>
    <SectionSubHeader
      extraCss={css`
        color: white;
      `}
    >
      A message from conference organizer Bruce Tate
    </SectionSubHeader>
    <p>
      Gig City Elixir is a different kind of programming conference in beautiful
      Chattanooga, Tennessee. We will focus on sessions that are different from
      what you're used to seeing, with a variety of talk lengths and formats
      that will open more learning channels than ever before.
    </p>
    <p>
      One of the best speaker lineups at any 2018 programming conference will
      teach you the foundational techniques you'll need to succeed in today's
      programming industry. You'll learn to use functional programming concepts
      that will make you a better programmer, regardless of the languages and
      tools you use at work today.
    </p>
  </section>
);

export default AboutUsSection;
