import { BioPage, ExternalLink } from "../components/BioPage";

export default function () {
  return (
    <BioPage src="avdi.jpg" name="Avdi Grimm">
      <p>
        In his 20-year software development career, Avdi Grimm has worked on
        everything from aerospace embedded systems to enterprise web
        applications. He’s a{" "}
        <a href="http://avdi.codes/duck">consulting pair-programmer</a>, the
        author of several popular Ruby programming books, and a recipient of the
        <a href="https://rubyheroes.com/">Ruby Hero</a> award for service to the
        Ruby community. Since 2011 he has been teaching developers how to work
        more effectively (and have fun doing) it at{" "}
        <a href="http://rubytapas.com/">RubyTapas.com</a>.
      </p>
      <ExternalLink href="https://twitter.com/avdi">@avdi</ExternalLink>
      <ExternalLink href="https://github.com/avdi">Github</ExternalLink>
    </BioPage>
  );
}
