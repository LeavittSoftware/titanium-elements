import { IDatabaseAttachment } from '@leavittsoftware/lg-core-typescript/lg.net.system';

/*
 * Requires CdnFileName,PreviewExtension,PreviewSizes,Extension
 */
export function getCdnInlineUrl(attachment: Partial<IDatabaseAttachment> | null | undefined, size?: number) {
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

export function isImage(attachment: Partial<IDatabaseAttachment>) {
  return (
    attachment?.Extension === 'png' ||
    attachment?.Extension === 'jpg' ||
    attachment?.Extension === 'jpeg' ||
    attachment?.Extension === 'gif' ||
    attachment?.Extension === 'svg' ||
    attachment?.Extension === 'webp'
  );
}

/*
 * Requires CdnFileName,PreviewExtension,PreviewSizes,Extension,Name
 */
export function getCdnDownloadUrl(attachment: Partial<IDatabaseAttachment> | null | undefined, size?: number) {
  if (!attachment?.CdnFileName || (size && !attachment?.PreviewSizes?.split(',').includes(String(size)))) {
    return undefined;
  }

  return size
    ? `https://cdn.leavitt.com/${attachment.CdnFileName}-${size}.${attachment.PreviewExtension}?d=${encodeURIComponent(
        `${attachment.Name}-${size}.${attachment.PreviewExtension}`
      )}`
    : `https://cdn.leavitt.com/${attachment.CdnFileName}.${attachment.Extension}?d=${encodeURIComponent(`${attachment.Name}.${attachment.Extension}`)}`;
}
