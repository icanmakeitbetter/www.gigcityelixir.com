import { css } from "@emotion/core";
import { typography } from "../utils/typography";
import { colors, hues } from "../utils/constants";

const Picture = ({
  imgSrc,
  altText,
  caption,
  photographer,
  photographerLink
}) => (
  <figure
    css={css`
      border-radius: 3px;
      margin-bottom: ${typography.rhythm(2)};
      overflow: hidden;
      box-shadow: 0 0 0 2px white, 0 0 0 3px ${colors.plum};
    `}
  >
    <img
      src={imgSrc}
      alt={altText + " by " + photographer}
      css={css`
        display: block;
        margin-bottom: 0;
      `}
    />
    <figcaption
      css={css`
        padding: ${typography.rhythm(1 / 2)} ${typography.rhythm(1)};
      `}
    >
      {caption}
      <span
        css={css`
          display: block;
          margin-left: 2rem;
          margin-top: 5px;
          font-style: italic;
          font-size: 16px;
          font-weight: 500;
        `}
      >
        Photo by{" "}
        {photographerLink ? (
          <a target="_blank" href={photographerLink}>
            {photographer}
          </a>
        ) : (
          photographer
        )}
      </span>
    </figcaption>
  </figure>
);

export default Picture;
