import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@material/web/icon/icon';

import { getIcon } from './helpers/file-types';
import { getCdnInlineUrl } from '../../titanium/helpers/get-cdn-Inline-url';

import { Attachment } from '@leavittsoftware/lg-core-typescript/lg.net.core';

@customElement('leavitt-file-explorer-image')
export class FileExplorerImage extends LitElement {
  @property({ type: String, reflect: true }) shape: 'circle' | 'rounded';
  @property({ type: Object }) attachment: Partial<Attachment>;

  static styles = css`
    :host {
      user-select: none;
      display: flex;
      justify-content: center;
      background-color: #fdfcff;
      border-radius: 16px 16px 0 0;
    }

    img {
      border-radius: 16px 16px 0 0;

      object-fit: cover;
      object-position: 0 0;
      width: 100%;
      max-height: 100%;
    }

    md-icon {
      height: 64px;
      width: 64px;
      font-size: 64px;
      user-select: none;
      place-self: center;
      color: var(--md-sys-color-surface-variant);
    }
  `;

  render() {
    return html`
      ${this.attachment?.PreviewSizes?.includes('512')
        ? html`<img draggable="false" loading="lazy" src=${ifDefined(getCdnInlineUrl(this.attachment, 512))} />`
        : html` <md-icon>${getIcon(this.attachment?.Extension ?? '')}</md-icon>`}
    `;
  }
}
