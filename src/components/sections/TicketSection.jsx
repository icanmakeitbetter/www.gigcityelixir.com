import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";
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
      `}>
      $350 Individual // $450 Corporate
    </p>
    <Button text="Registration Coming Soon" alert={true} />
  </SectionWrapper>
);

export default TicketSection;
