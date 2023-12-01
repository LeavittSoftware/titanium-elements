export function getIcon(extension: string): string {
  if (extension === 'pdf' || extension === 'txt' || extension === 'rtf' || extension === 'doc' || extension === 'docx' || extension === 'csv') {
    return 'article';
  }

  if (extension === 'pptx' || extension === 'pptm' || extension === 'ppt') {
    return 'slideshow';
  }

  if (extension === 'xlsx' || extension === 'xlsx') {
    return 'text_snippet';
  }

  if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'webp' || extension === 'ico' || extension === 'svg') {
    return 'photo';
  }

  if (extension === 'mp4') {
    return 'movie';
  }

  return 'article';
}
