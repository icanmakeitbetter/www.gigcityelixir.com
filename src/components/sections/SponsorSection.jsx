import React from "react";
import SectionWrapper from "../SectionWrapper";
import { purple } from "../../styles/variables";
import { css } from "emotion";
import c5 from "./sponsor-logos/c5.png";
import epb from "./sponsor-logos/epb.png";
import icmib from "./sponsor-logos/icmib.png";
import prag from "./sponsor-logos/prag.png";
import ambition from "./sponsor-logos/ambition.png";
import tito from "./sponsor-logos/tito.svg";
import Button from "../Button";
import Link from "gatsby-link";

const platinumSponsors = css`
  text-align: center;

  h2 {
    color: ${purple};
    border-top: 3px solid ${purple};
    border-bottom: 3px solid ${purple};
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
    subhead="This conference brought to you in part by these fine folks.">
    <div className={platinumSponsors}>
      <h2
        css={`
          padding-top: 0 !important;
          border-top: 0 !important;
        `}>
        Platinum
      </h2>
      <img
        src={c5}
        css={`
          margin-bottom: 0;
          max-width: 400px;
          width: 100%;
        `}
      />
      <div
        css={`
          margin-bottom: 4rem;
        `}>
        <p>
          Carbon Five is a strategic digital product development firm. We
          partner with clients to create exceptional products and grow effective
          teams.
        </p>
        <p>
          Our developers, designers, and product managers have worked with
          clients at every stage of their journey: from early stage startups to
          growth and enterprise companies such as Echosign, Square, Thumbtack,
          StitchFix, Altschool, Google, Hulu, Gap, and many others.
        </p>

        <p>
          Learn more about the innovative projects we helped make a reality:
          <a target="_blank" href="https://www.carbonfive.com/">
            {" "}
            https://www.carbonfive.com/
          </a>
        </p>
      </div>
      <img
        src={icmib}
        css={`
          padding-bottom: 33px;
          margin-left: 50px;
          max-width: 195px;
        `}
      />
      <div
        css={`
          margin-bottom: 4rem;
        `}>
        <h2>Community</h2>
        <h3>TBA</h3>
      </div>
      <div
        css={`
          margin-bottom: 4rem;
        `}>
        <h2>Lanyard</h2>
        <img
          src={epb}
          css={`
            margin-bottom: 0;
            max-width: 300px;
            width: 100%;
          `}
        />
      </div>
      <div
        css={`
          img {
            max-width: 190px;
            display: block;
            margin: 0 auto;
          }
        `}>
        <h2>Elixir Champion</h2>
        <img src={prag} />
        <img
          src={ambition}
          css={`
            margin-bottom: 5rem !important;
          `}
        />
        <img
          src={tito}
          css={`
            position: relative;
            bottom: 34px;
            @media (min-width: 500px) {
              margin-right: 50px;
            }
          `}
        />
        <h4>Still a few slots available at this level.</h4>
      </div>
      <Link to="/contact/">
        <Button className="button" text="Contact Us About Sponsoring" />
      </Link>
    </div>
  </SectionWrapper>
);

export default SubscriptionSection;
