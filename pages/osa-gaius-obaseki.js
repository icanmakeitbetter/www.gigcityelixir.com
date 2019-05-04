import { BioPage, ExternalLink } from "../components/BioPage";

export default function() {
  return (
    <BioPage
      subtitle="Speaker, MailChimp developer"
      src="osa.jpg"
      name="Osa Gaius-Obaseki"
    >
      <p>
        Osa Gaius is an engineer at Mailchimp. Previously, he was an engineer at
        Luma, where he worked on realtime web apps and IoT devices in Elixir. He
        co-organizes the Elixir Meetup in Atlanta. In his free time, Osa crafts
        hip hop instrumentals and dances Tango.
      </p>
      <ExternalLink href="https://twitter.com/osagaius">@osagaius</ExternalLink>
    </BioPage>
  );
}
