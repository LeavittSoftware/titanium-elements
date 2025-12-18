import { css } from 'lit';

export const niceBadgeStyles = css`
  nice-badge {
    box-sizing: border-box;

    background-color: var(--md-sys-color-error);
    color: var(--md-sys-color-on-error);

    display: grid;
    place-content: center;
    border-radius: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;

    font-family: Metropolis;

    padding: 1px 4px;
    border: 1px solid transparent;
    min-width: 8px;
    min-height: 8px;

    height: initial;
    width: initial;
  }

  nice-badge[primary] {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
  }

  nice-badge[secondary] {
    background-color: var(--md-sys-color-secondary);
    color: var(--md-sys-color-on-secondary);
  }

  nice-badge[green] {
    background-color: var(--app-accent-color-green-light);
    color: var(--app-accent-color-on-green-light);
  }

  nice-badge[compact] {
    padding: 1px 2px;

    font-size: 12px;
    line-height: 12px;
  }
`;
