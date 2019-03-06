import '@leavittsoftware/titanium-elements/lib/titanium-table-header';
import {css, customElement, html, LitElement, property} from 'lit-element';


// This decorator defines the element.
@customElement('titanium-table-header-demo')
export class TitaniumTableHeaderDemo extends LitElement {
  @property() sortBy: string;
  @property() sortDirection: string;

  static styles = css`
  :host {
    
  }

  header{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #dadce0;
    border-top: 1px solid #dadce0;
  }
`;

  render() {
    return html
    `<header >
        <titanium-table-header column-name="name" title="Name" @sort-by-changed=${
        (e: CustomEvent) => this.sortBy =
            e.detail} .sortBy="${this.sortBy}" @sort-direction-changed=${
        (e: CustomEvent) => this.sortDirection = e.detail} .sortDirection="${
        this.sortDirection}" large></titanium-table-header>
       
        <titanium-table-header column-name="title" title="Title" @sort-by-changed=${
        (e: CustomEvent) => this.sortBy =
            e.detail} .sortBy="${this.sortBy}"  @sort-direction-changed=${
        (e: CustomEvent) => this.sortDirection = e.detail} .sortDirection="${
        this.sortDirection}"  ></titanium-table-header>

        <titanium-table-header no-sort title="Address"></titanium-table-header>
     </header>
     <p></p>
     <p></p>
     <p>sort by: ${this.sortBy}</p>
     <p>sort direction: ${this.sortDirection}</p>
     `;
  }
}
