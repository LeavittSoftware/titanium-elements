import { Attachment } from '@leavittsoftware/lg-core-typescript/lg.core';

export function getCdnInlineUrl(attachment: Partial<Attachment> | null | undefined, size?: number) {
  if (!attachment?.CdnFileName) {
    return undefined;
  }

  return size
    ? `https://cdn.leavitt.com/${attachment.CdnFileName}-${size}.${attachment.PreviewExtension}`
    : `https://cdn.leavitt.com/${attachment.CdnFileName}.${attachment.Extension}`;
}

export function getCdnDownloadUrl(attachment: Partial<Attachment> | null | undefined, size?: number) {
  if (!attachment?.CdnFileName) {
    return undefined;
  }

  return size
    ? `https://cdn.leavitt.com/${attachment.CdnFileName}-${size}.${attachment.PreviewExtension}?d=${attachment.FileName}.${attachment.Extension}`
    : `https://cdn.leavitt.com/${attachment.CdnFileName}.${attachment.Extension}?d=${attachment.FileName}.${attachment.Extension}`;
}
