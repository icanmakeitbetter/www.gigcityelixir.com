import React from "react";
import Page from "../components/Page";

const Contact = () => (
  <Page title="Contact Gig City Elixir">
    <h1>Contact</h1>
    <p>Get in touch with us.</p>
    <p>
      Organizers' email:{" "}
      <a href="mailto:organizers@gigcityelixir.com">
        organizers@gigcityelixir.com
      </a>
    </p>
    <p>
      Twitter: <a href="https://twitter.com/GigCityElixir">@GigCityElixir</a>
    </p>
    <p>
      Organizers' phone: <a href="tel:423-406-4088">423-406-4088</a>
    </p>
  </Page>
);

export default Contact;
