import React from "react";
import { SectionHeader, SectionSubHeader } from "../SectionWrapper";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { breakpoint } from "../../utils/breakpoints";
import Link from "next/link";
import { colors } from "../../utils/constants";

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
      We've made the decision to hold the Gig City Elixir 2020 Conference online
      this October. While we wish we could be together in person, we are excited
      for the opportunities to broaden the community by going virtual. We will
      have folks from around the world join us and our theme this year will be
      "Conversations."
    </p>
    <p>
      We don't want to move an in person event online,{" "}
      <em>we want Gig City Elixir 2020 to be its own thing</em>. We look forward
      to working with sponsors and attendees in new and innovative ways!
    </p>
    <Link href="/about" prefetch>
      <a
        css={css`
          color: ${colors.peach};
          text-decoration: underline;
          cursor: pointer;

          &:hover,
          &:focus {
            color: ${colors.blush};
          }
          &:active {
            color: white;
          }
        `}
      >
        Read more about the conference
      </a>
    </Link>
  </section>
);

export default AboutUsSection;
