import { css } from 'lit';

const StoryStyles = css`
  leavitt-app-width-limiter > md-divider {
    margin-bottom: 48px;
  }

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
    background-color: var(--md-sys-color-surface-container-low);
    border: none;
    --ave-primary-color: var(--md-sys-color-primary);
    --ave-accent-color: var(--md-sys-color-primary);
    --ave-secondary-color: var(--md-sys-color-primary);
    --ave-item-color: var(--md-sys-color-on-surface);
    --ave-monospace-font: 'Fira Code', monospace;
    --ave-tab-color: var(--md-sys-color-on-surface);
    --ave-tab-selected-color: var(--md-sys-color-primary);
    --ave-header-color: var(--md-sys-color-on-surface);
    --ave-header-background: var(--md-sys-color-surface-variant);
    --ave-tab-indicator-size: 6px;
    font-family: 'Roboto';
    color: inherit;
  }

  api-docs::part(select-label) {
    display: none;
  }

  api-docs::part(docs-value) {
    font-family: var(--titanium-styles-p-font-family, Roboto, Noto, sans-serif);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;
    line-height: 20px;
    color: var(--md-sys-color-on-surface);
    background: var(--md-sys-color-surface-container-high);
    border: none;
    border-radius: 12px;
    padding: 4px 12px;
    margin: 8px 0;
    min-height: 24px;
  }

  api-docs::part(docs-item) {
    padding: 24px 12px;
  }

  api-docs::part(docs-label) {
    font-family: var(--titanium-styles-h2-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    font-size: 13px;
    line-height: 17px;
    font-weight: 700;
    letter-spacing: 0.6px;
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
    font-family: var(--titanium-styles-p-font-family, Roboto, Noto, sans-serif);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;
    line-height: 20px;
  }

  api-docs::part(header-title) {
    font-size: 15px;
  }

  deprecation-notice {
    background: var(--md-sys-color-surface-container);
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 24px;
    display: flex;
    place-items: center;

    p {
      opacity: 0.8;
      font-size: 13px;
      margin: 0;
    }

    md-icon {
      --md-icon-size: 16px;
      margin-right: 6px;
      color: var(--app-accent-color-orange);
    }

    kbd {
      background: var(--md-sys-color-surface-container-highest);
      padding: 2px 4px;
      border-radius: 28px;
      font-size: 11px;
      font-weight: 600;
      color: var(--md-sys-color-on-surface);
    }
  }
`;
export default StoryStyles;
