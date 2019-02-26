import SectionWrapper from "../SectionWrapper";
import { buttonCss } from "../Button";

export default function VenueSection() {
  return (
    <SectionWrapper
      header="Start Up Week"
      subhead="Celebrating Chattanooga start ups"
    >
      <p>
        Start Up Week is hosted by CO.LAB, Chattanooga's non profit start up
        accelerator. Start Up Week showcases the best of Chattanooga's
        innovative spirit at community led events with the area's best thought
        leaders and innovators. The week is educational, exciting, and
        inspiring. We are excited to be a part of it!
      </p>
      <a href="http://colab.co/startupweekcha/" css={buttonCss}>
        Learn about Start Up Week
      </a>
    </SectionWrapper>
  );
}
