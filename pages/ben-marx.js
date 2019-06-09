import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      src="ben.jpg"
      name="Ben Marx"
      subtitle="software architect bleacherreport, pragprog author, theerlef founding member"
    >
      <p>
        Ben is the software architect at Bleacher Report, co-author of Adopting
        Elixir and co-organizer of the Erlang Elixir meet up in San Francisco.
        In his free time, he's also programming in Rust, playing guitar, and
        building guitar pedals and modular synths.
      </p>
      <ExternalLink href="https://twitter.com/bgmarx">@bgmarx</ExternalLink>
    </BioPage>
  );
}
