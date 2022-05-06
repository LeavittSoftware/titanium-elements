import { css } from 'lit';

export const myAppStyles = css`
  :host {
    --app-primary-color: var(--app-link-color);
    --app-secondary-color: #4285f4;
    --app-text-color: #5f6368;
    --app-light-text-color: #707175;
    --app-dark-text-color: #202124;
    --app-hover-color: #f9f9f9;
    --app-border-color: #dadce0;
    --app-menu-text-color: #5f6368;
    --app-link-color: #1a73e8;
    --material-primary-color: var(--app-secondary-color);
    --material-primary-text-color: var(--app-link-color);
    --material-error-text-color: #da3227;
    --app-accent-color-orange: #f8ad03;
    --app-accent-color-red: #dc3327;
    --app-accent-color-blue: #4285f4;
    --app-accent-color-light-blue: #0288d1;
    --app-accent-color-teal: #00796b;
    --app-accent-color-indigo: #303f9f;
    --app-accent-color-green: #34a853;
    --app-nav-color: #002d56;
    --mdc-theme-primary: var(--app-primary-color);
    --mdc-theme-secondary: var(--app-secondary-color);
    --mdc-text-field-outlined-idle-border-color: var(--app-border-color);
    --mdc-select-outlined-idle-border-color: var(--app-border-color);
    --mdc-icon-font: 'Material Icons Outlined';

    /* Dialog styles */
    --mdc-dialog-max-width: 450px;
    --mdc-typography-headline6-font-family: Metropolis, Roboto, Noto, sans-serif;
    --mdc-typography-headline6-font-weight: 400;
    --mdc-typography-headline6-font-size: 22px;
    --mdc-typography-headline6-line-height: 28px;
    --mdc-dialog-heading-ink-color: var(--app-dark-text-color, #202124);

    display: flex;
    flex-direction: column;
  }

  titanium-error-page {
    margin-top: 24px;
  }

  titanium-toolbar {
    display: flex;
    justify-content: space-between;
  }

  titanium-toolbar h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  titanium-toolbar a[logo],
  titanium-toolbar img {
    margin-right: 12px;
    height: 26px;
    /* Prevent shifting on load */
    min-width: 26px;
    cursor: pointer;
  }

  [main-title] {
    margin: 0px;
    font-weight: 400;
    padding: 0px 0px 8px 24px;
  }

  profile-picture-menu {
    margin: 0 8px 0 8px;
  }

  desktop-menu {
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 280px;
    padding-top: 48px;
    margin-top: 12px;
    max-height: calc(100vh - 68px);
  }

  desktop-menu section {
    overflow: auto;
  }

  h4 {
    font-family: 'Metropolis';
    font-weight: 400;
    cursor: pointer;
    margin: 0px;
    padding: 16px 24px 8px 24px;
  }

  :host(:not([isonline])) desktop-menu {
    padding-top: 96px;
  }

  toolbar-placeholder {
    display: block;
    padding-top: 48px;
  }

  :host(:not([isonline])) toolbar-placeholder {
    padding-top: 96px;
  }

  main-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 48px;
    padding-left: 280px;
  }

  width-limiter {
    display: flex;
    flex-direction: column;
    max-width: 1130px;
    width: 100%;
    margin: 0 auto;
  }

  width-limiter > * {
    max-width: 850px;
    width: 100%;
  }

  width-limiter[large] {
    max-width: 1480px;
  }

  width-limiter[large] > * {
    max-width: 1200px;
  }

  width-limiter[med] {
    max-width: 1280px;
  }

  width-limiter[med] > * {
    max-width: 1000px;
  }

  titanium-full-page-loading-indicator {
    z-index: 8;
  }

  menu-divider {
    display: block;
    border-top: 1px solid var(--app-border-color);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 8px;
    margin-top: 8px;
  }

  menu-divider[sub] {
    margin: 8px 24px 0 24px;
  }

  @media (max-width: 830px) {
    main-content {
      padding-left: 0;
      margin: 0 16px;
    }

    [main-title] {
      padding: 0 24px;
    }
  }

  [hidden] {
    display: none !important;
  }
`;
