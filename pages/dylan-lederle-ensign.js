import { BioPage, ExternalLink } from "../components/BioPage";

export default function () {
  return (
    <BioPage src="dylan.jpg" name="Dylan Lederle-Ensign">
      <p>
        Dylan Lederle-Ensign is a web developer working with Elixir and Ruby at
        Viget Labs, a small digital agency in Falls Church, VA. He's partway
        through a doctoral dissertation on the history of software engineering
        that he might finish someday. When not coding or reading old programming
        manuals, he can be found playing disc golf or ultimate frisbee.
      </p>
      <ExternalLink href="https://twitter.com/dlederle">@dlederle</ExternalLink>
      <ExternalLink href="https://github.com/dlederle">Github</ExternalLink>
    </BioPage>
  );
}
