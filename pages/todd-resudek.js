import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      src="todd.jpg"
      name="Todd Resudek"
      twitterHandle="sprsmpl"
      subtitle="Human Software Developer"
    >
      <p>
        Todd is member of the Hex core team, and a software engineer at Weedmaps
        living in Castle Rock, Colorado.
      </p>
      <p>
        When he is not working on Elixir projects, he is solving real-world
        problems with Nerves, woodworking, screen printing, or spending time
        with his wife and 4 kids.
      </p>
      <ExternalLink href="https://twitter.com/sprsmpl">@sprsmpl</ExternalLink>
    </BioPage>
  );
}
