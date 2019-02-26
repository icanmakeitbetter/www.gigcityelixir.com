import SectionWrapper from "../SectionWrapper";
import { buttonCss } from "../Button";

export default function VenueSection() {
  return (
    <SectionWrapper header="The Venue" subhead="The Edney Innovation Center">
      <p>
        The Edney is the heart of the Innovation District in Chattanooga and the
        hub of start ups and entrepreneurial connection. The Innovation District
        is a quarter mile area full of local eateries, coffee shops and public
        spaces. The area has great transportation including Chattanooga Bikes
        (bike share) as well as the free downtown electric shuttle which stops
        at the Moxy and The Edney.
      </p>
      <a href="http://theedney.com/" css={buttonCss}>
        Take a look at The Edney
      </a>
    </SectionWrapper>
  );
}
