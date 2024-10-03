import { Person } from '@leavittsoftware/lg-core-typescript';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { isDevelopment } from '../helpers/is-development';
import { p } from '../styles/p';
import { ellipsis } from '../styles/ellipsis';

import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';

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
   * Toggle to show the full name of the person if there is one result in the stack.
   */
  @property({ type: Boolean, attribute: 'show-full-name' }) accessor showFullName: boolean = false;

  /**
   * Enable auto resizing of the profile picture stack. Setting this will supersede the max property.
   */
  @property({ type: Boolean, attribute: 'auto-resize' }) accessor autoResize: boolean = false;

  /**
   * Size of the profile picture.
   */
  @property({ type: Number }) accessor size: number = 30;

  /**
   * Size of the overlap between profile pictures. (Default is 8)
   */
  @property({ type: Number }) accessor overlap: number = 8;

  /**
   * Used internally by the resize observer to keep track of the max number of people to display in a stack.
   * @ignore
   */
  @state() private accessor autoMax: number = 0;

  #resizeObserver: ResizeObserver;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('autoResize')) {
      if (this.autoResize) {
        this.#setUpResizeObserver();
      } else {
        this.#resizeObserver?.disconnect?.();
      }
    }

    if (changedProperties.has('overlap')) {
      this.style.setProperty('--profile-picture-stack-overlap', `${this.overlap}px`);
    }
  }

  #setUpResizeObserver() {
    this.#resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.autoMax = this.#calculateMaxElements(this.size, this.overlap, entry?.contentBoxSize?.[0]?.inlineSize || 0);
      }
    });

    this.#resizeObserver.observe(this);
  }

  #calculateMaxElements(elementWidth: number, overlap: number, totalWidth: number) {
    if (totalWidth < elementWidth) {
      return 0; // If total width is smaller than one element
    }
    return Math.floor((totalWidth - elementWidth) / (elementWidth - overlap));
  }

  static styles = [
    p,
    ellipsis,
    css`
      :host {
        display: flex;
        padding-left: var(--profile-picture-stack-overlap, 10px);
        flex-direction: row-reverse;
        justify-content: flex-end;
      }

      profile-picture {
        box-sizing: border-box;
        transition: all 0.25s ease-in-out;
        transform-origin: bottom;
        background-color: var(--titanium-profile-picture-stack-bg-color, var(--md-sys-color-surface));
        border-radius: 50%;
        border: 2px solid transparent;
      }

      profile-picture:hover {
        transform: translateY(-5px);
        z-index: 1;
      }

      p[full-name] {
        align-self: center;
        margin-left: 6px;
      }

      additional-users {
        display: grid;
        box-sizing: border-box;
        transition: all 0.25s ease-in-out;
        border-radius: 50%;
        background: var(--md-sys-color-surface-container);
        place-items: center;
        border: 2px solid transparent;
        cursor: default;
      }

      additional-users p {
        font-weight: 500;
        font-size: 13px;
        max-width: 75%;
      }

      additional-users:hover {
        transform: translateY(-5px);
        z-index: 1;
      }

      :host([enable-directory-href]) profile-picture {
        cursor: pointer;
      }
    `,
  ];

  render() {
    const max = this.autoResize ? this.autoMax : this.max;
    return html`
      ${this.people?.length > max
        ? html`<additional-users
            style="width:${this.size}px;height:${this.size}px;margin-left:-${this.overlap}px"
            part="additional-users"
            title="${(this.people?.length || 0) - max} more"
          >
            <p part="additional-users-paragraph">+${(this.people?.length || 0) - max}</p>
          </additional-users>`
        : nothing}
      ${this.people
        ?.slice(0, max)
        ?.reverse()
        ?.map(
          (o) => html`
            ${this.people?.length === 1 && this.showFullName ? html`<p part="name" ellipsis full-name>${o?.FullName ?? ''}</p>` : nothing}
            <profile-picture
              @click=${() => {
                if (this.enableDirectoryHref && o?.Id) {
                  window.open(`https://${isDevelopment ? 'dev' : ''}directory.leavitt.com/profile/${o?.Id}`, '_blank');
                }
              }}
              title=${o?.FullName ?? ''}
              size=${this.size}
              style="margin-left:-${this.overlap}px;"
              .fileName=${o?.ProfilePictureCdnFileName ?? null}
              part="profile-picture"
            ></profile-picture>
          `
        )}
    `;
  }
}
