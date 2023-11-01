import { css } from 'lit';

export const formStyles = css`
  form,
  input-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 16px 43px;
  }

  input-container mwc-datefield:not([validationMessage]),
  form:not([no-required]) mwc-datefield:not([validationMessage]),
  form:not([no-required]) mwc-select:not([validationMessage]),
  input-container mwc-select:not([validationMessage]),
  form:not([no-required]) mwc-formfield,
  input-container mwc-formfield,
  form:not([no-required]) mwc-textfield:not([validationMessage]),
  input-container mwc-textfield:not([validationMessage]),
  form:not([no-required]) mwc-textarea[outlined]:not([validationMessage]) {
    margin-bottom: 19px;
  }

  form connected-status-select,
  form titanium-image-input,
  form google-address-input[outlined],
  form mwc-datefield[outlined],
  form mwc-select[outlined],
  form mwc-textfield[outlined],
  form mwc-textarea[outlined] {
    margin-top: 12px;
  }

  form [fullwidth],
  input-container [fullwidth],
  mwc-textarea {
    grid-column: 1 / -1;
  }

  mwc-switch {
    --mdc-switch-selected-track-color: #e8f0fe;
    --mdc-switch-selected-hover-track-color: #e8f0fe;
    --mdc-switch-selected-focus-track-color: #e8f0fe;
    --mdc-switch-selected-hover-handle-color: var(--app-primary-color);
    --mdc-switch-selected-focus-handle-color: var(--app-primary-color);
  }

  @media (max-width: 786px) {
    form,
    input-container {
      grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
      grid-gap: 8px 24px;
    }
  }
`;
