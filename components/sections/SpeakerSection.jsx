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
          talkUrl="https://www.youtube.com/watch?v=6wQufierLQw"
        />
        <Bio
          imgSrc="dave.jpg"
          name="Dave Thomas"
          twitterHandle="pragdave"
          talkUrl="https://www.youtube.com/watch?v=ZHx_1yWkSiA"
        />
        <Bio imgSrc="bruce.jpg" name="Bruce Tate" twitterHandle="redrapids" />
        <Bio
          imgSrc="osa.jpg"
          name="Osa Gaius-Obaseki"
          twitterHandle="osagaius"
          talkUrl="https://www.youtube.com/watch?v=5sM8AF1m0YA"
        />
        <Bio
          imgSrc="amos.jpg"
          name="Amos King"
          twitterHandle="Adkron"
          talkUrl="https://www.youtube.com/watch?v=ehFKzIKjr3I"
        />
        <Bio
          imgSrc="anna.jpg"
          name="Anna Neyzburg"
          twitterHandle="ANeyzb"
          talkUrl="https://www.youtube.com/watch?v=UAlkWtJO8AM"
        />
        <Bio
          imgSrc="chris.jpg"
          name="Chris Keathley"
          twitterHandle="ChrisKeathley"
          talkUrl="https://www.youtube.com/watch?v=J_dnXZUZc4w"
        />
        <Bio
          imgSrc="stu.jpg"
          name="Stu Halloway"
          twitterHandle="stuarthalloway"
        />
        <Bio
          imgSrc="brian.jpg"
          name="Brian Troutwine"
          twitterHandle="bltroutwine"
          talkUrl="https://www.youtube.com/watch?v=0R6sQEjdzQY"
        />
        <Bio imgSrc="emily.jpg" name="Emily Maxie" twitterHandle="emilymaxie" />
        <Bio
          imgSrc="todd.jpg"
          name="Todd Resudek"
          twitterHandle="sprsmpl"
          talkUrl="https://www.youtube.com/watch?v=X0Ap_bMqiaU"
        />
        <Bio
          imgSrc="ricardo.jpg"
          name="Ricardo Echavarría"
          twitterHandle="r_icarus"
          talkUrl="https://www.youtube.com/watch?v=DwwJQj59aPo"
        />
        <Bio imgSrc="greg.jpg" name="Greg Mefford" twitterHandle="ferggo" />
        <Bio
          imgSrc="miki.jpg"
          name="Miki Rezentes"
          twitterHandle="mikirez"
          talkUrl="https://www.youtube.com/watch?v=hBpbEsAG4es"
        />
        <Bio
          imgSrc="ben.jpg"
          name="Ben Marx"
          twitterHandle="bgmarx"
          talkUrl="https://www.youtube.com/watch?v=efCKA-Ug8w4"
        />
        <Bio
          imgSrc="jeff.jpg"
          name="Jeff Grunewald"
          githubUser="jeffgrunewald"
          talkUrl="https://www.youtube.com/watch?v=qVXN9r6NPXA"
        />
        <Bio
          imgSrc="martin.jpg"
          name="Martin Gausby"
          twitterHandle="gausby"
          talkUrl="https://www.youtube.com/watch?v=3OP7kSE6bg8"
        />
      </div>
    </SectionWrapper>
  );
}

function Bio({ imgSrc, name, twitterHandle, githubUser, talkUrl }) {
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
      {talkUrl && (
        <div
          css={css`
            padding: ${typography.rhythm(1 / 4)};
            border: 1px solid ${colors.plum};
            bborder-radius: 0 0 3px 3px;
          `}
        >
          <a href={talkUrl}>Watch the Talk</a>
        </div>
      )}
      {!twitterHandle && githubUser && (
        <div
          css={css`
            padding: ${typography.rhythm(1 / 4)};
            border: 1px solid ${colors.plum};
            bborder-radius: 0 0 3px 3px;
          `}
        >
          <a href={`https://github.com/${githubUser}`}>{githubUser}</a>
        </div>
      )}
    </div>
  );
}
