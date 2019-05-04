import { BioPage, ExternalLink } from "../components/BioPage";

export default function Anna() {
  return (
    <BioPage name="Anna Neyzburg" src="anna.jpg" subtitle="Elixir Outlaw">
      <p>
        Anna is a San Francisco native who has done a lot of work in the ruby
        community in SF and currently sits on the board of RailsBridge. She has
        taken this community organizing experience and last year co-founded
        ElixirBridge in SF - an organization that offers free weekend-long
        workshops, with the goal of creating an inclusive welcoming space for
        underrepresented populations in tech to learn elixir. By day she works
        as a Developer at Carbon Five. When not in front of a keyboard, she is
        trying to get better at climbing rocks.
      </p>
      <ExternalLink href="https://twitter.com/ANeyzb">@ANeyzb</ExternalLink>
    </BioPage>
  );
}
