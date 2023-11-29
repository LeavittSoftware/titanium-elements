import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@material/mwc-icon';

import { Attachment } from '@leavittsoftware/lg-core-typescript/lg.net.core';
import { getCdnInlineUrl } from '@leavittsoftware/titanium-helpers/lib/leavitt-cdn';
import { getIcon } from './file-types';

@customElement('leavitt-file-explorer-image')
export class LeavittFileExplorerImageElement extends LitElement {
  @property({ type: String, reflect: true }) shape: 'circle' | 'rounded';
  @property({ type: Object }) attachment: Partial<Attachment>;

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      background: #fff;
    }

    img {
      object-fit: cover;
      object-position: 0 0;
      width: 100%;
      max-height: 100%;
    }

    :host([shape='rounded']) img {
      border-radius: 12px;
    }

    :host([shape='rounded']) {
      background-color: var(--app-hover-color);
      border-radius: 12px;
    }

    :host([shape='circle']) img {
      border-radius: 50%;
    }

    :host([shape='circle']) {
      background-color: var(--app-hover-color);
      border-radius: 50%;
    }

    mwc-icon {
      height: 75%;
      width: 75%;
      user-select: none;
      --mdc-icon-size: calc(3vw + 3vh);
      color: var(--app-text-color, #5f6368);
      text-align: center;
      align-self: center;
    }

    span {
      padding: 24px;
      color: var(--app-light-text-color, #80868b);
    }
  `;

  render() {
    return html`
      ${this.attachment?.PreviewSizes?.includes('512')
        ? html`<img draggable="false" loading="lazy" src=${ifDefined(getCdnInlineUrl(this.attachment, 512))} />`
        : html` <mwc-icon>${getIcon(this.attachment?.Extension ?? '')}</mwc-icon>`}
    `;
  }
}
