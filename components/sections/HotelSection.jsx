import React from "react";
import SectionWrapper from "../SectionWrapper";
import { buttonCss } from "../Button";

const HotelSection = () => (
  <SectionWrapper
    header="Accomodations"
    subhead="Book a room at the Moxy at our conference rate"
  >
    <p>
      We're excited to announce the Moxy as the hotel partner for GigCityElixir.
      This great new boutique hotel offers an unforgettable experience, from the
      check in experience with a signature cocktail to one of the most unique
      meeting areas in the city. In the midst of the exciting Southside, the
      hotel is a few minutes walk from the conference venue (or a quick shuttle
      ride), and also right on top of the landmark Chattanooga Choo Choo Hotel.
      It also is a few minutes walk from the finest restaurants in the city,
      live music, and more.
    </p>
    <a
      href="https://www.marriott.com/events/start.mi?id=1579722626142&key=GRP"
      css={buttonCss}
    >
      Book a Room at the Moxy
    </a>
  </SectionWrapper>
);

export default HotelSection;
