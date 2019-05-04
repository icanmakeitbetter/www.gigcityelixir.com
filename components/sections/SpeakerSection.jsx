import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { colors } from "../../utils/constants";

export default function SpeakerSection() {
  return (
    <SectionWrapper header="Our Speakers" id="speakers">
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
          href="/justin-schneck"
        />
        <Bio
          imgSrc="amos.jpg"
          name="Amos King"
          twitterHandle="Adkron"
          href="/amos-king"
        />
        <Bio
          imgSrc="anna.jpg"
          name="Anna Neyzburg"
          twitterHandle="ANeyzb"
          href="/anna-neyzburg"
        />
        <Bio
          imgSrc="chris.jpg"
          name="Chris Keathley"
          twitterHandle="ChrisKeathley"
          href="/chris-keathley"
        />
        <Bio
          imgSrc="stu.jpg"
          name="Stu Halloway"
          twitterHandle="stuarthalloway"
          href="/stu-halloway"
        />
        <Bio
          imgSrc="osa.jpg"
          name="Osa Gaius-Obaseki"
          twitterHandle="osagaius"
          href="/osa-gaius-obaseki"
        />
        <Bio
          imgSrc="bruce.jpg"
          name="Bruce Tate"
          twitterHandle="redrapids"
          href="/bruce-tate"
        />
        <Bio
          imgSrc="dave.jpg"
          name="Dave Thomas"
          twitterHandle="pragdave"
          href="/dave-thomas"
        />
        <Bio
          imgSrc="brian.jpg"
          name="Brian Troutwine"
          twitterHandle="bltroutwine"
          href="/brian-troutwine"
        />
        <Bio
          imgSrc="emily.jpg"
          name="Emily Maxie"
          twitterHandle="emilymaxie"
          href="/emily-maxie"
        />
        <Bio
          imgSrc="todd.jpg"
          name="Todd Resudek"
          href="/todd-resudek"
          twitterHandle="sprsmpl"
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
        <Bio imgSrc="jeff.jpg" name="Jeff Grunewald" />
      </div>
    </SectionWrapper>
  );
}

function Bio({ href, imgSrc, name, twitterHandle }) {
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
      <a href={href}>
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
      </a>
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
