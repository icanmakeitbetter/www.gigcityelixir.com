export const points = {
  medium: "42rem",
  maxWidth: "63rem",
  large: "84rem"
};

export function breakpoint(size) {
  return `@media screen and (min-width: ${points[size]})`;
}
