import { css } from 'lit';

export const myAppStyles = css`
  :host {
    display: grid;
    grid:
      'toolbar toolbar' 48px
      'menu content' auto / 300px 1fr;
    transition: 250ms;
    --app-accent-color-orange: #f8ad03;
    --app-accent-color-red: #dc3327;
    --app-accent-color-blue: #4285f4;
    --app-accent-color-light-blue: #0288d1;
    --app-accent-color-teal: #00796b;
    --app-accent-color-indigo: #303f9f;
    --app-accent-color-green: #34a853;

    --mdc-icon-font: 'Material Symbols Outlined';
  }

  /* Menu */

  md-list-item {
    border-radius: 24px;
    margin-left: 4px;
    --md-list-item-label-text-font: Metropolis;
    --md-list-item-label-text-size: 13px;
    --md-list-item-label-text-weight: 500;
    --md-list-item-one-line-container-height: 44px;
    --md-list-item-top-space: 10px;
    --md-list-item-bottom-space: 10px;
    --md-focus-ring-shape-end-end: 24px;
    --md-focus-ring-shape-start-end: 24px;
    --md-focus-ring-shape-end-start: 24px;
    --md-focus-ring-shape-start-start: 24px;
    letter-spacing: 0.35px;
  }

  md-list-item[sub] {
    margin-left: 62px;
    --md-list-item-one-line-container-height: 20px;
    --md-list-item-top-space: 4px;
    --md-list-item-bottom-space: 4px;
  }

  md-list-item[selected] {
    background-color: var(--md-sys-color-secondary-container);
  }

  menu-divider {
    display: block;
    border-top: 1px solid var(--md-sys-color-outline-variant);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 8px;
    padding-bottom: 8px;
  }

  menu-divider[sub] {
    margin: 8px 24px 0 24px;
  }

  md-icon-button[themePref] {
    margin: 24px 12px;
  }

  /* Menu end */

  :host([collapse-main-menu]) {
    grid:
      'toolbar toolbar' 48px
      'menu content' auto / 0 1fr;
  }

  titanium-toolbar {
    grid-area: toolbar;
    display: grid;
    grid: 'main-menu-button logo profile' / auto auto 1fr;
    align-items: center;
    gap: 6px;
    height: 48px;
  }

  titanium-toolbar mwc-icon-button[hamburger] {
    grid-area: main-menu-button;
    width: 48px;
    margin: 0 0 0 -12px;
  }

  titanium-toolbar h3[main-title] {
    text-align: center;
  }

  titanium-error-page {
    margin-top: 24px;
  }

  right-panel {
    grid-area: profile;
    justify-self: end;
    display: flex;
    gap: 12px;
    align-items: center;
  }

  right-panel md-outlined-icon-button {
    height: 36px;
    width: 36px;
    margin: 0 !important;
  }

  right-panel md-outlined-icon-button md-icon {
    height: 20px;
    width: 20px;
    font-size: 20px;
  }

  titanium-toolbar a {
    height: 26px;
    width: 148px;
  }

  main-content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin: 24px 48px;
  }

  main-content > * {
    max-width: 850px;
    width: 100%;
  }

  main-content [med] {
    width: 100%;
    max-width: 1000px;
  }

  main-content [large] {
    width: 100%;
    max-width: 1200px;
  }

  main-content [xl] {
    width: 100%;
    max-width: 1700px;
  }

  titanium-drawer {
    grid-area: menu;
  }

  titanium-drawer a[logo] {
    height: 26px;
    width: 148px;
    margin: 8px 14px 0px;
  }

  titanium-drawer h3 {
    padding-bottom: 0;
  }

  titanium-drawer p {
    margin-bottom: 12px;
    margin-left: 24px;
  }

  titanium-full-page-loading-indicator {
    z-index: 8;
  }

  h4[bread-crumb] {
    font-weight: 300;
    font-size: 14px;
    padding: 0;
    margin: 0 0 12px 0;
  }

  h4 a:visited,
  h4 a {
    color: var(--app-text-color);
    text-decoration: none;
  }

  h4 a:hover {
    text-decoration: underline;
  }

  @media (min-width: 920px) {
    h4[bread-crumb],
    titanium-toolbar h3[main-title] {
      display: none;
    }

    titanium-drawer a[logo] {
      display: none;
    }
  }

  @media (max-width: 920px) {
    :host {
      grid:
        'toolbar' 56px
        'content' auto / 1fr;
    }

    titanium-toolbar {
      grid: 'main-menu-button title profile' / auto 1fr auto;
    }

    h4[bread-crumb] {
      margin: 0 0 24px 0;
    }

    main-content {
      margin: 4px 16px;
    }

    titanium-toolbar a[logo] {
      display: none;
    }
  }

  [hidden] {
    display: none !important;
  }
`;
