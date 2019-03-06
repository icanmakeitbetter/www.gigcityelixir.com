import { css } from "@emotion/core";
import { primaryButtonCss, reverseButtonCss } from "../components/Button";
import DateAndVenue from "../components/DateAndVenue";
import Logo from "../components/Logo";
import { breakpoint, points } from "../utils/breakpoints";
import { colors, hues } from "../utils/constants";
import { typography } from "../utils/typography";
import GCEHead from "../components/GCEHead";

export default function Index() {
  return (
    <Wrapper>
      <GCEHead />
      <Main>
        <div
          css={css`
            background-color: ${colors.plum};
            padding: ${typography.rhythm(1)} 0 0;
            ${breakpoint("medium")} {
              padding: ${typography.rhythm(2.0)} ${typography.rhythm(1.5)}
                ${typography.rhythm(1.5)};
            }
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <Logo />
            <DateAndVenue
              extraCss={css`
                margin-top: 0;
                margin-bottom: 0;
              `}
            />
          </div>
          <NewsLetterSignup />
        </div>
      </Main>
    </Wrapper>
  );
}

function Wrapper({ children }) {
  return (
    <div
      css={css`
        min-height: 100vh;
        margin: 0 auto;
        background-color: ${colors.plum};
        background-image: url("/static/topo.png");
        background-position: 50% 0%;
        background-repeat: no-repeat;
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
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        min-height: 100vh;
        color: ${colors.blush};
        display: flex;
        flex-direction: column-reverse;

        background-color: ${colors.plum};
        background-image: url("/static/topo.png");
        background-position: 50% 0%;
        background-repeat: no-repeat;
        @supports (display: grid) {
          ${breakpoint("medium")} {
            flex-direction: column;
            box-shadow: 0 1em 0 1em ${colors.peachy_plum},
              0 2em 0 2em ${colors.plummy_peach}, 0 3em 0 3em ${colors.peach};
          }
        }
      `}
    >
      <div
        className="limit-width"
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
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
