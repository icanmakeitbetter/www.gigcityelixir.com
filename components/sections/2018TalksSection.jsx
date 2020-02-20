import React from "react";
import SectionWrapper from "../SectionWrapper";
import { buttonCss } from "../Button";

const TalksSection = () => (
  <SectionWrapper
    header="2019 Talks"
    subhead="See the talks from last year's amazing speakers!"
  >
    <a
      href="https://www.youtube.com/watch?v=5sM8AF1m0YA&list=PLKBMoE8mCkXgXIHTEw9073T4HdNPrvXuw"
      css={buttonCss}
    >
      Watch the talks on YouTube
    </a>
  </SectionWrapper>
);

export default TalksSection;
