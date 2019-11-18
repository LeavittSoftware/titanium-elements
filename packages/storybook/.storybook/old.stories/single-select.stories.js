import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-single-select';

let singleSelectData = [];
let isLoading = false;
let totalCount = 0;

function _fakeApiCall(filterTerm) {
  singleSelectData = [];

  if (!filterTerm) {
    return;
  }

  isLoading = true;
  //TODO: find out how to for a re render of the template
  setTimeout(() => {
    totalCount = 535;
    singleSelectData = [
      { FirstName: 'Alice', LastName: 'Smith', FullName: 'Alice Smith' },
      { FirstName: 'Bob', LastName: 'Silverstone', FullName: 'Bob Silverstone' },
      { FirstName: 'Charlie', LastName: 'Tu', FullName: 'Charlie Tu' },
      { FirstName: 'Dogg', LastName: 'Bounty', FullName: 'Dogg Bounty' },
      { FirstName: 'Alicia', LastName: 'Fu', FullName: 'Alicia Fu' },
    ];
    isLoading = false;
    //TODO: find out how to for a re render of the template
  }, 300);
}

storiesOf('UI COMPONENTS|titanium-single-select', module)
  .addDecorator(withKnobs)
  .add(
    'Usage',
    () => {
      let disable = boolean('disable', false);
      let handler = () => {
        document.querySelector('titanium-snackbar').open(title, actionText);
      };

      return html`
        <titanium-single-select
          ?disabled=${disable}
          style="max-width: 400px; margin: 24px 0;"
          @input-changed=${e => _fakeApiCall(e.detail)}
          @selected-changed=${e => {
            alert(JSON.stringify(e.detail));
          }}
          itemlabelpath="FullName"
          .isLoading=${isLoading}
          .totalCount=${totalCount}
          hinttext="Search for a person or group to add them as a participant"
          placeholder="Add participants"
        >
          ${singleSelectData.map(
            person =>
              html`
                <titanium-single-select-item .value=${person}>${person.FirstName} ${person.LastName}</titanium-single-select-item>
              `
          )}
        </titanium-single-select>
        <titanium-single-select
          ?disabled=${disable}
          style="max-width: 400px; margin: 24px 0;"
          shaped
          itemlabelpath="Shaped"
          hinttext="Search for a person or group to add them as a participant"
          placeholder="Shaped"
        >
        </titanium-single-select>
        <titanium-single-select
          ?disabled=${disable}
          style="max-width: 400px; margin: 24px 0;"
          filled
          itemlabelpath="Filled"
          hinttext="Search for a person or group to add them as a participant"
          placeholder="Filled"
        >
        </titanium-single-select>

        <div style="height: 126px; padding:8px; border: 2px solid red;overflow:hidden">
          Restrictive parent example
          <titanium-single-select
            ?disabled=${disable}
            style="max-width: 400px; margin: 24px 0;"
            filled
            itemlabelpath="Filled"
            hinttext="Search for a person or group to add them as a participant"
            placeholder="Filled"
          >
          </titanium-single-select>
        </div>
      `;
    },
    {
      cssresources: [
        {
          id: `LightTheme`,
          code: `<style> titanium-single-select-item {
            --app-hover-color: #e1f5fe;
          }
          titanium-single-select {
            --app-text-color: #01579b;
            --app-light-text-color: #4f83cc;
            --app-border-color: #bbdefb;
          } </style>`,
        },
      ],
    }
  );
