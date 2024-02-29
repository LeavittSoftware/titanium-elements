import { Person } from '@leavittsoftware/lg-core-typescript';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { isDevelopment } from '../helpers/is-development';

import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '@material/web/icon/icon';

/**
 * A smart profile picture stack component
 *
 * @element titanium-profile-picture-stack
 *
 */

@customElement('titanium-profile-picture-stack')
export class TitaniumProfilePictureStack extends LitElement {
  /**
   * Array of people to display in a stack.
   */
  @property({ type: Array }) accessor people: Array<Partial<Person | null | undefined>>;

  /**
   * Number to define the max number of people to display in a stack.
   */
  @property({ type: Number }) accessor max: number = 5;

  /**
   * Enable a link to directory for each person visible in the stack.
   * This will open a new tab to the directory profile of the person.
   * This will only work if the person has an Id.
   */
  @property({ type: Boolean, attribute: 'enable-directory-href' }) accessor enableDirectoryHref: boolean = false;

  /**
   * Enable auto resizing of the profile picture stack. Setting this will supersede the max property.
   */
  @property({ type: Boolean, attribute: 'auto-resize' }) accessor autoResize: boolean = false;

  /**
   * Size of the profile picture.
   */
  @property({ type: Number }) accessor size: number = 30;

  /**
   * Used internally by the resize observer to keep track of the max number of people to display in a stack.
   * @ignore
   */
  @state() autoMax: number = 0;

  #resizeObserver: ResizeObserver;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('autoResize')) {
      if (this.autoResize) {
        this.#setUpResizeObserver();
      } else {
        this.#resizeObserver?.disconnect?.();
      }
    }
  }

  #setUpResizeObserver() {
    this.#resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const inlineSize = entry.contentBoxSize[0].inlineSize;
          this.autoMax = Math.floor(inlineSize / this.size);
        }
      }
    });

    this.#resizeObserver.observe(this);
  }

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
    const max = this.autoResize ? this.autoMax : this.max;
    return html`
      ${this.people?.slice(0, max)?.map(
        (o) =>
          html` <profile-picture
            @click=${() => {
              if (this.enableDirectoryHref && o?.Id) {
                window.open(`https://${isDevelopment ? 'dev' : ''}directory.leavitt.com/profile/${o?.Id}`, '_blank');
              }
            }}
            title=${o?.FullName ?? ''}
            size="${this.size}"
            slot="icon"
            .fileName=${o?.ProfilePictureCdnFileName ?? null}
          ></profile-picture>`
      )}
      ${this.people?.length > max ? html`<md-icon title="Shared with ${this.people.length} total users">more_horiz</md-icon>` : nothing}
    `;
  }
}
