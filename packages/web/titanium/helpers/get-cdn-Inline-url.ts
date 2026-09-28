import { CdnAttachment, getCdnFileUrl } from './cdn-attachment.js';

/*
 * Requires CdnFileName,PreviewExtension,PreviewSizes,Extension
 * Protected Azure-stored files also require the `@lg.fileToken` annotation.
 */
export function getCdnInlineUrl(attachment: CdnAttachment | null | undefined, size?: number) {
  if (!attachment?.CdnFileName) {
    return undefined;
  }

  if (!attachment?.PreviewSizes || !attachment?.PreviewSizes?.split(',').includes(String(size)) || attachment.Extension === 'svg') {
    if (isImage(attachment)) {
      //Return original size
      return getCdnFileUrl(attachment);
    }
    return undefined;
  }

  return getCdnFileUrl(attachment, size);
}

export function isImage(attachment: CdnAttachment) {
  return (
    attachment?.Extension === 'png' ||
    attachment?.Extension === 'jpg' ||
    attachment?.Extension === 'jpeg' ||
    attachment?.Extension === 'gif' ||
    attachment?.Extension === 'svg' ||
    attachment?.Extension === 'webp'
  );
}
