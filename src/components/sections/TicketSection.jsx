import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";
import Link from "gatsby-link";
import { purple } from "../../styles/variables";

const TicketSection = () => (
  <SectionWrapper
    header="Registration"
    subhead="Join us at Gig City Elixir 2018!">
    <p
      css={`
        font-family: "OdudoMono-Regular", sans-serif;
        color: ${purple};
        font-size: 30px;
        text-align: center;
      `}>
      $350 for the Early Bird
    </p>
    <Link to="/tickets/">
      <Button className="button" text="Click to Registrer" alert={true} />
    </Link>
  </SectionWrapper>
);

export default TicketSection;
