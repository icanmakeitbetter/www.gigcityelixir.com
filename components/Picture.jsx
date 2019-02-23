import { css } from "@emotion/core";

const Picture = ({
  imgSrc,
  altText,
  caption,
  photographer,
  photographerLink
}) => (
  <figure
    css={css`
      border-bottom: 1px solid;
      padding-bottom: 5px;
      margin-bottom: 3rem;
    `}
  >
    <img
      src={imgSrc}
      alt={altText + " by " + photographer}
      css={css`
        margin-bottom: 0;
      `}
    />
    <figcaption>
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
