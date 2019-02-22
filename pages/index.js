import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { colors } from "../utils/constants";
import { GlobalStyles, typography } from "../utils/typography";
import { breakpoint, points } from "../utils/breakpoints";
import { TypographyStyle } from "react-typography";
import Head from "next/head";
import AboutUsSection from "../components/sections/AboutUsSection";
import ProgramSection from "../components/sections/ProgramSection";
import SponsorSection from "../components/sections/SponsorSection";
import HotelSection from "../components/sections/HotelSection";

export default function Index() {
  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          flex-grow: 1;
        `}
      >
        <Head>
          <TypographyStyle typography={typography} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyles />
        <Hero>
          <div
            className="limit-width"
            css={css`
              @supports (display: grid) {
                ${breakpoint("medium")} {
                  display: grid;
                  /* 3 rows, 3 cols */
                  grid-template-columns: 1fr 1fr 1fr;
                  grid-template-rows: auto auto auto;
                  grid-column-gap: ${typography.rhythm(3)};
                  max-width: ${points.maxWidth};
                  margin: 0px auto;
                  grid-template-areas:
                    "left top top"
                    "left mid mid"
                    "left bot bot";
                }
              }
            `}
          >
            <div
              css={css`
                @supports (display: grid) {
                  ${breakpoint("medium")} {
                    margin: 0;
                    grid-area: left;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                  }
                }
              `}
            >
              <Logo />
            </div>
            <DateAndVenue />
            <div
              css={css`
                grid-area: mid;
                background-color: ${colors.plum};
                @supports (display: grid) {
                  ${breakpoint("medium")} {
                    box-shadow: 0 0 0 ${typography.rhythm(1)} ${colors.plum};
                  }
                }
              `}
            >
              <AboutUsSection />
            </div>
            <NewsLetterSignup />
          </div>
        </Hero>
        <ProgramSection />
        <Hr />
        <SponsorSection />
        <Hr />
        <HotelSection />
      </div>
      <Footer />
    </div>
  );
}

function Hero({ children }) {
  return (
    <div
      css={css`
        background-color: ${colors.plum};
        margin-bottom: ${typography.rhythm(2)};
        box-shadow: 0 0 0 0.5em ${colors.peachy_plum},
          0 0.5em 0 0.5em ${colors.plummy_peach}, 0 1em 0 0.5em ${colors.peach};
        color: ${colors.blush};
        @supports (display: grid) {
          ${breakpoint("medium")} {
            background-image: url("/static/topo.png");
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
      `}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <h1
      className="ff-odudomono-r"
      css={css`
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        letter-spacing: 0.5ch;
        line-height: 0.95;
        margin: 0;
        padding: 0.5em 0.125em 0.5em 0;
        border-right: 0.1em solid ${colors.peach};
        font-size: 1.75rem;
        span {
          padding-left: 1.5ch;
        }
        .l {
          padding-left: 0;
        }
        @supports (display: grid) {
          ${breakpoint("medium")} {
            font-size: 3rem;
            background: ${colors.plum};
            padding-left: ${typography.rhythm(1 / 2)};
            box-shadow: 0 0 0 ${typography.rhythm(1)} ${colors.plum};
          }
          ${breakpoint("large")} {
            padding-left: ${typography.rhythm(1)};
            font-size: 4rem;
          }
        }
      `}
    >
      <span>Gig</span> <span className="l">City</span>{" "}
      <span className="l">Eli</span>
      <span>xir</span>
    </h1>
  );
}

function DateAndVenue() {
  return (
    <div
      className="ff-odudomono-l"
      css={css`
        text-transform: uppercase;
        letter-spacing: 0.3333ch;
        margin: ${typography.rhythm(1)};
        background-color: ${colors.plum};
        @supports (display: grid) {
          ${breakpoint("medium")} {
            margin: ${typography.rhythm(3)} 0 ${typography.rhythm(1)};
            grid-area: top;
            box-shadow: 0 0 0 ${typography.rhythm(1)} ${colors.plum};
          }
        }
      `}
    >
      <span
        css={css`
          color: ${colors.peach};
        `}
      >
        October
      </span>{" "}
      31, 2019
      <br />
      The Edney Innovation Center
      <br />
      Chattanooga, TN
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <Hr />
      <div
        css={css`
          justify-self: end;
          text-align: center;
          border-bottom: ${typography.rhythm(1 / 2)} solid ${colors.blush};
          padding: ${typography.rhythm(1)};
        `}
      >
        Home 2018 Etc
      </div>
    </footer>
  );
}

function NewsLetterSignup() {
  return (
    <form
      action="https://tinyletter.com/gigcityelixir"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open(
          "https://tinyletter.com/gigcityelixir",
          "popupwindow",
          "scrollbars=yes,width=800,height=600"
        );
        return true;
      }}
      css={css`
        margin: 0;
        padding: ${typography.rhythm(1)};
        background-color: ${colors.plum};

        @supports (display: grid) {
          ${breakpoint("medium")} {
            padding: 0;
            grid-area: bot;
            box-shadow: 0 0 0 ${typography.rhythm(1)} ${colors.plum};
            margin-bottom: ${typography.rhythm(3)};
          }
        }
      `}
    >
      <label
        htmlFor="tlemail"
        css={{ display: "block", fontWeight: "bold", color: "white" }}
      >
        Early bird tickets coming soon!
      </label>
      <label htmlFor="tlemail">
        Sign up for our newsletter and be notified of ticketing information and
        more.
      </label>
      <div
        css={css`
          margin-top: ${typography.rhythm(1 / 2)};
          display: flex;
          flex-direction: column;
        `}
      >
        <input
          type="email"
          name="email"
          id="tlemail"
          placeholder="attendee@company.com"
          css={css`
            padding: ${typography.rhythm(1 / 4)};
            background-color: ${colors.peachy_plum};
            border: 1px solid ${colors.plummy_peach};
            color: ${colors.blush};
            margin-right: ${typography.rhythm(1 / 2)};
          `}
        />
        <input
          type="submit"
          value="Subscribe"
          className="ff-odudomono-sb"
          css={css`
            border: 2px solid white;
            color: white;
            background-color: transparent;
            padding: ${typography.rhythm(1 / 4)};
          `}
        />
      </div>
      <input type="hidden" value="1" name="embed" />
    </form>
  );
}

const Hr = styled.hr`
  border: 0;
  border-top: 2px solid ${colors.plum};
  margin: ${typography.rhythm(1)} ${typography.rhythm(1)} 0;
  @supports (display: grid) {
    ${breakpoint("medium")} {
      max-width: ${points.maxWidth};
      margin: ${typography.rhythm(1)} auto 0;
    }
  }
`;
