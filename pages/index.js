import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { colors } from "../utils/constants";
import { GlobalStyles, typography } from "../utils/typography";
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
          <Header>
            <Logo /> <DateAndVenue />
          </Header>
          <AboutUsSection />
          <NewsLetterSignup />
        </Hero>
        <ProgramSection />
        <SponsorSection />
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
        box-shadow: 0 0 0 0.5em ${colors.plum},
          0 0.5em 0 0.5em ${colors.peachy_plum},
          0 1em 0 0.5em ${colors.plummy_peach}, 0 1.5em 0 0.5em ${colors.peach};
        color: ${colors.blush};
      `}
    >
      {children}
    </div>
  );
}

const Header = styled.header`
  background-color: ${colors.plum};
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: ${typography.rhythm(1)};
  padding: ${typography.rhythm(1)};
`;

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
        margin-right: 2rem;
        font-size: 1.75rem;
        span {
          padding-left: 1.5ch;
        }
        .l {
          padding-left: 0;
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
      `}
    >
      <span css={{ color: colors.peach }}>October</span> 31, 2019
      <br />
      The Edney Innovation Center
      <br />
      Chattanooga, TN
    </div>
  );
}

function Footer() {
  return (
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
      `}
    >
      <label
        for="tlemail"
        css={{ display: "block", fontWeight: "bold", color: "white" }}
      >
        Early bird tickets coming soon!
      </label>
      <label for="tlemail">
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
