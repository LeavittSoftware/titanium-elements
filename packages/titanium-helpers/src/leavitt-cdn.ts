import { Attachment } from '@leavittsoftware/lg-core-typescript/lg.core';

/*
 * Requires CdnFileName,PreviewExtension,PreviewSizes,Extension
 */
export function getCdnInlineUrl(attachment: Partial<Attachment> | null | undefined, size?: number) {
  if (!attachment?.CdnFileName || (size && !attachment?.PreviewSizes?.split(',').includes(String(size)))) {
    return undefined;
  }

  return size
    ? `https://cdn.leavitt.com/${attachment.CdnFileName}-${size}.${attachment.PreviewExtension}`
    : `https://cdn.leavitt.com/${attachment.CdnFileName}.${attachment.Extension}`;
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
