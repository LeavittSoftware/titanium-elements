import { css } from 'lit';

const StoryStyles = css`
  titanium-card {
    margin-bottom: 36px;
  }

  h1 {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 24px;
    font-size: 13px;
  }

  api-docs {
    max-width: inherit;
    margin-bottom: 48px;
    margin-top: 48px;
    background-color: var(--md-sys-color-background);
    border: 1px solid var(--md-sys-color-outline);
    --ave-primary-color: var(--md-sys-color-primary);
    --ave-header-color: #f5f5f5;
    --ave-accent-color: var(--md-sys-color-primary);
    --ave-secondary-color: var(--md-sys-color-primary);
    --ave-item-color: var(--md-sys-color-on-background);
    --ave-monospace-font: 'Fira Code', monospace;
    --ave-tab-color: var(--md-sys-color-on-background);
    --ave-tab-selected-color: var(--md-sys-color-primary);
    --ave-header-color: var(--md-sys-color-on-background);
    --ave-header-background: var(--md-sys-color-surface-variant);
    font-family: 'Roboto';
    color: inherit;
  }

  api-docs::part(select-label) {
    display: none;
  }

  api-docs::part(docs-value) {
    color: var(--md-sys-color-on-background);
    font-size: 13px;
    background: var(--md-sys-color-background);
    border: 1px solid var(--md-sys-color-outline);
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
    color: var(--md-sys-color-on-background);
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
    color: var(--md-sys-color-on-background);
    letter-spacing: 0.2px;
    line-height: 20px;
    margin: 0px;
    padding: 12px 0;
  }

  api-docs::part(header-title) {
    font-size: 16px;
  }
`;
export default StoryStyles;
