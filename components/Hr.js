import styled from "@emotion/styled";
import { breakpoint, points } from "../utils/breakpoints";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";

const Hr = styled.hr`
  border: 0;
  border-top: 2px solid ${colors.plum};
  margin: ${typography.rhythm(1)} ${typography.rhythm(1)} 0;
  @supports (display: grid) {
    ${breakpoint("medium")} {
      max-width: ${points.maxWidth};
      margin: ${typography.rhythm(1)} auto 0;
    }
  }
`;

export default Hr;
