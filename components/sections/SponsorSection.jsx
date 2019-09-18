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
  width: calc(25% - ${typography.rhythm(1)});
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
        <Platinum
          img="/static/sponsor-logos/pillar.png"
          name="Pillar"
          url="https://pillartechnology.com/"
        >
          <p>
            Pillar Technology is a technology consulting company with over 20
            years of uncovering and executing industry-disrupting opportunities
            at lightning speed.
          </p>
        </Platinum>
        <Platinum
          img="/static/sponsor-logos/very.svg"
          name="Very"
          url="https://www.verypossible.com/"
        >
          <p>
            Remarkable people building connected solutions. Work with software
            development and design experts to bring your ideas to life using IoT
            and machine learning.
          </p>
        </Platinum>
        <Platinum
          img="/static/sponsor-logos/bridge-connector.png"
          name="Bridge Connector"
          url="https://bridgeconnector.co/"
          customCss="img {margin-top: 4rem; margin-bottom: 4rem;}"
        >
          <p>
            Bridge Connector is a data-driven, workflow engine that is changing
            the way health care communicates. With our “no-code,”
            integration-platform-as-a-service (iPaaS) core product and other
            solutions, we connect disparate data systems in health care IT more
            quickly and cost-efficiently.
          </p>
        </Platinum>
      </div>
      <h3>Gold</h3>
      <div css={flexGrid}>
        <Platinum
          img="/static/sponsor-logos/groxio.png"
          name="groxio"
          url="https://grox.io"
        >
          <p>
            Groxio is a small company of educators, language geeks and authors
            who want to change the way people teach and learn languages.
          </p>
        </Platinum>
        <Platinum
          img="/static/sponsor-logos/binary-noggin.png"
          name="Binary Noggin"
          url="http://binarynoggin.com/"
        >
          <p>
            Agile Practitioners Helping to Build Great Products Through
            Communication and Trust
          </p>
        </Platinum>
      </div>

      <h3>Community</h3>
      <div css={flexGrid}>
        <Lanyard url="https://www.carbonfive.com/">
          <div>
            <p>
              Carbon Five is a strategic digital product development firm. We
              partner with clients to create exceptional products and grow
              effective teams.
            </p>
          </div>
          <figure>
            <img src="/static/sponsor-logos/c5.png" alt="Carbon Five" />
          </figure>
        </Lanyard>
      </div>
      <h3>Lanyard</h3>
      <div css={flexGrid}>
        <Lanyard url="https://bleacherreport.com/">
          <figure>
            <img
              src="/static/sponsor-logos/bleacher.svg"
              alt="Bleacher Report"
            />
          </figure>
          <div>
            <p>
              There’s an ever-present energy that surrounds the world of sports.
              Through creative expression, B/R adds fuel to the fire. We capture
              and unleash the untapped power to deliver visceral, authentic
              moments at the intersection of sports and culture.
            </p>
          </div>
        </Lanyard>
      </div>
      <h3>Elixir Champion</h3>
      <div css={flexGrid}>
        <Champion
          img="/static/sponsor-logos/tito.svg"
          name="Tito"
          url="https://ti.to/"
        />
        <Champion
          img="/static/sponsor-logos/codescience.jpg"
          name="CodeScience"
          url="https://www.codescience.com/"
          linkcss={css`
            padding-left: 2px;
            padding-right: 2px;
            &:focus,
            &:hover {
              padding-left: 0px;
              padding-right: 0px;
            }
          `}
        />
        <Champion
          img="/static/sponsor-logos/aspire.png"
          name="Aspire"
          url="http://aspirehealthcare.com/"
        />
      </div>
      <h3>Diversity Advocates</h3>
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          margin-left: -${typography.rhythm(1)};
          > li {
            width: calc(50% - ${typography.rhythm(1)});
            margin-left: ${typography.rhythm(1)};
          }
        `}
      >
        <li>Doyle Turner</li>
        <li>Amos King</li>
      </ul>

      <h3>Swag and Award Donors</h3>
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          margin-left: -${typography.rhythm(1)};
          > li {
            width: calc(50% - ${typography.rhythm(1)});
            margin-left: ${typography.rhythm(1)};
          }
        `}
      >
        <li>
          <a href="https://www.manning.com/">Manning Publications</a>
        </li>
        <li>
          <a href="https://pragprog.com">Pragmatic Bookshelf</a>
        </li>
      </ul>
      <Link href="/contact">
        <a href="/contact" css={buttonCss}>
          Contact Us About Sponsoring
        </a>
      </Link>
    </div>
  </SectionWrapper>
);

export default SubscriptionSection;

function Platinum({ img, name, url, children, customCss }) {
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
      <img src={img} alt={name} />
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
