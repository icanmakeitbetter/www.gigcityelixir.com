import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import brucePic from './../images/bruce-tate.jpg'
import davePic from './../images/dave-thomas.jpg'
import johnPic from './../images/john-hughes.jpg'
import annaPic from './../images/anna-neyzberg.jpg'
import jamesPic from './../images/james-gray.jpg'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import { css } from 'emotion'

const purple = "#772858"
const orange = "#F67465"

const bioStyles = css`
  display: inline-block;
  text-align: center;
`

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <section css={` margin-bottom: ${rhythm(2)}; `}>
          <h1 css={` margin-bottom: ${rhythm(1 / 3)}; `}>From José Valim</h1>
          <p>A word from Elixir's Creator</p>
          <p css={` color: ${orange}; font-family: "OdudoMono-Regular", sans-serif; line-height: 37px; letter-spacing: 0.3px;`}>
            “Gig City Elixir’s speaker line-up is strong. They’re bringing in the programmers that shaped Elixir before Elixir was even born as well as the developers that are evolving the language and community every day.”
          </p>
        </section>

        <section css={` margin-bottom: ${rhythm(2)}; padding-top: ${rhythm(1)}; border-top: ${purple} solid 3px;`}>
          <h1 css={` margin-bottom: ${rhythm(1 / 3)}; `}>About Us</h1>
          <p>A message from conference organizer Bruce Tate.</p>
          <p>
            Gig City Elixir is a different kind of programming conference in beautiful Chattanooga, Tennessee. We will focus on sessions that are different from what you're used to seeing, with a variety of talk lengths and formats that will open more learning channels than ever before.
          </p>
          <p>
            One of the best speaker lineups at any 2018 programming conference will teach you the foundational techniques you'll need to succeed in today's programming industry. You'll learn to use functional programming concepts that will make you a better programmer, regardless of the languages and tools you use at work today.
          </p>
        </section>

        <section css={` margin-bottom: ${rhythm(2)}; padding-top: ${rhythm(1)}; border-top: ${purple} solid 3px;`}>
          <h1 css={` margin-bottom: ${rhythm(1 / 3)}; `}>Our Speakers</h1>
          <p>More to be announced.</p>
          <div css={` display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 30px;`}>
            <div className={bioStyles}>
              <img src={brucePic} alt="picture of bruce tate kayaking"/>
              <p>Bruce Tate</p>
              <p>Notables: Author of 7 Languages 7 Weeks, Adopting Elixir.</p>
            </div>

            <div className={bioStyles}>
              <img src={annaPic} alt="picture of anna neyzberg"/>
              <p>Anna Neyzberg</p>
              <p>Notables: Co-founder of Elixir Bridge</p>
            </div>

            <div className={bioStyles}>
              <img src={davePic} alt="picture of dave thomas"/>
              <p>Dave Thomas</p>
              <p>Notables: Wrote the Pragmatic Programmer, Pragmatic Press founder.</p>
            </div>

            <div className={bioStyles}>
              <img src={johnPic} alt="picture of john hughes"/>
              <p>John Hughes</p>
              <p>Notables: Haskell Designer</p>
            </div>

            <div className={bioStyles}>
              <img src={jamesPic} alt="picture of james edward gray"/>
              <p>James Edward Gray II</p>
              <p>Notables: Ruby Superstar</p>
            </div>
          </div>
        </section>

        <section css={` margin-bottom: ${rhythm(2)}; padding-top: ${rhythm(1)}; border-top: ${purple} solid 3px;`}>
          <h1 css={` margin-bottom: ${rhythm(1 / 3)}; `}>Get our Email Announcements</h1>
          <p>Infrequent info and announcements.</p>
          <span css={` font-family: "OdudoMono-Regular", sans-serif; color: ${orange}; font-size: 20px; `}>
            Be the first to know when tickets go live!
          </span>
          <form action="https://tinyletter.com/gigcityelixir" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/gigcityelixir', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
            <input type="email" name="email" id="tlemail" placeholder="attendee@company.com"/>
            <input type="hidden" value="1" name="embed"/>
            <input className="button" type="submit" value="Subscribe" />
          </form>
        </section>

        <section css={` margin-bottom: ${rhythm(2)}; padding-top: ${rhythm(1)}; border-top: ${purple} solid 3px;`}>
          <h1 css={` margin-bottom: ${rhythm(1 / 3)}; `}>Scholarships</h1>
          <p>Because we're stronger together.</p>
          <p>
            We will make Gig City Elixir a diverse experience. We will have scholarships available to those under-represented in our programming community including women and minorities. We will do the mentoring it takes before the conference to make sure programmers can take full advantage. If you or someone you know might benefit and can't afford their own ticket, let us know.
          </p>
          <button>Learn More</button>
        </section>

        <section css={` margin-bottom: ${rhythm(2)}; padding-top: ${rhythm(1)}; border-top: ${purple} solid 3px;`}>
          <h1 css={` margin-bottom: ${rhythm(1 / 3)}; `}>Registration</h1>
          <p>Join us at Gig City Elixir 2018!</p>
          <p css={` font-family: "OdudoMono-Regular", sans-serif; color: ${purple}; font-size: 30px; `}>
            $350 Individual // $450 Corporate
          </p>
          <button css={` background-color: ${orange} `}>Registration Coming Soon</button>
        </section>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
