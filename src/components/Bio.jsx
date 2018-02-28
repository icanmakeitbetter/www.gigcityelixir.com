import React from 'react'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        css={`
          display: flex;
          margin-bottom: ${rhythm(1.5)};
        `}
      >
        <img
          src={profilePic}
          alt={`Brett Wise`}
          css={`
            border-radius: 50%;
            margin-bottom: 0px;
            margin-right: ${rhythm(1 / 2)};
            width: ${rhythm(2)};
            height: ${rhythm(2)};
          `}
        />
        <p>
          I live and work in Chattanooga. <br/>
          <a href="https://twitter.com/brettwise">
            Here's my twitter for whatever that's worth.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
