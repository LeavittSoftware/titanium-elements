import { Attachment } from '@leavittsoftware/lg-core-typescript/lg.core';

/*
 * Requires CdnFileName,PreviewExtension,PreviewSizes,Extension
 */
export function getCdnInlineUrl(attachment: Partial<Attachment> | null | undefined, size?: number) {
  if (!attachment?.CdnFileName) {
    return undefined;
  }

  if (!attachment?.PreviewSizes || !attachment?.PreviewSizes?.split(',').includes(String(size))) {
    if (isImage(attachment)) {
      //Return original size
      return `https://cdn.leavitt.com/${attachment.CdnFileName}.${attachment.Extension}`;
    }
    return undefined;
  }

  return size
    ? `https://cdn.leavitt.com/${attachment.CdnFileName}-${size}.${attachment.PreviewExtension}`
    : `https://cdn.leavitt.com/${attachment.CdnFileName}.${attachment.Extension}`;
}

export function isImage(attachment: Partial<Attachment>) {
  return (
    attachment?.Extension === 'png' ||
    attachment?.Extension === 'jpg' ||
    attachment?.Extension === 'jpeg' ||
    attachment?.Extension === 'gif' ||
    attachment?.Extension === 'webp'
  );
}

/*
 * Requires CdnFileName,PreviewExtension,PreviewSizes,Extension,Name
 */
export function getCdnDownloadUrl(attachment: Partial<Attachment> | null | undefined, size?: number) {
  if (!attachment?.CdnFileName || (size && !attachment?.PreviewSizes?.split(',').includes(String(size)))) {
    return undefined;
  }

  return size
    ? `https://cdn.leavitt.com/${attachment.CdnFileName}-${size}.${attachment.PreviewExtension}?d=${attachment.Name}-${size}.${attachment.PreviewExtension}`
    : `https://cdn.leavitt.com/${attachment.CdnFileName}.${attachment.Extension}?d=${attachment.Name}.${attachment.Extension}`;
}
