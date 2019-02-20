import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";
import Link from "gatsby-link";

const ScholarshipSection = () => (
  <SectionWrapper
    header="Scholarships"
    subhead="Because we're stronger together."
  >
    <p>
      We are making Gig City Elixir a diverse experience. We are doing this by
      making scholarships available to those under-represented in our
      programming community including women and minorities. Part of this
      includes mentoring folks leading up to the conference to make sure our
      scholarship recepients can take full advantage. If you or someone you know
      might benefit and can't afford their own ticket, let us know.
    </p>
    <Link to="/contact/">
      <Button text="Contact Us to Apply" />
    </Link>
  </SectionWrapper>
);

export default ScholarshipSection;
