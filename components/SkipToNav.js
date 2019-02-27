import { css } from "@emotion/core";

let id = "skip-to-nav";

function SkipToNavLink({ children = "Skip to nav", ...props }) {
  return (
    <a
      {...props}
      href={`#${id}`}
      css={css`
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        position: absolute;

        :focus {
          padding: 1rem;
          position: fixed;
          top: 10px;
          left: 10px;
          background: white;
          z-index: 1;
          width: auto;
          height: auto;
          clip: auto;
        }
      `}
    >
      {children}
    </a>
  );
}

let SkipToNavContent = props => <div {...props} id={id} />;

export { SkipToNavLink, SkipToNavContent };
