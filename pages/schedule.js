import React from "react";
import Page from "../components/Page";
import { css } from "@emotion/core";

export default function Schedule() {
  return (
    <Page title="Schedule">
      <h1>Schedule</h1>
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
            <th colspan="2">Friday, October 18th</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>08:00</th> <td>Breakfast and Registration</td>
          </tr>
          <tr>
            <th>08:45 - 09:00</th> <td>Announcements</td>
          </tr>
          <tr>
            <th>09:00 - 09:45</th>
            <td>
              <strong>Justin Schneck:</strong> Adopting Nerves for IoT
            </td>
          </tr>
          <tr>
            <th>09:50 - 10:20</th>
            <td>
              <strong>Ben Marx:</strong> Modeling Systems with TLA+
            </td>
          </tr>
          <tr>
            <th>10:20 - 10:50</th> <td>Break</td>
          </tr>
          <tr>
            <th>10:50 - 11:20</th>
            <td>
              <strong>Amos King:</strong> Thinking > Typing
            </td>
          </tr>
          <tr>
            <th>11:25 - 12:15</th>
            <td>
              <strong>Miki Rezentes:</strong> It's APIs All the Way Down
            </td>
          </tr>
          <tr>
            <th>12:15 - 01:30</th> <td>Lunch</td>
          </tr>
          <tr>
            <th>01:30 - 01:35</th>
            <td>Platinum Sponsor Talk - Very</td>
          </tr>
          <tr>
            <th>01:40 - 02:10</th>
            <td>
              <strong>Martin Gausby</strong>
            </td>
          </tr>
          <tr>
            <th>02:15 - 2:45</th>
            <td>
              <strong>Jeff Grunewald:</strong> A Truly Smart City Runs on the
              BEAM
            </td>
          </tr>
          <tr>
            <th>02:45 - 02:50</th>
            <td>Platinum Sponsor Talk - Pillar</td>
          </tr>
          <tr>
            <th>02:55 - 03:45</th>
            <td>
              <strong>Better Allies - Approaching Equality Together</strong>
            </td>
          </tr>
          <tr>
            <th>03:45 - 04:10</th>
            <td>Break</td>
          </tr>
          <tr>
            <th>04:10 - 05:00</th>
            <td>
              <strong>Dave Thomas</strong>
            </td>
          </tr>
          <tr>
            <th>05:00 - 05:15</th>
            <td>Directions about Dinner</td>
          </tr>
          <tr>
            <th>06:00 - 09:00</th>
            <td>
              <a href="https://www.google.com/maps/place/The+Camp+House/@35.0454122,-85.3069926,17z/data=!3m1!4b1!4m5!3m4!1s0x88605e7b6e88402b:0x1ca6cbe286c4aaed!8m2!3d35.0454122!4d-85.3069926">
                Dinner - The Camp House
                <br />
                149 E M L King Blvd., Chattanooga, TN 37402
              </a>
            </td>
          </tr>
          <tr>
            <th>09:00 -</th>
            <td>
              <a href="https://www.google.com/maps/place/Moxy+Chattanooga+Downtown/@35.040047,-85.306636,17z/data=!3m1!4b1!4m8!3m7!1s0x88605fe8761cce13:0xca45ed9b3732da0b!5m2!4m1!1i2!8m2!3d35.040047!4d-85.306636">
                Day One After Party - The Moxy Bar
              </a>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th
              colspan="2"
              style={{
                paddingTop: "3rem"
              }}
            >
              Saturday, October 19th
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>08:00</th> <td>Breakfast and Registration</td>
          </tr>
          <tr>
            <th>08:45 - 09:00</th> <td>Announcements</td>
          </tr>
          <tr>
            <th>09:00 - 09:45</th>
            <td>
              <strong>Stuart Halloway:</strong> Sherlock Holmes, Consulting
              Developer
            </td>
          </tr>
          <tr>
            <th>09:50 - 10:20</th>
            <td>
              <strong>Todd Resudek:</strong> Why you should use Nerves for your
              next (or first) hardware project
            </td>
          </tr>
          <tr>
            <th>10:20 - 10:50</th> <td>Break</td>
          </tr>
          <tr>
            <th>10:50 - 11:20</th>
            <td>
              <strong>Brian Troutwine:</strong> Do Big Things Well: Project
              Gemini on the Way to the Moon
            </td>
          </tr>
          <tr>
            <th>11:25 - 12:15</th>
            <td>
              <strong>Camera Shy - Elixir Chatt Mentors</strong>
            </td>
          </tr>
          <tr>
            <th>12:15 - 01:30</th> <td>Lunch</td>
          </tr>
          <tr>
            <th>01:30 - 01:35</th>
            <td>Platinum Sponsor Talk - Bridge Connector</td>
          </tr>
          <tr>
            <th>01:40 - 02:10</th>
            <td>
              <strong>Ricardo Echavarría:</strong> Assembling Lumen
            </td>
          </tr>
          <tr>
            <th>02:15 - 2:45</th>
            <td>
              <strong>Osayame Gaius-Obaseki</strong> Beyond Functional
              Programming
            </td>
          </tr>
          <tr>
            <th>02:45 - 02:50</th>
            <td>Thanking All Sponsors</td>
          </tr>
          <tr>
            <th>02:55 - 03:45</th>
            <td>
              <strong>Elixir Outlaws Live Recording</strong>
            </td>
          </tr>
          <tr>
            <th>03:45 - 04:10</th>
            <td>Break</td>
          </tr>
          <tr>
            <th>04:10 - 05:00</th>
            <td>
              <strong>Chris Keathley</strong>
            </td>
          </tr>
          <tr>
            <th>05:00 - 05:15</th>
            <td>Good Byes, Slideshow</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}
