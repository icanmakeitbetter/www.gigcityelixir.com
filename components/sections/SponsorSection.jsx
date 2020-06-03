import React from "react";
import SectionWrapper from "../SectionWrapper";
import { colors } from "../../utils/constants";
import { css } from "@emotion/core";
import { buttonCss } from "../Button";
import { typography } from "../../utils/typography";
import { breakpoint } from "../../utils/breakpoints";
import Link from "next/link";

const platinumSponsors = css`
  text-align: center;

  h2 {
    color: ${colors.plum};
    border-top: 3px solid ${colors.plum};
    border-bottom: 3px solid ${colors.plum};
    padding-top: 26px;
    padding-bottom: 26px;
  }

  h3 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

const flexGrid = css`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${typography.rhythm(1)};
  margin-bottom: ${typography.rhythm(1)};
`;

const flexGridItem = css`
  margin-left: ${typography.rhythm(1)};
  ${breakpoint("large")} {
    width: calc(50% - ${typography.rhythm(1)});
  }
`;

const flexGridItemChampion = css`
  margin-left: ${typography.rhythm(1)};
  width: calc(33.333% - ${typography.rhythm(1)});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const sponsorLink = css`
  border: ${typography.rhythm(1 / 32)} solid ${colors.peachy_plum};
  padding: ${typography.rhythm(1 - 1 / 32)};
  text-decoration: none;

  &:focus,
  &:hover {
    border-width: ${typography.rhythm(1 / 8)};
    padding: ${typography.rhythm(1 - 1 / 8)};
    border-color: ${colors.plum};
  }
`;

const SubscriptionSection = () => (
  <SectionWrapper
    header="Our Sponsors"
    subhead="This conference brought to you in part by these fine folks"
  >
    <div className={platinumSponsors}>
      <h3>Platinum</h3>
      <div css={flexGrid}>
        <Platinum url="https://binarynoggin.com/">
          <figure>
            <img
              src="/static/sponsor-logos/binary-noggin.png"
              alt="Binary Noggin"
              css={css`
                padding: 5rem 2rem 2rem;
              `}
            />
          </figure>
          <div>
            <p>
              Binary Noggin is an agile software development and consulting firm
              offering web and embedded development, team augmentation, and
              coaching. Our number one principle is trust through communication
              and openness. We utilize Elixir and Erlang to help us meet our
              technical goals of availability, scalability, and maintainability.
              Let us help build the right solution for you.
            </p>
          </div>
        </Platinum>
        <Platinum url="https://grox.io/">
          <figure>
            <img
              src="/static/sponsor-logos/groxio.png"
              alt="Groxio"
              css={css`
                img {
                  max-width: 60%;
                  margin: 4rem auto;
                }
              `}
            />
            <div>
              <p>
                Groxio is a small company of educators, language geeks and
                authors who want to change the way people teach and learn
                languages.
              </p>
            </div>
          </figure>
        </Platinum>
        <Platinum url="https://www.verypossible.com/">
          <img
            src="/static/sponsor-logos/very.svg"
            alt="Very"
            css={css`
              max-width: 20rem;
              margin: 2rem auto;
            `}
          />
          <p>
            Remarkable people building connected solutions. Work with software
            development and design experts to bring your ideas to life using IoT
            and machine learning.
          </p>
        </Platinum>
      </div>
      <h3>Community</h3>
      <div css={flexGrid}>
        <Platinum url="https://www.getthru.io/">
          <figure>
            <img src="/static/sponsor-logos/get-thru.png" alt="Get Thru" />
          </figure>
          <div>
            <p>
              GetThru empowers organizations to connect authentically with their
              audiences at scale, while building a sustainable company committed
              to progressive social change. Our tools have been used by more
              than 2,000 organizations to send over 250 million text messages
              (ThruText) and make more than 100 million phone calls (ThruTalk)
              for event recruitment, voter and volunteer engagement,
              fundraising, polling, and more. And while our roots are in
              progressive politics, we love partnering with organizations of all
              kinds that share our passion for creating a better world.
            </p>
          </div>
        </Platinum>
      </div>
      <h3>Elixir Champion</h3>
      <div css={flexGrid}>
        <Champion
          img="/static/sponsor-logos/dockyard.png"
          name="Dockyard"
          url="https://dockyard.com/"
          linkcss={css`
            padding-left: 8px;
            padding-right: 8px;
            &:focus,
            &:hover {
              padding-left: 6px;
              padding-right: 6px;
            }
          `}
        />
        <Champion
          name="Erlang Solutions"
          img="/static/sponsor-logos/erlang-solutions.png"
          url="https://www.erlang-solutions.com/"
        />
      </div>
      <h3>Supporting Partners</h3>
      <div css={flexGrid}>
        <Champion
          name="Code Sync"
          img="/static/sponsor-logos/code-sync.svg"
          url="https://www.codesync.global/"
        />
        <Champion
          name="ElixirConf EU"
          img="/static/sponsor-logos/elixirconf-eu.svg"
          url="https://www.elixirconf.eu/"
        />
      </div>
      <Link href="/contact">
        <a href="/contact" css={buttonCss}>
          Contact Us About Sponsoring
        </a>
      </Link>
    </div>
  </SectionWrapper>
);

export default SubscriptionSection;

function Platinum({ url, children, customCss }) {
  return (
    <a
      href={url}
      css={css`
        ${flexGridItem}
        ${sponsorLink}
        margin-bottom: ${typography.rhythm(1)};
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        /* Override wide when we have a single platinum sponsor */
        ${breakpoint("large")} {
          width: 100%;
        }

        p:last-child {
          margin-bottom: ${typography.rhythm(1 / 4)};
        }
        p {
          padding-left: ${typography.rhythm(1 / 4)};
          padding-right: ${typography.rhythm(1 / 4)};
        }

        font-size: ${typography.rhythm(5 / 8)};
        color: ${colors.plum};
        text-align: center;

        img {
          flex-shrink: 0;
        }
        ${customCss}
      `}
    >
      {children}
    </a>
  );
}

function Lanyard({ img, name, url, children }) {
  return (
    <a
      href={url}
      css={css`
        margin-left: ${typography.rhythm(1)};
        ${sponsorLink}
        margin-bottom: ${typography.rhythm(1)};
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        figure {
          width: calc(50% - ${typography.rhythm(1 / 2)});
          margin: 0;
        }

        img {
          /* width: 100%; */
          height: 10em;
          margin: 0;
        }

        div {
          width: calc(50% - ${typography.rhythm(1 / 2)});
        }

        p:last-child {
          margin-bottom: ${typography.rhythm(1 / 4)};
        }
        p {
          padding-left: ${typography.rhythm(1 / 4)};
          padding-right: ${typography.rhythm(1 / 4)};
        }

        font-size: ${typography.rhythm(5 / 8)};
        color: ${colors.plum};
        text-align: center;
      `}
    >
      {children}
    </a>
  );
}

function Champion({ img, name, url, linkcss = "" }) {
  return (
    <a
      href={url}
      css={css`
        ${flexGridItemChampion}
        ${sponsorLink}
        border-color: ${colors.blush};
        margin-bottom: ${typography.rhythm(1)};
        ${linkcss}
      `}
    >
      <img
        src={img}
        alt={name}
        css={css`
          display: block;
          margin-bottom: 0;
        `}
      />
    </a>
  );
}
