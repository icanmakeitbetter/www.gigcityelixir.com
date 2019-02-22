const breakpoints = {
  medium: "42rem",
  large: "84rem"
};

export function breakpoint(size, children) {
  return `@media screen and (min-width: ${breakpoints[size]}) {
    ${children};
  }`;
}
