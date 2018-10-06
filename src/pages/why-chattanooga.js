import React from "react";
import Link from "gatsby-link";
import SectionWrapper from "../components/SectionWrapper";
import Picture from "../components/Picture";
import downtown from "./why-chattanooga-images/downtown-scene-at-sunset.jpg";
import venue from "./why-chattanooga-images/aquarium-river-venue.jpg";
import hunter from "./why-chattanooga-images/hunter-art-river.jpg";
import mhunter from "./why-chattanooga-images/maggie-hunter.jpg";
import overlook from "./why-chattanooga-images/overlooking-downtown.jpg";

const andrewsLink = "https://www.perfectedperspectives.com/";

const WhyChattanooga = () => (
  <SectionWrapper
    header="Why Chattanooga?"
    subhead="Let us count the ways."
    suppressLine={true}
    singleColumn={true}
  >
    <p style={{ color: "#fff", position: "absolute", left: "-99em" }}>Test</p>
    <Picture
      imgSrc={downtown}
      altText="Photograph of 1100 block of downtown chattanooga"
      caption="This is downtown Chattanooga. Notice the blue squares in the
      intersection. This is the heart of Chattanooga's Innovation District.
      The conference venue is a few short short blocks from here towards the river."
      photographer="Andrew Rodgers"
      photographerLink={andrewsLink}
    />
    <Picture
      imgSrc={venue}
      altText="Photograph of Chattanooga aquarium and our venue"
      caption="Featured center is the Chattanooga Aquarium which we highly recommend.
      In the lower right hand corner of the image you get a peep of the conference venue.
      It's the one with solar panels on top."
      photographer="Andrew Rodgers"
      photographerLink={andrewsLink}
    />
    <Picture
      imgSrc={hunter}
      altText="Hunter Art Museum on the bluff"
      caption="Just a few short blocks east from the conference venue is the
      Hunter Art Museum. They have a lovely collection and great special exhibits."
      photographer="Andrew Rodgers"
      photographerLink={andrewsLink}
    />
    <Picture
      imgSrc={mhunter}
      altText="Looking out from Hunter Art Museum over Tennessee River"
      caption="This photo from the Hunter Art Museum looks out over the Tennessee River
      and Walnut Street pedestrian walking bridge that crosses it."
      photographer="Maggie Tate"
    />
    <Picture
      imgSrc={overlook}
      altText="Overlooking Chattanooga. Tennessee River Snaking around"
      caption="Pulling back a bit you can get an overview of Downtown Chattanooga and see it is nestled up next to the river."
      photographer="Maggie Tate"
    />
  </SectionWrapper>
);

export default WhyChattanooga;
