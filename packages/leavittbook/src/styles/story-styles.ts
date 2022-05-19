import { css } from 'lit';

const StoryStyles = css`
  :host {
    --playground-tab-bar-indicator-color: #212121;
    --playground-bar-height: 48px;
    --playground-highlight-color: #fff;
    --playground-tab-bar-foreground-color: #fff;
    --playground-tab-bar-background: var(--app-accent-color-blue);
  }

  titanium-card {
    margin-bottom: 36px;
  }

  playground-ide {
    height: 650px;
    --playground-preview-width: 60%;
  }

  h1 {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 24px;
    font-size: 13px;
    color: var(--app-light-text-color);
  }

  api-docs {
    max-width: inherit;
    margin-bottom: 48px;
    margin-top: 48px;
    --ave-primary-color: var(--app-secondary-color);
    --ave-header-color: #f5f5f5;
    --ave-accent-color: var(--app-accent-color-red);
    --ave-monospace-font: 'Fira Code', monospace;
    font-family: 'Roboto';
  }

  api-docs::part(select-label) {
    display: none;
  }

  api-docs::part(docs-value) {
    color: var(--app-light-text-color);
    font-size: 13px;
    background: #f9f9f9;
    border: 1px solid var(--app-border-color);
    border-radius: 8px;
    padding: 2px 8px;
    margin: 12px 0;
    min-height: 24px;
  }

  api-docs::part(docs-item) {
    padding: 24px 12px;
  }

  api-docs::part(docs-label) {
    letter-spacing: 0.07272727em;
    font-size: 11px;
    font-weight: 500;
    line-height: 13px;
    text-transform: uppercase;
    hyphens: auto;
    word-break: break-word;
    word-wrap: break-word;
    color: #5f6368;
    color: var(--app-text-color, #5f6368);
    margin: 0;
    padding: 0;
  }

  api-docs::part(docs-description) {
    padding: 12px;
  }

  api-docs::part(md-p) {
    -webkit-font-smoothing: antialiased;
    font-size: 13px;
    font-weight: 400;
    color: var(--app-text-color, #5f6368);
    letter-spacing: 0.2px;
    line-height: 20px;
    margin: 0px;
    padding: 12px 0;
  }
`;
export default StoryStyles;
