import { css } from 'lit';

export const inputStyles = css`
  md-switch {
    --md-switch-track-height: 28px;
  }

  md-checkbox::part(focus-ring) {
    height: 32px;
    width: 32px;
  }

  md-menu {
    --md-menu-container-shape: 16px;
  }

  md-filled-select {
    --md-filled-select-text-field-container-shape: 16px;
    --md-filled-select-text-field-active-indicator-height: 0;
    --md-filled-select-text-field-error-active-indicator-height: 0;
    --md-filled-select-text-field-hover-active-indicator-height: 0;
    --md-filled-select-text-field-focus-active-indicator-height: 0;
    --md-filled-select-text-field-disabled-active-indicator-height: 0;
  }

  md-filled-text-field {
    --md-filled-text-field-container-shape: 16px;

    --md-filled-text-field-active-indicator-height: 0;
    --md-filled-text-field-error-active-indicator-height: 0;
    --md-filled-text-field-hover-active-indicator-height: 0;
    --md-filled-text-field-focus-active-indicator-height: 0;
    --md-filled-text-field-disabled-active-indicator-height: 0;
  }
`;
