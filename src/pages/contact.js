import React from "react";
import Link from "gatsby-link";
import SectionWrapper from "../components/SectionWrapper";

const Contact = () => (
  <SectionWrapper
    header="Contact"
    subhead="Get in touch with us."
    suppressLine={true}>
      <p>Organizers' email: <a href="mailto:organizers@gigcityelixir.com">organizers@gigcityelixir.com</a></p>
      <p>Twitter: <a href="https://twitter.com/GigCityElixir">@GigCityElixir</a></p>
      <p>Organizers' phone: <a href='tel:423-406-4088'>423-406-4088</a></p>
  </SectionWrapper>
);

export default Contact;
