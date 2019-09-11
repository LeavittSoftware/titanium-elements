import { storiesOf, forceReRender } from '@storybook/polymer/dist/client/preview/index';
import { html } from 'lit-html';
import { withKnobs, button, text } from '@storybook/addon-knobs';
import '@leavittsoftware/titanium-dialog';
import '@leavittsoftware/titanium-single-select';
import '@leavittsoftware/titanium-single-select/lib/titanium-single-select-item';

const singleSelectData = [
  { FirstName: 'Alice', LastName: 'Smith', FullName: 'Alice Smith' },
  { FirstName: 'Bob', LastName: 'Silverstone', FullName: 'Bob Silverstone' },
  { FirstName: 'Charlie', LastName: 'Tu', FullName: 'Charlie Tu' },
  { FirstName: 'Dogg', LastName: 'Bounty', FullName: 'Dogg Bounty' },
  { FirstName: 'Alicia', LastName: 'Fu', FullName: 'Alicia Fu' },
];

let filter = '';

storiesOf('UI COMPONENTS|titanium-dialog', module)
  .addDecorator(withKnobs)
  .add(
    'Usage',

    () => {
      let title = text('Title (optional)', 'Not in stock');
      var openDialog = (selector, e) => {
        e.preventDefault();
        document
          .querySelector(`titanium-dialog[${selector}]`)
          .open()
          .then(reason => console.log(reason));
      };

      return html`
        <div style="height: 48px;background-color: red; z-index: 2;"></div>
        <a href="#" @click=${e => openDialog('demo-one', e)}>
          Open dialog
        </a>
        <br />
        <a href="#" @click=${e => openDialog('demo-two', e)}>
          Open dialog no title
        </a>
        <br />
        <a href="#" @click=${e => openDialog('demo-three', e)}>
          Open dialog scrollable
        </a>
        <br />
        <a href="#" @click=${e => openDialog('demo-four', e)}>
          Open dialog fullscreen
        </a>
        <br />
        <a href="#" @click=${e => openDialog('demo-five', e)}>
          Open dialog single select
        </a>

        <titanium-dialog demo-one .title=${title}>
          <span slot="content">Please check the left and right side of this element for fun.</span>
        </titanium-dialog>

        <titanium-dialog demo-two>
          <span slot="content">Please check the left and right side of this element for fun.</span>
        </titanium-dialog>

        <titanium-dialog .title=${'Terms of service'} demo-three>
          <span slot="content"
            ><p style="margin-top:0;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius turpis sed nibh aliquam pulvinar. Maecenas mollis orci at velit pulvinar, non
              aliquam lectus lacinia. Cras mattis gravida nibh, vitae vehicula tellus tempor vitae. Nullam vel diam in mauris tristique ultricies eu quis enim.
              Nam vitae felis sit amet turpis porta lacinia non at urna. Quisque purus ipsum, pulvinar at risus consectetur, pulvinar auctor mi. Vestibulum
              sapien tortor, ornare ut lectus at, suscipit aliquam leo. Etiam pharetra magna eget tortor semper, eget varius enim feugiat. Ut vel aliquam ipsum,
              in venenatis justo. Nam pellentesque massa purus, in faucibus dui accumsan at. Suspendisse at efficitur sapien. Duis fringilla vehicula ligula,
              quis elementum magna ornare et.
            </p>
            <p>
              Curabitur pellentesque sodales dui, at posuere orci rhoncus vitae. Aliquam tristique, metus eget feugiat lacinia, erat ipsum pharetra elit, nec
              consequat libero odio quis lorem. Nunc quis leo in enim facilisis volutpat. Cras rhoncus justo sit amet vestibulum tristique. Maecenas vel ante
              vitae nisi fringilla semper. Donec ex eros, sagittis eget eros eget, tempor tincidunt nisl. Suspendisse potenti. Fusce posuere placerat lorem,
              viverra vestibulum metus molestie eu. Nam blandit diam vel sagittis congue. Suspendisse imperdiet velit elit, eget posuere tellus vehicula porta.
              Nulla dictum maximus eros. Nulla sit amet augue pulvinar, ultrices orci eu, mattis ligula.
            </p>
            <p>
              Suspendisse placerat quam sed odio feugiat, non tempor urna sodales. Nullam viverra mauris quis vehicula varius. Cras nec tempor nisi. Donec
              pellentesque iaculis luctus. Sed nec nisi sollicitudin, pellentesque eros id, auctor massa. Nam gravida facilisis mattis. Suspendisse vulputate
              eleifend sapien et imperdiet. Aenean varius elit ac quam cursus, ac suscipit erat ultricies. Integer sagittis tempor metus. Nullam laoreet est
              magna, ut facilisis lorem aliquam sit amet. Etiam consectetur odio ac tortor efficitur, eget finibus nulla laoreet. Sed at aliquam sem. Mauris sem
              tortor, scelerisque vitae tincidunt ac, rhoncus hendrerit justo. In in sem tempor, fermentum velit sit amet, pellentesque lacus. Morbi mollis
              dignissim fringilla.
            </p>
            <p>
              Suspendisse sollicitudin et orci eu vulputate. Curabitur gravida justo a arcu tristique aliquam. Duis ac commodo enim. Aliquam odio justo,
              hendrerit at vehicula id, sodales vel ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta aliquam augue at finibus.
              Pellentesque at porta mauris. Nam efficitur consequat magna, in auctor risus faucibus a. In hac habitasse platea dictumst. Sed malesuada lacus at
              lorem dictum, eget dignissim arcu posuere. Aenean porta velit nec ex ullamcorper rhoncus.
            </p></span
          >
        </titanium-dialog>

        <titanium-dialog fullscreen .title=${'Terms of service'} demo-four>
          <span slot="content"
            ><p style="margin-top:0;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius turpis sed nibh aliquam pulvinar. Maecenas mollis orci at velit pulvinar, non
              aliquam lectus lacinia. Cras mattis gravida nibh, vitae vehicula tellus tempor vitae. Nullam vel diam in mauris tristique ultricies eu quis enim.
              Nam vitae felis sit amet turpis porta lacinia non at urna. Quisque purus ipsum, pulvinar at risus consectetur, pulvinar auctor mi. Vestibulum
              sapien tortor, ornare ut lectus at, suscipit aliquam leo. Etiam pharetra magna eget tortor semper, eget varius enim feugiat. Ut vel aliquam ipsum,
              in venenatis justo. Nam pellentesque massa purus, in faucibus dui accumsan at. Suspendisse at efficitur sapien. Duis fringilla vehicula ligula,
              quis elementum magna ornare et.
            </p>
            <p>
              Curabitur pellentesque sodales dui, at posuere orci rhoncus vitae. Aliquam tristique, metus eget feugiat lacinia, erat ipsum pharetra elit, nec
              consequat libero odio quis lorem. Nunc quis leo in enim facilisis volutpat. Cras rhoncus justo sit amet vestibulum tristique. Maecenas vel ante
              vitae nisi fringilla semper. Donec ex eros, sagittis eget eros eget, tempor tincidunt nisl. Suspendisse potenti. Fusce posuere placerat lorem,
              viverra vestibulum metus molestie eu. Nam blandit diam vel sagittis congue. Suspendisse imperdiet velit elit, eget posuere tellus vehicula porta.
              Nulla dictum maximus eros. Nulla sit amet augue pulvinar, ultrices orci eu, mattis ligula.
            </p>
            <p>
              Suspendisse placerat quam sed odio feugiat, non tempor urna sodales. Nullam viverra mauris quis vehicula varius. Cras nec tempor nisi. Donec
              pellentesque iaculis luctus. Sed nec nisi sollicitudin, pellentesque eros id, auctor massa. Nam gravida facilisis mattis. Suspendisse vulputate
              eleifend sapien et imperdiet. Aenean varius elit ac quam cursus, ac suscipit erat ultricies. Integer sagittis tempor metus. Nullam laoreet est
              magna, ut facilisis lorem aliquam sit amet. Etiam consectetur odio ac tortor efficitur, eget finibus nulla laoreet. Sed at aliquam sem. Mauris sem
              tortor, scelerisque vitae tincidunt ac, rhoncus hendrerit justo. In in sem tempor, fermentum velit sit amet, pellentesque lacus. Morbi mollis
              dignissim fringilla.
            </p>
            <p>
              Suspendisse sollicitudin et orci eu vulputate. Curabitur gravida justo a arcu tristique aliquam. Duis ac commodo enim. Aliquam odio justo,
              hendrerit at vehicula id, sodales vel ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta aliquam augue at finibus.
              Pellentesque at porta mauris. Nam efficitur consequat magna, in auctor risus faucibus a. In hac habitasse platea dictumst. Sed malesuada lacus at
              lorem dictum, eget dignissim arcu posuere. Aenean porta velit nec ex ullamcorper rhoncus.
            </p></span
          >
        </titanium-dialog>

        <titanium-dialog .title=${'Single Select'} demo-five>
          <titanium-single-select
            slot="content"
            @input-changed=${({ detail }) => {
              filter = detail;
              forceReRender();
            }}
            itemlabelpath="FullName"
            hinttext="Search for a person or group to add them as a participant"
            placeholder="Add participants"
          >
            ${singleSelectData
              .filter(({ FullName }) => {
                return FullName.indexOf(filter) !== -1;
              })
              .map(
                person =>
                  html`
                    <titanium-single-select-item .value=${person}>${person.FirstName} ${person.LastName}</titanium-single-select-item>
                  `
              )}
          </titanium-single-select>
          <input slot="content" type="text" placeholder="test blur of single select" />
        </titanium-dialog>
      `;
    },
    {
      cssresources: [
        {
          id: `LightTheme`,
          code: `<style> titanium-dialog {
            --titanium-dialog-background-color: #fff;
            --app-light-text-color: #4f83cc;
            --app-dark-text-color: #002f6c;
            --app-border-color: #870000;
          } </style>`,
        },
      ],
    }
  );
