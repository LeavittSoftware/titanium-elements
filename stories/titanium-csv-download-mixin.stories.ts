import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/polymer/dist/client/preview/index';

import {convertArrayToCsv, startCsvDownload} from '../lib/titanium-csv-download-mixin';

const basicCsvString = 'Name, Age\r\nBill, 30\r\nLucy, 23';


const button = () => {
  const el = document.createElement('button');
  el.setAttribute(
      'style',
      'text-transform: uppercase;font-size:12px;font-weight: bolder;color: rgb(130, 130, 130);border: 1px solid rgb(193, 193, 193);text-align: center;background-color:#F7F7F7;border-radius: 2px;cursor: pointer;padding: 8px;margin: 0px 0px 0px 5px;outline: 0px;');
  return el;
};

const basic = () => {
  const el = button();
  el.innerText = 'Download CSV';
  el.addEventListener(
      'click', e => startCsvDownload('demo.csv', basicCsvString));
  return el;
};

const array = [
  {FirstName: 'Robert', MiddleInitial: 'E', LastName: 'Lee', Height: '5\' 10"'},
  {
    FirstName: 'George',
    MiddleInitial: 'S',
    LastName: 'Patton',
    Height: '6\' 2"'
  },
  {FirstName: 'Napoleon', LastName: 'Bonaparte', Height: '5\' 5"'},
];

const fromArray = () => {
  const el = button();
  el.innerText = 'Download CSV';

  el.addEventListener(
      'click',
      e => startCsvDownload('demo-generals.csv', convertArrayToCsv(array)));
  return el;
};

const deepArray = [
  {Name: {First: 'Robert', MiddleInitial: 'E', Last: 'Lee'}, Height: '5\' 10"'},
  {
    Name:
        {First: 'George', MiddleInitial: 'S', Last: 'Patton', Height: '6\' 2"'}
  },
  {Name: {First: 'Napoleon', Last: 'Bonaparte'}, Height: '5\' 5"'},
];
const flattenFromArray = () => {
  const el = button();
  el.innerText = 'Download CSV';
  el.addEventListener(
      'click',
      e => startCsvDownload(
          'demo-flat-generals.csv', convertArrayToCsv(deepArray, true)));
  return el;
};

storiesOf('Csv Download', module)
    .add('basic', withNotes(`Creates CSV from:\r\n ${basicCsvString}`)(basic))
    .add(
        'from array',
        withNotes(`Creates CSV from: ${JSON.stringify(array)}`)(fromArray))
    .add(
        'flatten from array of complex objects',
        withNotes(`Creates CSV from: ${JSON.stringify(deepArray)}`)(
            flattenFromArray));
;
