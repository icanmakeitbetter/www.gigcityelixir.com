import { css } from "@emotion/core";
import { primaryButtonCss, reverseButtonCss } from "../components/Button";
import DateAndVenue from "../components/DateAndVenue";
import Footer from "../components/Footer";
import Hr from "../components/Hr";
import Logo from "../components/Logo";
import AboutUsSection from "../components/sections/AboutUsSection";
import HotelSection from "../components/sections/HotelSection";
import ProgramSection from "../components/sections/ProgramSection";
import SpeakerSection from "../components/sections/SpeakerSection";
import SponsorSection from "../components/sections/SponsorSection";
import StartupWeekSection from "../components/sections/StartupWeekSection";
import NervesTrainingSection from "../components/sections/NervesTrainingSection";
import VenueSection from "../components/sections/VenueSection";
import ScheduleSection from "../components/sections/ScheduleSection";
import { SkipToNavLink } from "../components/SkipToNav";
import { breakpoint, points } from "../utils/breakpoints";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";
import GCEHead from "../components/GCEHead";

export default function Index() {
  return (
    <Wrapper>
      <GCEHead />
      <SkipToNavLink />
      <Main>
        <Teaser>
          This is an archive of the 2019 conference. Looking for the latest
          site?{" "}
          <a
            css={css`
              &,
              &:link,
              &:visited {
                color: white;
              }
            `}
            href="https://www.gigcityelixir.com"
          >
            Go to gigcityelixir.com
          </a>
        </Teaser>
        <Teaser>
          Nerves Training tickets are now available!{" "}
          <a
            href="#nerves-training"
            css={css`
              &,
              &:link,
              &:visited {
                color: white;
              }
            `}
          >
            Find out more.
          </a>
        </Teaser>
        <Hero>
          <HeroLeft>
            <Logo
              extraCss={css`
                @supports (display: grid) {
                  ${breakpoint("medium")} {
                    font-size: 3rem;
                    background: ${colors.plum};
                    padding: 0;
                    box-shadow: 0 0 0 ${typography.rhythm(3 / 2)} ${colors.plum};
                    border: 0;
                  }
                  ${breakpoint("large")} {
                    padding-left: ${typography.rhythm(1)};
                    font-size: 4rem;
                  }
                }
              `}
            />
          </HeroLeft>
          <DateAndVenue
            extraCss={css`
              @supports (display: grid) {
                ${breakpoint("medium")} {
                  margin: ${typography.rhythm(3)} 0 0;
                  grid-area: top;
                  padding: ${typography.rhythm(2)} ${typography.rhythm(2)}
                    ${typography.rhythm(1)};
                }
              }
            `}
          />
          <div
            css={css`
              grid-area: mid;
              background-color: ${colors.plum};
              width: calc(100% / 3 * 2);
              @supports (display: grid) {
                width: auto;
              }
            `}
          >
            <AboutUsSection />
          </div>
          <div
            css={css`
              width: calc(100% / 3 * 2);
              @supports (display: grid) {
                width: auto;
                ${breakpoint("medium")} {
                  padding: 0;
                  grid-area: bot;
                }
              }
            `}
          >
            <Registration />
            <NewsLetterSignup />
          </div>
        </Hero>
        <SpeakerSection />
        <Hr />
        <ScheduleSection />
        <Hr />
        <ProgramSection />
        <Hr />
        <NervesTrainingSection />
        <Hr />
        <HotelSection />
        <Hr />
        <VenueSection />
        <Hr />
        <StartupWeekSection />
        <Hr />
        <SponsorSection />
      </Main>
      <Footer />
    </Wrapper>
  );
}
function Wrapper({ children }) {
  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  );
}

function Main({ children }) {
  return (
    <div
      css={css`
        flex-grow: 1;
      `}
    >
      {children}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div
      css={css`
        margin-bottom: ${typography.rhythm(2)};
        box-shadow: 0 0 0 0.5em ${colors.peachy_plum},
          0 0.5em 0 0.5em ${colors.plummy_peach}, 0 1em 0 0.5em ${colors.peach};
        color: ${colors.blush};
        flex-direction: column-reverse;
        padding-top: ${typography.rhythm(1 / 2)};

        background-color: ${colors.plum};
        background-image: url("/static/topo.svg");
        background-position: 50% 0%;
        background-repeat: no-repeat;
        @supports (display: grid) {
          ${breakpoint("medium")} {
            box-shadow: 0 1em 0 1em ${colors.peachy_plum},
              0 2em 0 2em ${colors.plummy_peach}, 0 3em 0 3em ${colors.peach};
            margin-bottom: ${typography.rhythm(5)};
          }
        }
      `}
    >
      <div
        className="limit-width"
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: end;
          align-items: center;
          @supports (display: grid) {
            justify-content: normal;
            ${breakpoint("medium")} {
              display: grid;
              /* 3 rows, 3 cols */
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: auto auto auto;
              grid-column-gap: ${typography.rhythm(3)};
              grid-template-areas:
                "left top top"
                "left mid mid"
                "left bot bot";
            }
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}

function HeroLeft({ children }) {
  return (
    <div
      css={css`
        @supports (display: grid) {
          ${breakpoint("medium")} {
            margin: 0;
            grid-area: left;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            max-height: 100vh;
          }
        }
      `}
    >
      {children}
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
        background-color: ${colors.plum};

        @supports (display: grid) {
          ${breakpoint("medium")} {
            padding: 0;
            margin-bottom: ${typography.rhythm(3)};
            padding: ${typography.rhythm(1)} ${typography.rhythm(2)}
              ${typography.rhythm(2)};
          }
        }
      `}
    >
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
            ${reverseButtonCss}
            font-size: 1rem;
            padding: ${typography.rhythm(1 / 4)};
          `}
        />
      </div>
      <input type="hidden" value="1" name="embed" />
    </form>
  );
}

function Registration() {
  return (
    <div
      css={css`
        padding: ${typography.rhythm(0)} ${typography.rhythm(2)}
          ${typography.rhythm(1)};
        background-color: ${colors.plum};
        @supports (display: grid) {
          ${breakpoint("medium")} {
            padding: ${typography.rhythm(0)} ${typography.rhythm(3)}
              ${typography.rhythm(1)};
          }
        }
      `}
    >
      <a
        css={css`
          ${primaryButtonCss}
          font-size: 1.15rem;
        `}
        href="https://ti.to/gig-city-elixir/gig-city-elixir-2019"
      >
        Register here for Tickets and Training
      </a>
    </div>
  );
}

function Teaser({ children }) {
  return (
    <p
      css={css`
        background: ${colors.peachy_plum};
        color: white;
        text-align: center;
        padding: 0.5rem;
        margin: 0;
      `}
    >
      {children}
    </p>
  );
}
