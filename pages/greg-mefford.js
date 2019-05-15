import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      src="greg.jpg"
      name="Greg Mefford"
      subtitle="acts_as_engineer at Bleacher Report · Nerves Core Team"
    >
      <p>
        Greg is a member of the Nerves core team and loves to help new people
        get involved in the Nerves community, whether by making the tools easier
        to use, writing documentation, answering questions, or giving
        presentations.
      </p>
      <p>
        He is also a co-maintainer of the Spandex project, and loves to geek out
        about observability and distributed tracing.
      </p>
      <ExternalLink href="https://twitter.com/ferggo">@ferggo</ExternalLink>
    </BioPage>
  );
}
