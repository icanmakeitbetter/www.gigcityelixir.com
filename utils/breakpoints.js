export const points = {
  medium: "42rem",
  maxWidth: "63rem",
  large: "63rem"
};

export function breakpoint(size) {
  return `@media screen and (min-width: ${points[size]})`;
}
