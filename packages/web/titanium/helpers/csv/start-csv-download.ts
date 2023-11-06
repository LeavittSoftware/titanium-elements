export const startCsvDownload = (fileName: string, csv: string, context: HTMLElement = document.body) => {
  const link = document.createElement('a');
  link.setAttribute('download', fileName);
  link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
  link.style.visibility = 'hidden';

  const clickEvent = document.createEvent('MouseEvent');
  clickEvent.initEvent('click', true, true);

  context.appendChild(link);
  link.dispatchEvent(clickEvent);
  context.removeChild(link);
};
