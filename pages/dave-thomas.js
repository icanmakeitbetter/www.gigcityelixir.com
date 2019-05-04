import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      src="dave.jpg"
      name="Dave Thomas"
      subtitle="Programmer turned publisher
(but mostly programmer)"
    >
      <p>
        Dave Thomas has written code just about every day in the last 45 years.
        One day he’ll get it right.
      </p>
      <p>
        He’s an author: The Pragmatic Programmer, The Manifesto for Agile
        Software Development, Programming Ruby, Agile Web Development with
        Rails, and recently Programming Elixir. He speaks at conferences around
        the world, and runs training for folks who want to enjoy themselves
        while learning (kind of like a Comedy Defensive Driving class).
      </p>
      <p>
        But mostly he writes code; sometimes to solve problems, sometimes to
        understand problems, and often to create them.
      </p>
      <p>
        He has strong and controversial views on how Elixir should be written;
        prepare to be both entertained and annoyed.
      </p>
      <ExternalLink href="https://twitter.com/pragdave">@pragdave</ExternalLink>
    </BioPage>
  );
}
