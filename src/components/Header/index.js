import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const purple = "#772858"
const orange = "#F67465"

const moveLeft = css`
   position: relative; 
   left: 24px; 
`

const Header = () => (
  <div
    css={`
      margin-bottom: 3.45rem;
      background-color: ${purple};
    `}
  >
    <div
      css={`
        margin: 0px 45% 0px auto;
        max-width: 625px;
      `}
    >
      <div
        css={`
          display: inline-block;
          margin: 1.45rem 1.0875rem 1.45rem 0;
          border-right-width: 3px;
          border-right-color: ${orange};
          border-right-style: solid;
          padding-right: 8px;
        `}
      >
        <h1 css={` 
          display: inline;
          margin: 0px; 
          `}>
          <Link
            to="/"
            css={`
              box-shadow: none;
              color: white;
              letter-spacing: 5px;
              text-transform: uppercase;
              text-decoration: none;
            `}
          >
            <span className={`${moveLeft}`}>gig</span><br/>
            city<br/>
            <span>eli</span><br/>
            <span className={`${moveLeft}`}>xir</span>
          </Link>
        </h1>
      </div>
      <div css={` 
        color: white;
        display: inline-block; 
        font-family: "OdudoMono-Light", sans-serif;
        letter-spacing: 3px; 
        margin-left: 15px;
        position: relative; 
        bottom: 38px;
        text-transform: uppercase; 
      `}>
        <span css={` color: ${orange} `}>October</span> 26-27, 2018 <br />
        Aquarium Conference Center <br />
        Chattanooga, TN
      </div>
    </div>
  </div>
)

export default Header
