/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-textfield';
/* playground-fold-end */

import '@leavittsoftware/titanium-dialog';

/* playground-fold */
@customElement('titanium-dialog-playground')
export class TitaniumDialogPlayground extends LitElement {
  @query('titanium-dialog[default]') defaultDialog;
  @query('titanium-dialog[fullwidth]') fullWidthAndHeighDialog;
  @query('titanium-dialog[max-width]') maxWidthDialog;
  @query('titanium-dialog[focus-trap]') focusTrapDialog;

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
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      [focus-trap],
      [max-width] {
        --titanium-dialog-max-width: 350px;
      }

      p,
      h1 {
        width: 100%;
      }

      mwc-button {
        align-self: flex-end;
      }

      custom-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px;
        height: 100%;
      }

      custom-container p {
        margin-bottom: 0;
        height: 100%;
      }

      story-note {
        font-size: 11px;
        font-style: italic;
        padding-top: 2px;
        display: block;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <div>
        <h1>Default</h1>
        <p>titanium-dialog with no configuration set</p>
        <mwc-button @click=${() => this.defaultDialog?.open()} label="Fake Donation"></mwc-button>

        <titanium-dialog default header="Donations">
          <mwc-textfield slot="content" outlined label="Donation amount"></mwc-textfield>
        </titanium-dialog>
      </div>

      <div>
        <h1>Full width & height</h1>
        <p>titanium-dialog with the fullwidth and fullheight attribute set</p>
        <mwc-button @click=${() => this.fullWidthAndHeighDialog?.open()} label="The Roman System Of Goverment"></mwc-button>

        <titanium-dialog header="The Roman System Of Goverment" fullwidth fullheight>
          <custom-container slot="content">
            <p>
              Roman political history has an unusual meaning and value for us, because the Romans had to face so many of the problems which confront us today,
              and their experience ran through such a wide range. Few peoples can boast of an unbroken history of a thousand years, and perhaps none has tried
              so many different forms of government. The early monarchy gives way to an oligarchy, to be displaced in turn by a democracy. The dual government
              of the prince and the senate which follows develops into the empire, and the emperor in time becomes the autocratic monarch.In this period of a
              thousand years from the seventh century before our era to the fourth century after it, we may see in the practical experiences of the Roman people
              the points of strength and of weakness in an aristocracy, a plutocracy, a parliamentary government, a democratic empire, and an autocracy. We may
              also trace in the history of Rome the development of a city-state into a world-wide empire. -Frank Frost Abbott
            </p>
          </custom-container>
        </titanium-dialog>
      </div>

      <div>
        <h1>Max Width</h1>
        <p>titanium-dialog with a max-width applied via css variable</p>
        <mwc-button @click=${() => this.maxWidthDialog?.open()} label="THE PRACTICE & SCIENCE OF DRAWING"></mwc-button>

        <titanium-dialog header="THE PRACTICE & SCIENCE OF DRAWING" max-width>
          <custom-container slot="content">
            <p>
              There is much foolish talk about conventional art, as if art could ever get away from conventions, if it would. The convention will be more
              natural or more abstract according to the nature of the thing to be conveyed and the medium employed to express it. But naturalism is just as much
              a convention as any of the other isms that art has lately been so assailed with. For a really unconventional art there is Madame Tussaud's
              Waxworks. There, even the convention of a frame and flat surface are done away with, besides the painted symbols to represent things. They have
              real natural chairs, tables, and floors, real clothes, and even real hair. Realism everywhere, but no life. And we all know the result. There is
              more expression of life in a few lines scribbled on paper by a good artist than in all the reality of the popular show. - Harold Speed
            </p>
          </custom-container>
        </titanium-dialog>
      </div>

      <div>
        <h1>Focus Trap</h1>
        <p>
          titanium-dialog with the focus-trap attribute applied - this will prevent tabbing outside of the dialog
          <br />
          <story-note> Note: with focus-trap enabled there will be no close button provided by default </story-note>
        </p>
        <mwc-button @click=${() => this.focusTrapDialog?.open()} label="Tarzan of the Apes"></mwc-button>

        <titanium-dialog header="Tarzan of the Apes" focus-trap>
          <custom-container slot="content">
            <p>
              Clayton was the type of Englishman that one likes best to associate with the noblest monuments of historic achievement upon a thousand victorious
              battlefields—a strong, virile man—mentally, morally, and physically. In stature he was above the average height; his eyes were gray, his features
              regular and strong; his carriage that of perfect, robust health influenced by his years of army training. Political ambition had caused him to
              seek transference from the army to the Colonial Office and so we find him, still young, entrusted with a delicate and important commission in the
              service of the Queen. - Edgar Rice Burroughs
            </p>
          </custom-container>
          <span slot="actions">
            <mwc-button @click=${() => this.focusTrapDialog?.close()} label="Cancel"></mwc-button>
            <mwc-button @click=${() => this.focusTrapDialog?.close()} autofocus label="Ok"></mwc-button>
          </span>
        </titanium-dialog>
      </div>
    `;
  }
}
