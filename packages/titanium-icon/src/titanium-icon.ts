import { customElement, html, LitElement, property } from 'lit-element';
import { styles } from '@material/mwc-icon/mwc-icon-host.css';

/**
 * Titanium icon
 *
 * @element titanium-icon
 * @example
 * <mwc-list-item graphic="avatar" value=${o.Id ?? ''}>
 *   <titanium-icon category slot="graphic" icon="category"></titanium-icon>
 *   <span>${o.Name}</span>
 * </mwc-list-item>`
 */
@customElement('titanium-icon')
export class TitaniumIconElement extends LitElement {
  /**
   *  Icon that will be displayed. Select from the list of Google material icons.
   */
  @property({ type: String }) icon: string = '';

  static styles = styles;

  render = () => html`${this.icon}`;
}
