/* playground-fold */
import { css, html, LitElement, PropertyValueMap } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-switch';
import '@material/mwc-formfield';
import '@material/mwc-button';
import '@material/mwc-icon';

/* playground-fold-end */
import '@leavittsoftware/leavitt-elements/lib/mwc-datefield';
import { DateField } from '@leavittsoftware/leavitt-elements/lib/mwc-datefield';

/* playground-fold */
@customElement('mwc-datefield-playground')
export class DateFieldPlayground extends LitElement {
  @query('mwc-datefield[layout-demo]') private layoutInput!: DateField;
  @queryAll('mwc-datefield:not([layout-demo])') private inputs!: NodeListOf<DateField>;
  @state() private showLayoutInput: boolean = false;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 24px 12px;
        margin: 24px 0 36px 0;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  async firstUpdated() {
    //Fix MWC floating label problem
    requestAnimationFrame(() => {
      Array.from(this.inputs).forEach(async o => {
        o.layout();
      });
    });
  }

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Default date field styles</p>
      <div>
        <mwc-datefield></mwc-datefield>
        <mwc-datefield label="initial value" value="2022-05-10"></mwc-datefield>
        <mwc-datefield label="prefix" prefix="$$$"></mwc-datefield>
        <mwc-datefield label="suffix" suffix="MST"></mwc-datefield>
        <mwc-datefield label="icon" icon="schedule"></mwc-datefield>
        <mwc-datefield label="disabled" disabled></mwc-datefield>
        <mwc-datefield label="helper text" helper="I can help"></mwc-datefield>
        <mwc-datefield label="persistent helper text" helperPersistent helper="I can help"></mwc-datefield>
        <mwc-datefield label="required" validateOnInitialRender required validationMessage="This is required"></mwc-datefield>
      </div>

      <h1>Time</h1>
      <p>date field with time styles</p>
      <div>
        <mwc-datefield></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="initial value" value="2022-05-10T20:47"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="prefix" prefix="$$$"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="suffix" suffix="MST"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="icon" icon="schedule"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="disabled" disabled></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="helper text" helper="I can help"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="persistent helper text" helperPersistent helper="I can help"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="required" validateOnInitialRender required validationMessage="This is required"></mwc-datefield>
      </div>

      <h1>Layout</h1>
      <p>Call layout() on date fields that are initially hidden to float the label</p>
      <div>
        <mwc-formfield label="Show date field">
          <mwc-switch
            .selected=${this.showLayoutInput}
            @click=${() => {
              this.showLayoutInput = !this.showLayoutInput;
            }}
          ></mwc-switch>
        </mwc-formfield>
        <div row ?hidden=${!this.showLayoutInput}>
          <mwc-datefield layout-demo label="Label"></mwc-datefield>
          <mwc-button
            raised
            @click=${() => {
              this.layoutInput.layout();
            }}
            >layout()</mwc-button
          >
        </div>
      </div>
    `;
  }
}
