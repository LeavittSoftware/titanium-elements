import { storiesOf } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import '@leavittsoftware/titanium-svg-button';
import { startCsvDownload, convertArrayToCsv } from '@leavittsoftware/titanium-helpers/lib/titanium-csv-download';

const downloadSvg = 'M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z';

storiesOf('HELPERS|titanium-csv-download', module).add('Download Button', () => {
  return html`
    <titanium-svg-button
      ?large=${true}
      .path=${downloadSvg}
      @click=${() => {
        action('Download Clicked');
        console.log(this);
        startCsvDownload(`myfile.csv`, convertArrayToCsv([]), document.body);
      }}
    ></titanium-svg-button>
  `;
});
