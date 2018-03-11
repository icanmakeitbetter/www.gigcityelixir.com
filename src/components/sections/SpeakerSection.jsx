import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "emotion";
import { orange } from "../../styles/variables";

import Bio from "../Bio";

import brucePic from "./../../images/bruce.jpg";
import davePic from "./../../images/dave.jpg";
import johnPic from "./../../images/john.jpg";
import mikiPic from "./../../images/miki.jpg";
import hannahPic from "./../../images/hannah.jpg";
import chrisPic from "./../../images/chris.jpg";
import jamesPic from "./../../images/james.jpg";
import stuPic from "./../../images/stu.jpg";

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
      <Bio name="Hannah Howard" pic={hannahPic} alt="picture of Hannah Howard" />
      <Bio name="Chris McCord" pic={chrisPic} alt="picture of chris mccord" />
      <Bio name="Stuart Halloway" pic={stuPic} alt="picture of Stuart Halloway" />
      <Bio name="Bruce Tate" pic={brucePic} alt="picture of bruce tate" />
      <Bio
        name="James Edward Gray II"
        pic={jamesPic}
        alt="picture of james edward gray ii with brow furrowed"
      />
    </div>
  </SectionWrapper>
);

export default SpeakerSection;
