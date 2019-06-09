import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { colors } from "../../utils/constants";

export default function SpeakerSection() {
  return (
    <SectionWrapper header="Our Speakers">
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          margin-left: -${typography.rhythm(1)};
          margin-top: -${typography.rhythm(1)};
        `}
      >
        <Bio
          imgSrc="justin.jpg"
          name="Justin Schneck"
          twitterHandle="mobileoverlord"
        />
        <Bio imgSrc="amos.jpg" name="Amos King" twitterHandle="Adkron" />
        <Bio imgSrc="anna.jpg" name="Anna Neyzburg" twitterHandle="ANeyzb" />
        <Bio
          imgSrc="chris.jpg"
          name="Chris Keathley"
          twitterHandle="ChrisKeathley"
        />
        <Bio
          imgSrc="stu.jpg"
          name="Stu Halloway"
          twitterHandle="stuarthalloway"
        />
        <Bio
          imgSrc="osa.jpg"
          name="Osa Gaius-Obaseki"
          twitterHandle="osagaius"
        />
        <Bio imgSrc="bruce.jpg" name="Bruce Tate" twitterHandle="redrapids" />
        <Bio imgSrc="dave.jpg" name="Dave Thomas" twitterHandle="pragdave" />
        <Bio
          imgSrc="brian.jpg"
          name="Brian Troutwine"
          twitterHandle="bltroutwine"
        />
        <Bio imgSrc="emily.jpg" name="Emily Maxie" twitterHandle="emilymaxie" />
        <Bio imgSrc="todd.jpg" name="Todd Resudek" twitterHandle="sprsmpl" />
        <Bio
          imgSrc="ricardo.jpg"
          name="Ricardo Echavarría"
          twitterHandle="r_icarus"
        />
        <Bio imgSrc="greg.jpg" name="Greg Mefford" twitterHandle="ferggo" />
        <Bio imgSrc="miki.jpg" name="Miki Rezentes" twitterHandle="mikirez" />
        <Bio imgSrc="ben.jpg" name="Ben Marx" twitterHandle="bgmarx" />
        <div
          css={css`
            border-radius: 3px;
            margin-left: ${typography.rhythm(1)};
            margin-top: ${typography.rhythm(1)};

            flex-grow: 1;
            width: auto;

            overflow: hidden;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 3px solid ${colors.blush};
            min-height: 150px;
          `}
        >
          And more to come!
        </div>
      </div>
    </SectionWrapper>
  );
}

function Bio({ imgSrc, name, twitterHandle }) {
  return (
    <div
      className="ff-odudomono-r"
      css={css`
        border-radius: 3px;
        margin-left: ${typography.rhythm(1)};
        margin-top: ${typography.rhythm(1)};
        width: calc(50% - ${typography.rhythm(1)});
        overflow: hidden;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
          display: block;
          margin-bottom: 0;
          background-color: ${colors.peachy_plum};
        }
      `}
    >
      <img src={`/static/speakers/${imgSrc}`} alt="" />
      <div
        css={css`
          background-color: ${colors.plum};
          color: white;
          padding: ${typography.rhythm(1 / 3)};
          flex-grow: 1;
        `}
      >
        {name}
      </div>
      {twitterHandle && (
        <div
          css={css`
            padding: ${typography.rhythm(1 / 4)};
            border: 1px solid ${colors.plum};
            bborder-radius: 0 0 3px 3px;
          `}
        >
          <a href={`https://twitter.com/${twitterHandle}`}>@{twitterHandle}</a>
        </div>
      )}
    </div>
  );
}
