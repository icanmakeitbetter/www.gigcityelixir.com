import React from "react";
import { rhythm } from "../utils/typography";

const Bio = ({ name, pic, alt }) => (
  <div
    css={`
      display: inline-block;
      text-align: center;
    `}>
    <img src={davePic} alt={alt} />
    <p>{name}</p>
  </div>
);

export default Bio;
