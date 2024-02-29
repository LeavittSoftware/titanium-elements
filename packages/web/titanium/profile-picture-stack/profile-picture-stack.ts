import { Person } from '@leavittsoftware/lg-core-typescript';
import { css, html, LitElement, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '@material/web/icon/icon';
import { isDevelopment } from '../helpers/is-development';

/**
 * A smart profile picture stack component
 *
 * @element titanium-profile-picture-stack
 *
 */

@customElement('titanium-profile-picture-stack')
export class TitaniumProfilePictureStack extends LitElement {
  /**
   * Array of people to display in a stack
   */
  @property({ type: Array }) accessor people: Array<Partial<Person | null | undefined>>;

  /**
   * Number to define the max number of people to display in a stack
   */
  @property({ type: Number }) accessor max: number = 5;

  /**
   * Number to define the max number of people to display in a stack
   */
  @property({ type: Boolean, attribute: 'enable-directory-href' }) accessor enableDirectoryHref: boolean = false;

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: row;
        position: relative;
        align-self: start;
      }

      profile-picture {
        transition: all 0.2s ease-in-out;
        transform-origin: bottom;
        background-color: var(--titanium-profile-picture-stack-bg-color, var(--md-sys-color-surface));
        border-radius: 50%;
        border: 2px solid transparent;
      }

      profile-picture:not(:first-child) {
        margin-left: -10px;
      }

      profile-picture:hover {
        transform: scale(var(--titanium-profile-picture-stack-transform-scale, 1.3));
        position: relative;
        z-index: 1;
      }

      md-icon {
        font-size: 12px;
        height: 7px;
        margin-top: 25px;
        margin-left: -4px;
      }

      :host([enable-directory-href]) profile-picture {
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
      ${this.people.slice(0, this.max).map(
        (o) =>
          html` <profile-picture
            @click=${() => {
              if (this.enableDirectoryHref && o?.Id) {
                window.open(`https://${isDevelopment ? 'dev' : ''}directory.leavitt.com/profile/${o?.Id}`, '_blank');
              }
            }}
            title=${o?.FullName ?? ''}
            size="30"
            slot="icon"
            .fileName=${o?.ProfilePictureCdnFileName ?? null}
          ></profile-picture>`
      )}
      ${this.people.length > this.max ? html`<md-icon title="Shared with ${this.people.length} total users">more_horiz</md-icon>` : nothing}
    `;
  }
}
