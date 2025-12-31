import { css } from 'lit';

export const myAppStyles = css`
  :host {
    display: grid;
    grid:
      'toolbar toolbar' 64px
      'menu content' auto / 300px 1fr;

    transition: 250ms;

    --mdc-icon-font: 'Material Symbols Outlined';
  }

  :host([main-menu-position='drawer']) {
    grid:
      'toolbar toolbar' 64px
      'menu content' auto / 0 1fr;

    titanium-toolbar {
      grid: 'main-menu-button logo search-input page-actions' / auto auto 1fr auto;
      padding: 0 12px 0 6px;
      page-actions {
        display: none;
      }
    }

    titanium-drawer[main-menu] {
      --titanium-drawer-width: 310px;
      width: initial;
      header {
        display: flex;
      }
    }
  }

  /* safari does not like nested selectors on host */
  :host([main-menu-position='slim']) titanium-drawer[main-menu] {
    --titanium-drawer-width: 80px;

    md-list-item {
      width: 44px;
      --md-list-item-leading-space: 10px;
      margin: 1px 0 1px 17px;
    }

    md-list-item[sub] {
      width: 32px;
      --md-list-item-leading-space: 7px;
      margin: 1px 0 1px 22px;

      span {
        visibility: hidden;
      }
    }

    a[slot='footer'] {
      display: none;
    }

    h4[sub] {
      padding: 0 12px 2px 29px;
      span {
        display: none;
      }
    }

    h4:not([sub]) {
      height: 1px;
      font-size: 0;
      line-height: 0;
      margin: 17px 24px;
      min-height: 0;
      padding: 0;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
    }
  }

  :host([main-menu-position='slim']) {
    grid:
      'toolbar toolbar' 64px
      'menu content' auto / 80px 1fr;

    titanium-toolbar {
      grid: 'main-menu-button logo search-input page-actions' / 80px auto 1fr auto;
    }
  }

  main-content {
    display: grid;
    grid-area: content;

    container-type: inline-size;
    container-name: main-content;
  }

  titanium-drawer[main-menu] {
    grid-area: menu;

    --titanium-drawer-background-color: var(--app-background-color);
    --titanium-drawer-full-height-padding: 64px;

    header {
      display: none;
      justify-content: space-between;
      align-items: center;
      margin: 8px 8px 8px 12px;
    }

    md-list-item {
      border-radius: 24px;
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
      margin: 1px 8px 1px 11px;

      /*use interpolate-size or https://developer.mozilla.org/en-US/docs/Web/CSS/calc-size when available in all browsers*/
      width: 281px;
      transition: width 150ms linear;

      span {
        white-space: nowrap;
      }
    }

    md-list-item[sub] {
      --md-list-item-leading-space: 28px;
      --md-list-item-one-line-container-height: 20px;
      --md-list-item-top-space: 4px;
      --md-list-item-bottom-space: 4px;
      --md-icon-size: 18px;
    }

    md-list-item[selected] {
      background-color: var(--md-sys-color-secondary-container);
    }

    menu-divider {
      display: block;
      border-top: 1px solid var(--md-sys-color-outline-variant);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin: 12px 8px 0 8px;
      padding-bottom: 12px;
    }

    menu-divider + h4 {
      padding-top: 8px;
    }

    p {
      margin-bottom: 12px;
      margin-left: 24px;
    }

    h4[menu-category] {
      font-family: Metropolis;
      font-size: 14px;
      font-weight: 400;
      padding: 12px 16px 0px 24px;
      opacity: 0.6;
    }

    h4[sub] {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 12px 2px 35px;
      opacity: 0.8;
      --md-icon-size: 16px;
    }
  }

  titanium-toolbar {
    grid-area: toolbar;
    background-color: var(--app-background-color);
    display: grid;
    grid: 'main-menu-button logo search-input page-actions' / auto 240px 1fr auto;
    align-items: center;
    height: 64px;
    z-index: 6;
    padding: 0 24px 0 12px;

    leavitt-app-logo {
      grid-area: logo;
      margin-right: 6px;
    }

    md-icon-button[hamburger] {
      grid-area: main-menu-button;
      margin: 0 4px 0 8px;
    }

    md-circular-progress[root-loading] {
      grid-area: main-menu-button;
      --md-circular-progress-size: 36px;
      --md-circular-progress-active-indicator-width: 15;
      margin: 0 6px 0 10px;
    }

    titanium-filled-search-input {
      grid-area: search-input;
    }

    h3[main-title] {
      text-align: center;
    }
  }

  page-actions {
    grid-area: page-actions;
    justify-self: end;
    display: flex;
    gap: 12px;
    align-items: center;
    margin-left: 12px;
  }

  [hidden] {
    display: none !important;
  }
`;
