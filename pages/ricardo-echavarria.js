import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      src="ricardo.jpg"
      name="Ricardo Echavarría"
      subtitle="Siempre he sido una cosa normal"
    >
      <p>
        Richie is currently a programmer at TalentWall. After happily
        programming backend for years, Richie discovered his passion for front
        end programming! Richie often entertains his friends by telling jokes
        that are as well crafted as his code. Richie is proud to be a part of
        the burgeoning tech community in his hometown of Chihuahua, Mexico!
      </p>
      <ExternalLink href="https://twitter.com/r_icarus">@r_icarus</ExternalLink>
    </BioPage>
  );
}
