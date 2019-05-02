import { BioPage, ExternalLink } from "../../components/BioPage";

export default function() {
  return (
    <BioPage name="Chris Keathley" src="chris.jpg" subtitle="Elixir Outlaw">
      <p>
        Chris is a software engineer building services and applications for
        Bleacher Report. Although he started out writing C for embedded systems,
        these days he spends his time in Elixir, Haskell, Go, and Rust. When not
        writing code for work, Chris can be found writing code for fun, talking
        about the joys of functional programming, playing pinball, roasting
        coffee, or building lego with his kids.
      </p>

      <ExternalLink href="https://twitter.com/ChrisKeathley">
        @ChrisKeathley
      </ExternalLink>
    </BioPage>
  );
}
