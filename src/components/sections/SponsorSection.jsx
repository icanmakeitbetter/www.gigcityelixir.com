import React from "react";
import SectionWrapper from "../SectionWrapper";
import { purple } from "../../styles/variables";
import { css } from "emotion";
import c5 from "./sponsor-logos/c5.png";
import icmib from "./sponsor-logos/icmib.png";
import Button from "../Button";
import Link from "gatsby-link";

const platinumSponsors = css`
  color: ${purple};
  text-align: center;
  img {
    max-width: 195px;
  }

  h2 {
    border-top: 3px solid ${purple};
    border-bottom: 3px solid ${purple};
    padding-top: 26px;
    padding-bottom: 26px;

    &:first-child {
      padding-top: 0;
      border-top: 0;
    }
  }

  h3 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

const SubscriptionSection = () => (
  <SectionWrapper
    header="Our Sponsors"
    subhead="This conference brought to you in part by these fine folks.">
    <div className={platinumSponsors}>
      <h2>Platinum Level</h2>
      <img src={c5} />
      <img
        src={icmib}
        css={`
          padding-bottom: 33px;
          margin-left: 50px;
        `}
      />
      <h2>Lanyard Level</h2>
      <h3 css={``}>TBA</h3>
      <h2>Gold Level</h2>
      <h3 css={`margin-bottom: 2rem !important;`}>TBA</h3>
      <h4>Still a few slots available at this level.</h4>
      <Link to="/contact/">
        <Button className="button" text="Contact Us About Sponsoring" />
      </Link>
    </div>
  </SectionWrapper>
);

export default SubscriptionSection;
