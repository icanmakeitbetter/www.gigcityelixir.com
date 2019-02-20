import React from "react";
import SectionWrapper from "../SectionWrapper";
import { orange } from "../../styles/variables";

const SubscriptionSection = () => (
  <SectionWrapper
    header="Get the Gig City Elixir Newsletter"
    subhead="It features our infrequent announcements and info.">
    <p
      css={`
        font-family: "OdudoMono-Regular", sans-serif;
        color: ${orange};
        font-size: 20px;
      `}>
      Directly from the minds of the Gig City Elixir conference organizers to
      you.
    </p>
    <form
      action="https://tinyletter.com/gigcityelixir"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open(
          "https://tinyletter.com/gigcityelixir",
          "popupwindow",
          "scrollbars=yes,width=800,height=600"
        );
        return true;
      }}>
      <input
        type="email"
        name="email"
        id="tlemail"
        placeholder="attendee@company.com"
      />
      <input type="hidden" value="1" name="embed" />
      <input className="button" type="submit" value="Subscribe" />
    </form>
  </SectionWrapper>
);

export default SubscriptionSection;
