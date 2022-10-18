/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-select';
/* playground-fold-end */

import '@leavittsoftware/titanium-dialog';

/* playground-fold */
@customElement('titanium-dialog-playground')
export class TitaniumDialogPlayground extends LitElement {
  @query('titanium-dialog[default]') defaultDialog;
  @query('titanium-dialog[fullwidth]') fullWidthAndHeighDialog;
  @query('titanium-dialog[max-width]') maxWidthDialog;
  @query('titanium-dialog[select]') selectDialog;
  @query('titanium-dialog[select2]') select2Dialog;
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

      titanium-dialog[select] {
        --titanium-dialog-max-width: 550px;
      }

      p,
      h1 {
        width: 100%;
      }

      mwc-select {
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

      div[full-height-demo]:hover {
        cursor: crosshair;
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
        <titanium-dialog disable-scroll default header="Donations">
          <mwc-textfield outlined label="Donation amount"></mwc-textfield>
        </titanium-dialog>
      </div>

      <div full-height-demo>
        <h1>Full width & height with buttons</h1>
        <p>titanium-dialog with the fullwidth and fullheight attribute set</p>
        <mwc-button @click=${() => this.fullWidthAndHeighDialog?.open()} label="The Roman System Of Government"></mwc-button>

        <titanium-dialog header="The Roman System Of Goverment" fullWidth fullHeight>
          <p>
            Roman political history has an unusual meaning and value for us, because the Romans had to face so many of the problems which confront us today, and
            their experience ran through such a wide range. Few peoples can boast of an unbroken history of a thousand years, and perhaps none has tried so many
            different forms of government. The early monarchy gives way to an oligarchy, to be displaced in turn by a democracy. The dual government of the
            prince and the senate which follows develops into the empire, and the emperor in time becomes the autocratic monarch.In this period of a thousand
            years from the seventh century before our era to the fourth century after it, we may see in the practical experiences of the Roman people the points
            of strength and of weakness in an aristocracy, a plutocracy, a parliamentary government, a democratic empire, and an autocracy. We may also trace in
            the history of Rome the development of a city-state into a world-wide empire. -Frank Frost Abbott
          </p>
          <mwc-button slot="secondaryAction" @click=${() => this.fullWidthAndHeighDialog?.close('cancel')} label="Cancel"></mwc-button>
          <mwc-button slot="primaryAction" @click=${() => this.fullWidthAndHeighDialog?.close('ok')} autofocus label="Ok"></mwc-button>
        </titanium-dialog>
      </div>

      <div>
        <h1>Max Width</h1>
        <p>titanium-dialog with a max-width applied via css variable</p>
        <mwc-button @click=${() => this.maxWidthDialog?.open()} label="THE PRACTICE & SCIENCE OF DRAWING"></mwc-button>
        <titanium-dialog header="THE PRACTICE & SCIENCE OF DRAWING" max-width>
          <p>
            There is much foolish talk about conventional art, as if art could ever get away from conventions, if it would. The convention will be more natural
            or more abstract according to the nature of the thing to be conveyed and the medium employed to express it. But naturalism is just as much a
            convention as any of the other isms that art has lately been so assailed with. For a really unconventional art there is Madame Tussaud's Waxworks.
            There, even the convention of a frame and flat surface are done away with, besides the painted symbols to represent things. They have real natural
            chairs, tables, and floors, real clothes, and even real hair. Realism everywhere, but no life. And we all know the result. There is more expression
            of life in a few lines scribbled on paper by a good artist than in all the reality of the popular show. - Harold Speed
          </p>
        </titanium-dialog>
      </div>

      <div>
        <h1>Select disable-scroll dialog</h1>
        <p>mwc-select in a dialog</p>
        <mwc-button @click=${() => this.selectDialog?.open?.()} label="THE PRACTICE & SCIENCE OF DRAWING"></mwc-button>
        <titanium-dialog select disable-scroll header="Select in a dialog example">
          <main>
            <p>
              There is much foolish talk about conventional art, as if art could ever get away from conventions, if it would. The convention will be more
              natural or more abstract according to the nature of the thing to be conveyed and the medium employed to express it. But naturalism is just as much
              a convention as any of the other isms that art has lately been so assailed with. For a really unconventional art there is Madame Tussaud's
              Waxworks. There, even the convention of a frame and flat surface are done away with, besides the painted symbols to represent things. They have
              real natural chairs, tables, and floors, real clothes, and even real hair. Realism everywhere, but no life. And we all know the result. There is
              more expression of life in a few lines scribbled on paper by a good artist than in all the reality of the popular show. - Harold Speed
            </p>
            <mwc-select outlined label="filled">
              <mwc-list-item></mwc-list-item>
              <mwc-list-item value="0">Item 0</mwc-list-item>
              <mwc-list-item value="1">Item 1</mwc-list-item>
              <mwc-list-item value="2">Item 2</mwc-list-item>
              <mwc-list-item value="3">Item 3</mwc-list-item>
              <mwc-list-item value="4">Item 4</mwc-list-item>
              <mwc-list-item value="5">Item 5</mwc-list-item>
              <mwc-list-item value="6">Item 6</mwc-list-item>
              <mwc-list-item value="7">Item 7</mwc-list-item>
              <mwc-list-item value="8">Item 8</mwc-list-item>
            </mwc-select>
          </main>
        </titanium-dialog>
      </div>

      <div>
        <h1>Select in a scrolling dialog</h1>
        <p>mwc-select in a dialog</p>
        <mwc-button @click=${() => this.select2Dialog?.open?.()} label="THE PRACTICE & SCIENCE OF DRAWING"></mwc-button>
        <titanium-dialog select2 header="Select in a dialog example">
          <p>
            There is much foolish talk about conventional art, as if art could ever get away from conventions, if it would. The convention will be more natural
            or more abstract according to the nature of the thing to be conveyed and the medium employed to express it. But naturalism is just as much a
            convention as any of the other isms that art has lately been so assailed with. For a really unconventional art there is Madame Tussaud's Waxworks.
            There, even the convention of a frame and flat surface are done away with, besides the painted symbols to represent things. They have real natural
            chairs, tables, and floors, real clothes, and even real hair. Realism everywhere, but no life. And we all know the result. There is more expression
            of life in a few lines scribbled on paper by a good artist than in all the reality of the popular show. - Harold Speed
          </p>
          <mwc-select style="margin:24px 0;" outlined label="filled">
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="0">Item 0</mwc-list-item>
            <mwc-list-item value="1">Item 1</mwc-list-item>
            <mwc-list-item value="2">Item 2</mwc-list-item>
            <mwc-list-item value="3">Item 3</mwc-list-item>
            <mwc-list-item value="4">Item 4</mwc-list-item>
            <mwc-list-item value="5">Item 5</mwc-list-item>
            <mwc-list-item value="6">Item 6</mwc-list-item>
            <mwc-list-item value="7">Item 7</mwc-list-item>
            <mwc-list-item value="8">Item 8</mwc-list-item>
          </mwc-select>
          <p>
            There is much foolish talk about conventional art, as if art could ever get away from conventions, if it would. The convention will be more natural
            or more abstract according to the nature of the thing to be conveyed and the medium employed to express it. But naturalism is just as much a
            convention as any of the other isms that art has lately been so assailed with. For a really unconventional art there is Madame Tussaud's Waxworks.
            There, even the convention of a frame and flat surface are done away with, besides the painted symbols to represent things. They have real natural
            chairs, tables, and floors, real clothes, and even real hair. Realism everywhere, but no life. And we all know the result. There is more expression
            of life in a few lines scribbled on paper by a good artist than in all the reality of the popular show. - Harold Speed
          </p>
        </titanium-dialog>
      </div>

      <div>
        <h1>Focus Trap</h1>
        <p>
          titanium-dialog with the focus-trap attribute applied - this will prevent tabbing outside of the dialog
          <br />
          <story-note> Note: with focus-trap enabled there will be no close button provided by default </story-note>
        </p>
        <mwc-button
          @click=${async () => {
            const reason = await this.focusTrapDialog?.open();
            console.log('close reason', reason);
          }}
          label="Tarzan of the Apes"
        ></mwc-button>

        <titanium-dialog header="Tarzan of the Apes" focus-trap>
          <p>
            Clayton was the type of Englishman that one likes best to associate with the noblest monuments of historic achievement upon a thousand victorious
            battlefields—a strong, virile man—mentally, morally, and physically. In stature he was above the average height; his eyes were gray, his features
            regular and strong; his carriage that of perfect, robust health influenced by his years of army training. Political ambition had caused him to seek
            transference from the army to the Colonial Office and so we find him, still young, entrusted with a delicate and important commission in the service
            of the Queen. - Edgar Rice Burroughs
          </p>
          <mwc-button slot="secondaryAction" @click=${() => this.focusTrapDialog?.close('cancel')} label="Cancel"></mwc-button>
          <mwc-button slot="primaryAction" @click=${() => this.focusTrapDialog?.close('ok')} autofocus label="Ok"></mwc-button>
        </titanium-dialog>
      </div>
    `;
  }
}
