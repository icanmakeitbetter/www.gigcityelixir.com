import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      subtitle="VP of Marketing at Very"
      src="emily.jpg"
      name="Emily Maxie"
    >
      <p>
        Since joining Very in 2017, Emily has led our marketing efforts,
        creating strategic plans to support our mission to become a world-class
        development firm. She loves diving deep into technical topics to
        communicate complex ideas in an approachable way.
      </p>
      <p>
        Throughout her career, Emily has been passionate about advancing the
        careers of women in tech. She regularly speaks at regional and national
        events on the topic of gender parity and is dedicated to finding
        creative solutions to move the needle, one woman at a time.{" "}
      </p>
      <p>
        Before joining Very, Emily led a marketing services team at Skuid, where
        she supported the software company through successful Series A and B
        rounds of funding. Emily also served as the head of marketing at SIGNiX,
        an e-signature technology provider.
      </p>
      <p>
        Emily holds a BS in Mass Communications from Southern Adventist
        University.
      </p>

      <ExternalLink href="https://twitter.com/emilymaxie">
        @emilymaxie
      </ExternalLink>
    </BioPage>
  );
}
