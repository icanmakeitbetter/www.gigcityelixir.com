import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";
import Link from "gatsby-link";

const HotelSection = () => (
  <SectionWrapper header="Hotel Discount" subhead="Discount hotel offer.">
    <p>
      Discounts are offered by the Doubletree Hilton which is within walking
      distance of conference venue. Spots are limited so book before they run
      out.
    </p>
    <a
      target="_blank"
      href="http://doubletree.hilton.com/en/dt/groups/personalized/C/CHACHDT-GCE-20181025/index.jhtml"
    >
      <Button className="button" text="Discounted Hotel Rooms" />
    </a>
  </SectionWrapper>
);

export default HotelSection;
