import React from "react";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { breakpoint } from "../../utils/breakpoints";
import { colors } from "../../utils/constants";

const linkCss = css`
  border-radius: 3px;
  cursor: pointer;
  font-family: "OdudoMono-Regular", "Menlo", sans-serif;
  font-size: ${typography.rhythm(1)};
  padding: ${typography.rhythm(3 / 4)};
  margin-bottom: ${typography.rhythm(1)};
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  border: 2px solid currentColor;
  color: currentColor;

  color: white;
  :link,
  :visited {
    color: white;
  }
  :hover,
  :focus {
    background-color: ${colors.peachy_plum};
  }
  :active {
    background-color: ${colors.dusk};
    transform: translate(0, 1px);
  }
`;

const CancellationNote = () => (
  <section
    css={css`
      padding: ${typography.rhythm(2)};
      font-size: ${typography.rhythm(1)};
      @supports (display: grid) {
        ${breakpoint("medium")} {
          padding: ${typography.rhythm(2)};
        }
      }
    `}
  >
    <p>
      We've made the hard decision to fully cancel Gig City Elixir 2020. Running
      small conferences is a challenge already and trying to run one in a
      pandemic and during a time of economic uncertainty where it's hard to plan
      any commitments one week out let alone 4-6 months, is even more so!
    </p>
    <p>
      When we reflect on what makes GCE special, we know it's the community
      connections we make and strengthen while we are together. Virtual is a
      good stand in for educational content, it's just not the same for
      community connection. "Zoomzaustion" is a real thing and we really miss
      having folks near, in real life.
    </p>
    <p>We hope to see you back in person in Chattanooga in 2021!</p>
    <p>
      Be safe, stay healthy and continue to learn! Check out the following
      Elixir conferences being held online in 2020
    </p>
    <a href="https://www.elixirconf.eu" css={linkCss}>
      https://www.elixirconf.eu
    </a>
    <a href="https://2020.elixirconf.com" css={linkCss}>
      https://2020.elixirconf.com
    </a>

    <div>
      <i>- Bruce and Maggie Tate, Gig City Elixir Organizers</i>
    </div>
  </section>
);

export default CancellationNote;
