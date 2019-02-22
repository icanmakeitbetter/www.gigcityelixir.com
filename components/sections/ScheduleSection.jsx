import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";
import Link from "gatsby-link";

const ScheduleSection = () => (
  <SectionWrapper header="Schedule Outline" subhead="The schedule in brief">
    <table
      css={`
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
          <th>08:00 AM</th> <td>Breakfast is served.</td>
        </tr>
        <tr>
          <th>09:00 AM</th> <td>Talks start around this time.</td>
        </tr>
        <tr>
          <th>12:00 PM</th> <td>Lunch is served.</td>
        </tr>
        <tr>
          <th>01:30 PM</th> <td>Talks resume.</td>
        </tr>
        <tr>
          <th>Friday @ 5 or 6 PM</th>{" "}
          <td>Dinner is served (dinner not served on Saturday).</td>
        </tr>
      </tbody>
    </table>
    <Link to="/schedule/">
      <Button className="button" text="Full Schedule" />
    </Link>
  </SectionWrapper>
);

export default ScheduleSection;
