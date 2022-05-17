import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-dialog/lib/titanium-dialog-base';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('titanium-dialog-base-demo')
export class TitaniumDialogBaseDemoElement extends LitElement {
  @query('titanium-dialog-base[default]') defaultDialog;
  @query('titanium-dialog-base[fullwidth]') fullWidthAndHeighDialog;
  @query('titanium-dialog-base[max-width]') maxWidthDialog;
  @query('titanium-dialog-base[focus-trap]') focusTrapDialog;

  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      [max-width] {
        --titanium-dialog-max-width: 250px;
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
    `,
  ];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>titanium-dialog-base with no configuration set</p>
        <mwc-button @click=${() => this.defaultDialog?.open()} label="Fake Donation"></mwc-button>

        <titanium-dialog-base default>
          <custom-container>
            <h1>Donations</h1>
            <mwc-textfield outlined label="Donation amount"></mwc-textfield>
            <mwc-button @click=${() => this.defaultDialog?.close()} label="Submit"></mwc-button>
          </custom-container>
        </titanium-dialog-base>
      </div>
    `;
  }

  #fullscreenStory() {
    return html`
      <div>
        <h1>Full width & height</h1>
        <p>titanium-dialog-base with the fullwidth and fullheight attribute set</p>
        <mwc-button @click=${() => this.fullWidthAndHeighDialog?.open()} label="The Roman System Of Goverment"></mwc-button>

        <titanium-dialog-base fullwidth fullheight>
          <custom-container>
            <h1>The Roman System Of Goverment</h1>
            <p>
              Roman political history has an unusual meaning and value for us, because the Romans had to face so many of the problems which confront us today,
              and their experience ran through such a wide range. Few peoples can boast of an unbroken history of a thousand years, and perhaps none has tried
              so many different forms of government. The early monarchy gives way to an oligarchy, to be displaced in turn by a democracy. The dual government
              of the prince and the senate which follows develops into the empire, and the emperor in time becomes the autocratic monarch.In this period of a
              thousand years from the seventh century before our era to the fourth century after it, we may see in the practical experiences of the Roman people
              the points of strength and of weakness in an aristocracy, a plutocracy, a parliamentary government, a democratic empire, and an autocracy. We may
              also trace in the history of Rome the development of a city-state into a world-wide empire. -Frank Frost Abbott
            </p>
            <mwc-button @click=${() => this.fullWidthAndHeighDialog?.close()} label="close"></mwc-button>
          </custom-container>
        </titanium-dialog-base>
      </div>
    `;
  }

  #maxWidthStory() {
    return html`
      <div>
        <h1>Max Width</h1>
        <p>titanium-dialog-base with a max-width applied via css variable</p>
        <mwc-button @click=${() => this.maxWidthDialog?.open()} label="THE PRACTICE & SCIENCE OF DRAWING"></mwc-button>

        <titanium-dialog-base max-width>
          <custom-container>
            <h1>THE PRACTICE & SCIENCE OF DRAWING</h1>
            <p>
              There is much foolish talk about conventional art, as if art could ever get away from conventions, if it would. The convention will be more
              natural or more abstract according to the nature of the thing to be conveyed and the medium employed to express it. But naturalism is just as much
              a convention as any of the other isms that art has lately been so assailed with. For a really unconventional art there is Madame Tussaud's
              Waxworks. There, even the convention of a frame and flat surface are done away with, besides the painted symbols to represent things. They have
              real natural chairs, tables, and floors, real clothes, and even real hair. Realism everywhere, but no life. And we all know the result. There is
              more expression of life in a few lines scribbled on paper by a good artist than in all the reality of the popular show. - Harold Speed
            </p>
            <mwc-button @click=${() => this.maxWidthDialog?.close()} label="Close"></mwc-button>
          </custom-container>
        </titanium-dialog-base>
      </div>
    `;
  }

  #focusTrapStory() {
    return html`
      <div>
        <h1>Focus Trap</h1>
        <p>titanium-dialog-base with the focus-trap attribute applied - this will prevent tabbing outside of the dialog</p>
        <mwc-button @click=${() => this.focusTrapDialog?.open()} label="Tarzan of the Apes"></mwc-button>

        <titanium-dialog-base focus-trap>
          <custom-container>
            <h1>Tarzan of the Apes</h1>
            <p>
              Clayton was the type of Englishman that one likes best to associate with the noblest monuments of historic achievement upon a thousand victorious
              battlefields—a strong, virile man—mentally, morally, and physically. In stature he was above the average height; his eyes were gray, his features
              regular and strong; his carriage that of perfect, robust health influenced by his years of army training. Political ambition had caused him to
              seek transference from the army to the Colonial Office and so we find him, still young, entrusted with a delicate and important commission in the
              service of the Queen. - Edgar Rice Burroughs
            </p>
            <mwc-button @click=${() => this.focusTrapDialog?.close()} label="Close"></mwc-button>
          </custom-container>
        </titanium-dialog-base>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium Dialog Base" tagName="titanium-dialog-base" klass="TitaniumDialogBaseElement"></story-header>
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

      <api-docs src="./custom-elements.json" selected="titanium-dialog-base"></api-docs>
    `;
  }
}
