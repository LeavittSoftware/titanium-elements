import { css } from 'lit';

const DesktopMenuStyles = css`
  desktop-menu details {
    user-select: none;
  }
  desktop-menu summary {
    padding-left: 24px;
    font-size: 13px;
    padding: 2px 28px;
    border-radius: 0px 50px 50px 0px;
    cursor: pointer;
    color: var(--app-text-color);
    font-weight: 500;
  }
  desktop-menu summary::marker {
    margin-right: 12px;
  }

  desktop-menu summary:hover {
    background: var(--app-hover-color);
  }
  desktop-menu a {
    display: flex;
    text-decoration: none;
    color: var(--app-light-text-color);
    font-size: 13px;
    align-items: center;
    gap: 6px;
    padding: 2px 24px;
    border-radius: 0px 50px 50px 0px;
  }
  desktop-menu a mwc-icon {
    --mdc-icon-size: 16px;
  }
  desktop-menu a:hover {
    background-color: var(--app-hover-color);
    transition: 0.3s ease;
  }
  desktop-menu a[selected] {
    background-color: #e8f0fe;
    fill: #1967d2;
    color: #1967d2;
  }
`;
export default DesktopMenuStyles;
