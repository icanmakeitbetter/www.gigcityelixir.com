import React from "react";
import BioModal from "./BioModal";
import { rhythm } from "../utils/typography";

const Bio = ({
  name,
  pic,
  alt,
  bio,
  bioName,
  twitterLink,
  twitterHandle,
  siteLink,
  siteTitle
}) => (
  <div
    css={`
      display: inline-block;
      text-align: center;
    `}
  >
    <img
      css={`
        border-radius: 3px 3px 0 0;
        margin-bottom: 0;
      `}
      src={pic}
      alt={alt}
    />
    <p css={`
      border-top: 2px #772858 solid;
      border-right: 2px #772858 solid;
      border-left: 2px #772858 solid;
      color: #772858;
      font-family: "OdudoMono-Regular", sans-serif;
      font-size: 15px;
      margin-top: -9px;
      margin-bottom: -2px;
      padding-top: 3px;
      padding-bottom: 5px;
    `}>{name}</p>
    <BioModal
      bio={bio}
      pic={pic}
      bioName={bioName}
      twitterLink={twitterLink}
      twitterHandle={twitterHandle}
      siteLink={siteLink}
      siteTitle={siteTitle}
    />
  </div>
);

export default Bio;
