import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "emotion";
import { orange } from "../../styles/variables";

import Bio from "../Bio";

import brucePic from "./../../images/bruce-tate.jpg";
import davePic from "./../../images/dave-thomas.jpg";
import johnPic from "./../../images/john-hughes.jpg";
import mikiPic from "./../../images/miki.jpg";
import chrisPic from "./../../images/chris-mccord.jpg";
import jamesPic from "./../../images/james-gray.jpg";

const SpeakerSection = () => (
  <SectionWrapper header="Our Speakers" subhead="More to be announced.">
    <div
      css={`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-column-gap: 30px;

        img {
          border-radius: 3px;
          margin-bottom: 0;
        }
      `}>
      <Bio name="Dave Thomas" pic={davePic} alt="picture of dave thomas" />
      <Bio name="John Hughes" pic={johnPic} alt="picture of john hughes" />
      <Bio name="Miki Rezentes" pic={mikiPic} alt="picture of Miki Rezentes" />
      <Bio name="Chris McCord" pic={chrisPic} alt="picture of chris mccord" />
      <Bio name="Bruce Tate" pic={brucePic} alt="picture of bruce tate" />
      <Bio
        name="James Edward Gray"
        pic={jamesPic}
        alt="picture of james edward gray with brow furrowed"
      />
    </div>
  </SectionWrapper>
);

export default SpeakerSection;
