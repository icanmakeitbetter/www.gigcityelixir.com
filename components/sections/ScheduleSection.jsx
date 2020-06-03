import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "@emotion/core";
import { buttonCss } from "../Button";
import Link from "next/link";

const ScheduleSection = () => (
  <SectionWrapper header="Schedule Outline" subhead="">
    <div>
      <table
        css={css`
          th,
          td {
            vertical-align: top;
          }
          th {
            white-space: nowrap;
            font-weight: normal;
            color: rgba(0, 0, 0, 0.5);
          }
        `}
      >
        <tbody>
          <tr>
            <th>08:00</th>
            <td>Breakfast and Registration</td>
          </tr>
          <tr>
            <th>08:45</th>
            <td>Session 1-2 Talks</td>
          </tr>
          <tr>
            <th>12:15</th>
            <td>Lunch</td>
          </tr>
          <tr>
            <th>01:30</th>
            <td>Session 3-4 Talks</td>
          </tr>
          <tr>
            <th>06:00</th>
            <td>Dinner and After Party (Day One Only)</td>
          </tr>
        </tbody>
      </table>
      <Link href="/schedule">
        <a href="/schedule" css={buttonCss}>
          View the Full Schedule
        </a>
      </Link>
    </div>
  </SectionWrapper>
);

export default ScheduleSection;
