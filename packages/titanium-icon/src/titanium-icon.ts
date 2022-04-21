import { customElement, html, LitElement, property } from 'lit-element';
import { styles } from '@material/mwc-icon/mwc-icon-host.css';

@customElement('titanium-icon')
export class TitaniumIconElement extends LitElement {
  @property({ type: String }) icon: string = '';

  static styles = styles;

  render = () => html`${this.icon}`;
}
