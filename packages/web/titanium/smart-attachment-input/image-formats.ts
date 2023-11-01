export const imageFormats = [
  'tiff',
  'pjp',
  'jfif',
  'bmp',
  'gif',
  'svg',
  'png',
  'xbm',
  'dib',
  'jxl',
  'jpeg',
  'svgz',
  'jpg',
  'webp',
  'ico',
  'tif',
  'pjpeg',
  'avif',
];

export function getExtension(filename: string) {
  const parts = filename.split('.');
  return parts?.[parts.length - 1] || '';
}

export function getFileIcon(extension: string) {
  if (extension.toLowerCase() === 'pdf') {
    return new URL('./images/icon-pdf.png', import.meta.url).href;
  }
  return new URL('./images/icon-other.png', import.meta.url).href;
}

export function getFileBgIcon(extension: string) {
  if (extension.toLowerCase() === 'pdf') {
    return new URL('./images/icon-pdf-bg.png', import.meta.url).href;
  }
  return new URL('./images/icon-other-bg.png', import.meta.url).href;
}
