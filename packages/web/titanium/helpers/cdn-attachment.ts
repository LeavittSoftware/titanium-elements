import { IDatabaseAttachment } from '@leavittsoftware/lg-core-typescript/lg.net.system';

/*
 * `@lg.fileToken` is only present on protected Azure-stored files returned by an `[IncludeFileTokens]` api4 action.
 */
export type CdnAttachment = Partial<IDatabaseAttachment> & {
  '@lg.fileToken'?: string;
  '@lg.fileTokenExpiresOn'?: string;
};

/*
 * Azure-stored CdnFileNames are container-qualified prefixes (e.g. `protected/testing/baskets/2026/09/123`);
 * legacy cdn.leavitt.com names never contain a `/`.
 */
export function isAzureStored(attachment: CdnAttachment) {
  return !!attachment.CdnFileName?.includes('/');
}

/*
 * Returns the original file URL when size is omitted, otherwise the preview URL for that size.
 * Requires CdnFileName,PreviewExtension,Extension
 */
export function getCdnFileUrl(attachment: CdnAttachment, size?: number) {
  if (isAzureStored(attachment)) {
    const token = attachment['@lg.fileToken'] ?? '';
    return size
      ? `https://cdn01.leavitt.com/${attachment.CdnFileName}/preview-${size}.${attachment.PreviewExtension}${token}`
      : `https://cdn01.leavitt.com/${attachment.CdnFileName}/original.${attachment.Extension}${token}`;
  }

  return size
    ? `https://cdn.leavitt.com/${attachment.CdnFileName}-${size}.${attachment.PreviewExtension}`
    : `https://cdn.leavitt.com/${attachment.CdnFileName}.${attachment.Extension}`;
}
