import React from "react";
import SectionWrapper from "../SectionWrapper";
import { orange } from "../../styles/variables";

const SubscriptionSection = () => (
  <SectionWrapper
    header="Get Notified When Tickets Go Live"
    subhead="As well as infrequent announcements and info.">
    <span
      css={`
        font-family: "OdudoMono-Regular", sans-serif;
        color: ${orange};
        font-size: 20px;
      `}>
      Be the first to know when tickets go live!
    </span>
    <form
      action="https://tinyletter.com/gigcityelixir"
      method="post"
      target="popupwindow"
      onSubmit="window.open('https://tinyletter.com/gigcityelixir', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
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
