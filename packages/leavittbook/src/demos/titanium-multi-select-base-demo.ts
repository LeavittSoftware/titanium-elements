import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';
import '@material/web/icon/icon';

import '@leavittsoftware/web/titanium/multi-select-base/multi-select-base';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';
import { TitaniumMultiSelectBase, TitaniumMultiSelectSection } from '@leavittsoftware/web/titanium/multi-select-base/multi-select-base';

import StoryStyles from '../styles/story-styles';

type Animal = { Id: number; Name: string };
type Activity = { Id: string; Name: string; Icon: string };

const animals: Array<Animal> = [
  'Aardvark',
  'Badger',
  'Capybara',
  'Dingo',
  'Echidna',
  'Ferret',
  'Gibbon',
  'Hedgehog',
  'Ibex',
  'Jackal',
  'Kestrel',
  'Lemur',
  'Marmot',
  'Narwhal',
  'Ocelot',
  'Pangolin',
  'Quokka',
  'Raccoon',
  'Serval',
  'Tapir',
].map((Name, index) => ({ Id: index + 1, Name }));

const activities: Array<Activity> = [
  { Id: 'walking', Name: 'Walking', Icon: 'directions_walk' },
  { Id: 'running', Name: 'Running', Icon: 'directions_run' },
  { Id: 'cycling', Name: 'Cycling', Icon: 'directions_bike' },
  { Id: 'swimming', Name: 'Swimming', Icon: 'pool' },
  { Id: 'weights', Name: 'Weight training', Icon: 'fitness_center' },
  { Id: 'yoga', Name: 'Yoga', Icon: 'self_improvement' },
  { Id: 'hiking', Name: 'Hiking', Icon: 'hiking' },
  { Id: 'rowing', Name: 'Rowing', Icon: 'rowing' },
  { Id: 'skiing', Name: 'Skiing', Icon: 'downhill_skiing' },
  { Id: 'climbing', Name: 'Climbing', Icon: 'landscape' },
];

const activitySections: Array<TitaniumMultiSelectSection<Activity>> = [
  {
    key: 'frequent',
    headline: 'Frequently used activities',
    supportingText: 'Your 3 most frequently logged activities',
    icon: 'star',
    items: activities.filter((o) => ['walking', 'running', 'cycling'].includes(o.Id)),
  },
  {
    key: 'all',
    headline: 'All activities',
    supportingText: `${activities.length} activities available`,
    icon: 'sort_by_alpha',
    items: activities,
  },
];

@customElement('titanium-multi-select-base-demo')
export class TitaniumMultiSelectBaseDemo extends LitElement {
  @state() private accessor disabled: boolean = false;
  @state() private accessor selectedAnimals: Array<Animal> = [];
  @state() private accessor selectedActivities: Array<Activity> = [];

  @query('#required') private accessor requiredSelect!: TitaniumMultiSelectBase<Animal>;

  static styles = [
    StoryStyles,
    css`
      titanium-multi-select-base {
        max-width: 480px;
      }

      p[selection] {
        margin: 12px 0 0 0;
        font-size: 13px;
        color: var(--md-sys-color-on-surface-variant);
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium multi select base" level1Href="/titanium-multi-select-base" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium multi select base" className="TitaniumMultiSelectBase"></story-header>
            <p>
              Selected items are shown as chips inside the field. The search input lives in the popover directly above the selectable items, so the list filters
              without ever leaving the popover.
            </p>

            <div>
              <h1>Local search</h1>
              <p>A flat list of items searched locally with fuse.js. The popover width follows the field with <code>match-input-width</code>.</p>
              <titanium-multi-select-base
                match-input-width
                label="Animals"
                placeholder="Select animals"
                search-placeholder="Search animals"
                supportingText="Search runs over every item"
                .items=${animals}
                .selected=${this.selectedAnimals}
                ?disabled=${this.disabled}
                @selected-changed=${(e: Event) => (this.selectedAnimals = (e.target as TitaniumMultiSelectBase<Animal>).selected)}
              ></titanium-multi-select-base>
              <p selection>${this.selectedAnimals.length ? this.selectedAnimals.map((o) => o.Name).join(', ') : 'Nothing selected'}</p>
            </div>

            <div>
              <h1>Sections and icons</h1>
              <p>
                Items are grouped under sticky headers while no search term is entered. <code>pathToIcon</code> points at the property holding a Material
                Symbols icon name, which is rendered in both the menu items and the chips.
              </p>
              <titanium-multi-select-base
                match-input-width
                has-leading-icon
                label="Activities"
                placeholder="Select activities"
                search-placeholder="Search activities"
                pathToIcon="Icon"
                .sections=${activitySections}
                .items=${activities}
                .selected=${this.selectedActivities}
                ?disabled=${this.disabled}
                @selected-changed=${(e: Event) => (this.selectedActivities = (e.target as TitaniumMultiSelectBase<Activity>).selected)}
              >
                <md-icon slot="leading-icon">exercise</md-icon>
              </titanium-multi-select-base>
              <p selection>${this.selectedActivities.length ? this.selectedActivities.map((o) => o.Name).join(', ') : 'Nothing selected'}</p>
            </div>

            <div>
              <h1>Required with a selection limit</h1>
              <p>Unselected items are disabled once <code>max-selected</code> is reached. Validity is reported when the popover closes.</p>
              <titanium-multi-select-base
                id="required"
                required
                match-input-width
                max-selected="3"
                label="Favorite animals"
                placeholder="Pick up to three"
                supportingText="Choose at least one, at most three"
                errorText="Please pick at least one animal"
                .items=${animals}
                ?disabled=${this.disabled}
              ></titanium-multi-select-base>

              <section buttons>
                <md-filled-tonal-button @click=${() => (this.disabled = !this.disabled)}>${this.disabled ? 'Enable' : 'Disable'}</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.requiredSelect.reportValidity()}>Report validity</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.dispatchEvent(new ShowSnackbarEvent(`Check validity is ${this.requiredSelect.checkValidity()}`))}
                  >Check validity</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${() => this.requiredSelect.reset()}>Reset</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-multi-select-base"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
