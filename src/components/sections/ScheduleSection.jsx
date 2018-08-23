import React from "react";
import SectionWrapper from "../SectionWrapper";

const ScheduleSection = () => (
  <SectionWrapper header="Schedule Outline" subhead="The schedule in brief.">
    <ul>
      <li>
        <strong>8AM:</strong> Breakfast is served
      </li>
      <li>
        <strong>9AM:</strong> Talks start around this time.
      </li>
      <li>
        <strong>12PM:</strong> Lunch is served.
      </li>
      <li>
        <strong>1:30PM:</strong> Talks resume.
      </li>
      <li>
        <strong>Friday @ 5 or 6PM:</strong> Dinner is served (dinner not served
        on Saturday).
      </li>
    </ul>
  </SectionWrapper>
);

export default ScheduleSection;
