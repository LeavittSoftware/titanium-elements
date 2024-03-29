import { IDatabaseAttachment } from '@leavittsoftware/lg-core-typescript/lg.net.system';

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
