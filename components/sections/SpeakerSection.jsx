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
          imgSrc="annie.jpg"
          name="Annie Kiley"
          href="/annie-kiley"
          externalUrl=""
        >
          <div
            css={css`
              padding: ${typography.rhythm(1 / 4)};
              border: 1px solid ${colors.plum};
              bborder-radius: 0 0 3px 3px;
            `}
          >
            <a href={"https://www.viget.com/about/team/akiley/"}>Viget</a>
          </div>
        </Bio>
        <Bio
          imgSrc="avdi.jpg"
          name="Avdi Grimm"
          href="/avdi-grimm"
          twitterHandle="avdi"
        />
        <Bio
          imgSrc="brian.jpg"
          name="Brian Troutwine"
          twitterHandle="bltroutwine"
          href="/brian-troutwine"
        />
        <Bio
          imgSrc="brooklyn.jpg"
          name="Brooklyn Zelenka"
          href="/brooklyn-zelenka"
          twitterHandle="expede"
        />
        <Bio
          imgSrc="bruce.jpg"
          name="Bruce Tate"
          twitterHandle="redrapids"
          href="/bruce-tate"
        />
        <Bio
          imgSrc="dylan.jpg"
          name="Dylan Lederle-Ensign"
          href="/dylan-lederle-ensign"
          twitterHandle="dlederle"
        />
        <Bio
          imgSrc="frank.jpg"
          name="Frank Hunleth"
          href="/frank-hunleth"
          twitterHandle="fhunleth"
        />
        <Bio
          imgSrc="jessica.jpg"
          name="Jessica Kerr"
          href="/jessica-kerr"
          twitterHandle="jessitron"
        />
      </div>
    </SectionWrapper>
  );
}

function Bio({ children, href, imgSrc, name, twitterHandle, githubUser }) {
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
      <a
        href={href}
        css={css`
          display: flex;
          flex-direction: column;
          flex-grow: 1;
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
      </a>
      {children}
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
