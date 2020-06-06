import { BioPage, ExternalLink } from "../components/BioPage";

export default function () {
  return (
    <BioPage src="frank.jpg" name="Frank Hunleth">
      <p>
        Frank has built embedded Linux-based software for products in many
        industries including medical, consumer, telecommunications and defense.
        He is a coauthor of the Nerves project and maintains several projects
        used in embedded Elixir-based devices such as the VintageNet network
        management library, the Elixir Circuits libraries for working with
        hardware, fwup, and erlinit. Github: fhunleth Twitter: @fhunleth
      </p>
      <ExternalLink href="https://twitter.com/fhunleth">@fhunleth</ExternalLink>
      <ExternalLink href="https://github.com/fhunleth">Github</ExternalLink>
    </BioPage>
  );
}
