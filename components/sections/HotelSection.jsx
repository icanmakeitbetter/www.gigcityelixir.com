import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";

const HotelSection = () => (
  <SectionWrapper header="Hotel Discount" subhead="Discount hotel offer.">
    <p>
      Discounted rooms are offered by The Moxy for{" "}
      <strong>$159/$169 per night</strong>. The deadline for reservations is{" "}
      <strong>September 26</strong>.
    </p>
    <a href="https://www.marriott.com/hotels/travel/chaox-moxy-chattanooga-downtown/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2">
      <Button className="button" text="Discounted Hotel Rooms" />
    </a>
  </SectionWrapper>
);

export default HotelSection;
