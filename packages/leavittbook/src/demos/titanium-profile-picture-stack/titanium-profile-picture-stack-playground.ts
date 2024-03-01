/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { Person } from '@leavittsoftware/lg-core-typescript';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/profile-picture-stack/profile-picture-stack';
import '@leavittsoftware/web/titanium/card/card';

/* playground-fold */
@customElement('titanium-profile-picture-stack-playground')
export class TitaniumProfilePictureStackPlayground extends LitElement {
  @state() people: Array<Partial<Person>> = [
    { Id: 771130, FullName: 'Random Person', ProfilePictureCdnFileName: '' } as Person,
    { Id: 771130, FullName: 'Kasey Person', ProfilePictureCdnFileName: '_hNIx5g5YkhcC1BCH_-lJBOlMy5urO1kMrmHl-DEyn15qs9IOnAzxXnlV9ed' } as Person,
    { Id: 771130, FullName: 'Random Person', ProfilePictureCdnFileName: '' } as Person,
    { Id: 771130, FullName: 'Kasey Person', ProfilePictureCdnFileName: '_hNIx5g5YkhcC1BCH_-lJBOlMy5urO1kMrmHl-DEyn15qs9IOnAzxXnlV9ed' } as Person,
    { Id: 771130, FullName: 'Random Person', ProfilePictureCdnFileName: '' } as Person,
  ];

  @state() fiftyPeople: Array<Partial<Person>> = new Array(50).fill({
    Id: 771130,
    FullName: 'Kasey Person',
    ProfilePictureCdnFileName: '_hNIx5g5YkhcC1BCH_-lJBOlMy5urO1kMrmHl-DEyn15qs9IOnAzxXnlV9ed',
  });

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      titanium-profile-picture-stack {
        margin: 0 0 24px 0;
      }

      titanium-profile-picture-stack[size='50'] {
        --titanium-profile-picture-stack-transform-scale: 1.5;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <titanium-card>
        <h1>Default</h1>
        <titanium-profile-picture-stack .people=${this.people}></titanium-profile-picture-stack>

        <h1>Max of 3</h1>
        <titanium-profile-picture-stack max="3" .people=${this.people}></titanium-profile-picture-stack>

        <h1>Enable directory href</h1>
        <titanium-profile-picture-stack enable-directory-href .people=${this.people}></titanium-profile-picture-stack>

        <h1>Auto resize</h1>
        <titanium-profile-picture-stack auto-resize .people=${this.fiftyPeople}></titanium-profile-picture-stack>

        <h1>Auto resize - Large</h1>
        <titanium-profile-picture-stack auto-resize size="50" .people=${this.fiftyPeople}></titanium-profile-picture-stack>
      </titanium-card>
    `;
  }
}
