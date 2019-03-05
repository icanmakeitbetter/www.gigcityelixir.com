import React from "react";
import Link from "gatsby-link";
import * as consts from "../styles/variables";

const ListLink = props => (
  <li
    css={`
      display: inline-block;
      margin: 0 1.5rem;
      margin-bottom: 0;
      padding: 12px 0;
    `}
  >
    <Link
      className="ff-odudomono-r"
      css={`
        color: ${consts.purple};
        text-decoration: none;
      `}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
);

const Menu = () => (
  <ul
    css={`
      border-top: 2px ${consts.purple} solid;
      border-bottom: 2px ${consts.purple} solid;
      list-style: none;
      margin: 3rem 0 10rem;
      text-align: center;
    `}
  >
    <ListLink to="/">Home</ListLink>
    <ListLink to="/program/">Program</ListLink>
    <ListLink to="/schedule/">Schedule</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
    <ListLink to="/coc/">CoC</ListLink>
    <ListLink to="/tickets/">Tickets</ListLink>
    <ListLink to="/why-chattanooga/">Why Chattanooga?</ListLink>
  </ul>
);

export default Menu;
