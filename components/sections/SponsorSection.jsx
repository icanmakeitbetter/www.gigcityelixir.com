import React from "react";
import SectionWrapper from "../SectionWrapper";
import { colors } from "../../utils/constants";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { buttonCss } from "../Button";
import { typography } from "../../utils/typography";

const platinumSponsors = css`
  text-align: center;

  h2 {
    color: ${colors.plum};
    border-top: 3px solid ${colors.plum};
    border-bottom: 3px solid ${colors.plum};
    padding-top: 26px;
    padding-bottom: 26px;
  }

  h3 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

const SubscriptionSection = () => (
  <SectionWrapper
    header="Our Sponsors"
    subhead="This conference brought to you in part by these fine folks"
  >
    <div className={platinumSponsors}>
      <Heading>Platinum</Heading>
      <Platinum
        img="/static/sponsor-logos/tract-manager.png"
        name="TractManager"
        url="https://tractmanager.com"
      >
        <p>
          TractManager is the healthcare industry’s leading provider of
          Strategic Sourcing and Contract Lifecycle Management solutions which
          support 3 out of 5 hospitals nationwide.
        </p>
      </Platinum>
      <Platinum
        img="/static/sponsor-logos/groxio.png"
        name="groxio"
        url="https://grox.io"
      >
        <p>
          Groxio is a small company of educators, language geeks and authors who
          want to change the way people teach and learn languages.
        </p>
      </Platinum>
      <h4>Still a few slots available at this level.</h4>
      <a to="/contact/" css={buttonCss}>
        Contact Us About Sponsoring
      </a>
    </div>
  </SectionWrapper>
);

export default SubscriptionSection;

const Heading = styled.h3``;

function Platinum({ img, name, url, children }) {
  return (
    <a
      href={url}
      css={css`
        border: ${typography.rhythm(1 / 32)} solid ${colors.peachy_plum};
        margin-bottom: ${typography.rhythm(1)};
        padding: ${typography.rhythm(1 - 1 / 32)};
        display: block;
        text-decoration: none;

        &:focus,
        &:hover {
          border-width: ${typography.rhythm(1 / 8)};
          padding: ${typography.rhythm(1 - 1 / 8)};
          border-color: ${colors.plum};
        }

        p:last-child {
          margin-bottom: ${typography.rhythm(1 / 4)};
        }
        p {
          padding-left: ${typography.rhythm(1 / 4)};
          padding-right: ${typography.rhythm(1 / 4)};
        }

        font-size: ${typography.rhythm(5 / 8)};
        color: ${colors.plum};
        text-align: center;
      `}
    >
      <img src={img} alt={name} />
      {children}
    </a>
  );
}