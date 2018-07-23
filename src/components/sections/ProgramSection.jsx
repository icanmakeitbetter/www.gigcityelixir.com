import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";
import Link from "gatsby-link";

const ProgramSection = () => (
  <SectionWrapper
    header="Program"
    subhead="A little more on conference programming."
  >
    <p>
    The software industry has about as many libraries and projects to help you
    get things done as it does programmers. Lots of conferences focus on those.
    That’s a fine approach. GigCityElixir doesn’t. 
    </p>
    
    <p>
    In a world making a slow transition between object oriented and functional paradigms, our conference
    is packed with experienced developers and industry leaders who have been
    active voices for both. They are there to do one thing: make you a better
    programmer by focusing on the foundational skills you’ll take with you no
    matter the tech stack. 
    </p>
    
    <p>
    So whether seasoned software engineer or Johnny-come-lately there’s a lot of something for everyone. 
    </p>
    
    <p>
    New ideas and new friends await. Look forward to seeing you all in October!
    </p>
    {/* <Link to=""> */}
      <Button className="button" text="Program In Depth" />
    {/* </Link> */}
  </SectionWrapper>
);

export default ProgramSection;
