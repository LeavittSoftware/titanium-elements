import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-dialog';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('titanium-dialog-demo')
export class TitaniumDialogDemoElement extends LitElement {
  @query('titanium-dialog[default]') defaultDialog;
  @query('titanium-dialog[fullwidth]') fullWidthAndHeighDialog;
  @query('titanium-dialog[max-width]') maxWidthDialog;
  @query('titanium-dialog[focus-trap]') focusTrapDialog;

  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      [focus-trap],
      [max-width] {
        --titanium-dialog-max-width: 350px;
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

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>titanium-dialog with no configuration set</p>
        <mwc-button @click=${() => this.defaultDialog?.open()} label="Fake Donation"></mwc-button>

        <titanium-dialog default header="Donations">
          <mwc-textfield slot="content" outlined label="Donation amount"></mwc-textfield>
        </titanium-dialog>
      </div>
    `;
  }

  #fullscreenStory() {
    return html`
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
    `;
  }

  #maxWidthStory() {
    return html`
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
    `;
  }

  #focusTrapStory() {
    return html`
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
            <mwc-button @click=${() => this.focusTrapDialog?.close()} label="Ok"></mwc-button>
          </span>
        </titanium-dialog>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium Dialog" tagName="titanium-dialog" klass="TitaniumDialogElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#fullscreenStory()}
        <code-block .snippet=${this.#fullscreenStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#maxWidthStory()}
        <code-block .snippet=${this.#maxWidthStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#focusTrapStory()}
        <code-block .snippet=${this.#focusTrapStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-dialog"></api-docs>
    `;
  }
}
