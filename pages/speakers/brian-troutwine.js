import { BioPage, ExternalLink } from "../../components/BioPage";

export default function() {
  return (
    <BioPage
      src="brian.jpg"
      name="Brian Troutwine"
      subtitle="Author, speaker, Developer"
    >
      <p>
        Brian L. Troutwine is a software engineer with a focus on low-level and
        fault-tolerant systems. Brian also has thoughts about mega-engineering
        projects, both historical and theoretical.
      </p>
      <ExternalLink href="https://twitter.com/bltroutwine">
        @bltroutwine
      </ExternalLink>
    </BioPage>
  );
}
