import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      src="bruce.jpg"
      name="Bruce Tate"
      subtitle="Author, Educator, Grox.io Founder"
    >
      <p>
        Bruce is a mountain biker, climber, and father of two from Chattanooga.
        He is the author of more than ten books, including Seven Languages in
        Seven Weeks, Programming Phoenix, and Adopting Elixir. As the Chief
        Technology Officer of icanmakeitbetter.com, he is responsible for
        developing the icanmakeitbetter market research community platform using
        Elixir and Ruby using small, productive teams.
      </p>
      <ExternalLink href="https://twitter.com/redrapids">
        @redrapids
      </ExternalLink>
    </BioPage>
  );
}
