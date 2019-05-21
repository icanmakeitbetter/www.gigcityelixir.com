import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      imgSrc="miki.jpg"
      name="Miki Rezentes"
      twitterHandle="mikirez"
      src="miki.jpg"
      subtitle="Christian, woman, wife, homeschool mom, software engineer, roller derby girl, volleyball player, math teacher, cook - spicing it up with variety."
    >
      <p>
        Miki Rezentes works as a software engineer/team lead for Tanium. Her
        years as a software engineer were preceded by many years of teaching
        upper level math. In addition to teaching, she has coached multiple
        competitive sports teams, clinching two state titles in girl's high
        school volleyball. Bringing the experience of years of coaching and
        teaching to the software industry gives a unique perspective on some of
        the core challenges faced by all teams. The mother of five enjoys
        learning, teaching, solving problems, eating, skating, volleyball and
        pranks. One coworker lovingly describes her as, “supreme product expert
        and resident smartass.”
      </p>
      <ExternalLink href="https://twitter.com/mikirez">@mikirez</ExternalLink>
    </BioPage>
  );
}
