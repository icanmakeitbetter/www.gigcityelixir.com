import React from "react";
import SectionWrapper from "../SectionWrapper";

const ScheduleSection = () => (
  <SectionWrapper header="Schedule Outline" subhead="The schedule in brief.">
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
        thead th {
          color: #772858;
          font-size: 20px;
          font-family: "OdudoMono-Regular", sans-serif;
          border-bottom: 1px solid currentColor;
          text-align: center;
          padding-top: 1em;
        }
      `}
    >
      <thead>
        <tr>
          <th colspan="2">Friday, October 26th</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>08:00 - 08:45</th> <td>Breakfast and Registration</td>
        </tr>
        <tr>
          <th>08:45 - 09:00</th> <td>Welcome</td>
        </tr>
        <tr>
          <th>09:00 - 10:00</th>{" "}
          <td>
            <strong>Why Functional Programming Matters</strong>,{" "}
            <span className="speaker">John Hughes</span>
          </td>
        </tr>
        <tr>
          <th>10:10 - 10:40</th>{" "}
          <td>
            <strong>Applications with a Capital A</strong>,{" "}
            <span className="speaker">Paul Dawson</span>
          </td>
        </tr>
        <tr>
          <th>10:40 - 11:05</th> <td>Break</td>
        </tr>
        <tr>
          <th>11:05 - 11:50</th>{" "}
          <td>
            <strong>
              How to Pour Beer with Your Face (and Not on Your Face)
            </strong>
            , <span className="speaker">Jeff McGehee</span>
          </td>
        </tr>
        <tr>
          <th>12:00 - 12:30</th>{" "}
          <td>
            <strong>Using OTP Effectively In Elixir Web Applications</strong>,{" "}
            <span className="speaker">Hannah Howard</span>
          </td>
        </tr>
        <tr>
          <th>12:30 - 01:45</th> <td>Lunch</td>
        </tr>
        <tr>
          <th>01:45 - 02:30</th>{" "}
          <td>
            <strong>Elixir Outlaws Live Recording</strong>
          </td>
        </tr>
        <tr>
          <th>02:40 - 03:10</th>{" "}
          <td>
            <strong>Lies, Damn Lies and Comments</strong>,{" "}
            <span className="speaker">Bruce Tate and Osa Gaius - Obaseki</span>
          </td>
        </tr>
        <tr>
          <th>03:10 - 03:35</th> <td>Break</td>
        </tr>
        <tr>
          <th>03:35 - 04:05</th>{" "}
          <td>
            <strong>Building Resilient Systems with Stacking</strong>,{" "}
            <span className="speaker">Chris Keathley</span>
          </td>
        </tr>
        <tr>
          <th>04:15 - 05:00</th>{" "}
          <td>
            <strong>You’re Doing Too Much</strong>,{" "}
            <span className="speaker">James Edward Gray II</span>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th colspan="2">Saturday, October 27th</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>08:00 - 08:45</th> <td>Breakfast</td>
        </tr>
        <tr>
          <th>08:45 - 09:00</th> <td>Welcome, Day 2</td>
        </tr>
        <tr>
          <th>09:00 - 09:45</th>{" "}
          <td>
            <strong>Stewardship Made Practical</strong>,{" "}
            <span className="speaker">Stu Halloway</span>
          </td>
        </tr>
        <tr>
          <th>09:55 - 10:40</th>{" "}
          <td>
            <strong>QED - Question Educated Development</strong>,{" "}
            <span className="speaker">Miki Rezentes</span>
          </td>
        </tr>
        <tr>
          <th>10:40 - 11:05</th> <td>Break</td>
        </tr>
        <tr>
          <th>11:05 - 11:50</th>{" "}
          <td>
            <strong>Phoenix LiveView</strong>,{" "}
            <span className="speaker">Chris McCord</span>
          </td>
        </tr>
        <tr>
          <th>12:00 - 12:30</th>{" "}
          <td>
            <strong>That One, For Now</strong>,{" "}
            <span className="speaker">Ben Marx</span>
          </td>
        </tr>
        <tr>
          <th>12:30 - 01:45</th> <td>Lunch</td>
        </tr>
        <tr>
          <th>01:45 - 02:30</th>{" "}
          <td>
            <strong>Panel Discussion</strong>
          </td>
        </tr>
        <tr>
          <th>02:40 - 03:20</th>{" "}
          <td>
            <strong>Crypto + Concurrency</strong>,{" "}
            <span className="speaker">Anna Neyzberg</span>
          </td>
        </tr>
        <tr>
          <th>03:20 - 03:45</th> <td>Break</td>
        </tr>
        <tr>
          <th>03:45 - 04:30</th>{" "}
          <td>
            <strong>Transforming Programming</strong>,{" "}
            <span className="speaker">Dave Thomas</span>
          </td>
        </tr>
      </tbody>
    </table>
  </SectionWrapper>
);

export default ScheduleSection;
