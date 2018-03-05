import React from "react";
import SectionWrapper from "../SectionWrapper";
import { orange } from "../../styles/variables";

const JoseSection = () => (
  <SectionWrapper
    header="From José Valim"
    subhead="A word from Elixir's Creator"
    suppressLine={true}>
    <p
      css={`
        color: ${orange};
        font-family: "OdudoMono-Regular", sans-serif;
        line-height: 37px;
        letter-spacing: 0.3px;
      `}>
      “Gig City Elixir’s speaker line-up is strong. They’re bringing in the
      programmers that shaped Elixir before Elixir was even born as well as the
      developers that are evolving the language and community every day.”
    </p>
  </SectionWrapper>
);

export default JoseSection;
