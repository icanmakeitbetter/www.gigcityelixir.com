import { BioPage, ExternalLink } from "../components/BioPage";

export default function () {
  return (
    <BioPage src="brooklyn.jpg" name="Brooklyn Zelenka">
      <p>
        Functional programmer and polyglot leading consistently invigorating
        educational and meetup groups in Vancouver, and speaking globally on the
        future of code and communities. Lead architect on EIP 902.
      </p>
      <ExternalLink href="https://twitter.com/expede">@expede</ExternalLink>
      <ExternalLink href="https://github.com/expede">Github</ExternalLink>
    </BioPage>
  );
}
