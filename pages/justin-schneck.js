import { BioPage, ExternalLink } from "../components/BioPage";

export default function Justin() {
  return (
    <BioPage
      name="Justin Schneck"
      src="justin.jpg"
      subtitle="Co-Author of Nerves Project"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        mattis nulla metus, consectetur fringilla mi imperdiet blandit. Praesent
        ut vulputate arcu, in gravida nunc. Cras vitae augue aliquet,
        condimentum turpis elementum, pulvinar eros. Curabitur scelerisque odio
        quam, eu dapibus nisi molestie vitae. Proin sagittis enim ut orci
        dignissim placerat. Aliquam vehicula fringilla tellus, at semper leo
        efficitur nec. Morbi et nunc iaculis, elementum nulla sed, aliquet
        lorem. Morbi libero lorem, laoreet a massa quis, vehicula ornare eros.
      </p>
      <ExternalLink href="https://twitter.com/mobileoverlord">
        @mobileoverlord
      </ExternalLink>
    </BioPage>
  );
}
