import { CdnAttachment, getCdnFileUrl, isAzureStored } from './cdn-attachment.js';

/*
 * Requires CdnFileName,PreviewExtension,PreviewSizes,Extension,Name
 * Protected Azure-stored files also require the `@lg.fileToken` annotation. Azure blobs carry their own
 * Content-Disposition filename, so the legacy `?d=` parameter is only added for cdn.leavitt.com files.
 */
export function getCdnDownloadUrl(attachment: CdnAttachment | null | undefined, size?: number) {
  if (!attachment?.CdnFileName || (size && !attachment?.PreviewSizes?.split(',').includes(String(size)))) {
    return undefined;
  }

  const url = getCdnFileUrl(attachment, size);
  if (isAzureStored(attachment)) {
    return url;
  }

  const fileName = size ? `${attachment.Name}-${size}.${attachment.PreviewExtension}` : `${attachment.Name}.${attachment.Extension}`;
  return `${url}?d=${encodeURIComponent(fileName)}`;
}
