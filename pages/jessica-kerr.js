import { BioPage, ExternalLink } from "../components/BioPage";

export default function () {
  return (
    <BioPage src="jessica.jpg" name="Jessica Kerr">
      <p>
        Jessica Kerr is a symmathecist in the medium of code. That means, she
        actively participates in a learning system made of learning parts, where
        those parts include both people and code. Developing software is system
        building, and that system includes us as developers. Jessica has written
        code in languages like TypeScript, Ruby, Scala, Java, Elm. She has
        keynoted conferences in places like New York, San Francisco, Australia,
        Denmark, Hungary, and Chattanooga. Find her on podcasts like Greater
        than Code and Arrested DevOps. Read her stuff on Twitter —{" "}
        <a href="https://github.com/jessitron">@jessitron</a> — or at{" "}
        <a href="http://jessitron.com/blog">jessitron.com/blog</a>.
      </p>
      <ExternalLink href="https://twitter.com/jessitron">
        @jessitron
      </ExternalLink>
      <ExternalLink href="https://github.com/jessitron">Github</ExternalLink>
      <ExternalLink href="http://jessitron.com/blog">Blog</ExternalLink>
    </BioPage>
  );
}
