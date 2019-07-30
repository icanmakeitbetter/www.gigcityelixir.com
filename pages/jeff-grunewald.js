import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      name="Jeff Grunewald"
      src="jeff.jpg"
      subtitle="SysAdmin, reading machine, husband and dad."
    >
      <p>
        Jeff Grunewald has been a software engineer for four years and working
        with Elixir for the past two. Prior to that, he worked for six years as
        a network and systems administrator learning all the ways non-BEAM
        systems can fail. Outside of work, Jeff is an avid reader and periodic
        gamer. He lives with his wife and rambunctious 2-year old in Columbus,
        Ohio
      </p>
    </BioPage>
  );
}
