/**
 * Fetches a file with caller-supplied auth headers and triggers a browser download
 * via a detached `<a download>` (the element is never attached to the document).
 *
 * Do not use for large files. The response is fully buffered as a `Blob` before
 * the save starts, so peak memory is about the size of the payload.
 */
export async function downloadAuthenticatedFile(url: string, fallbackFilename: string, headers: HeadersInit) {
  const response = await fetch(url, { headers });

  if (!response.ok) {
    const detail = (await response.text()).trim();
    throw new Error(detail || `Download failed (${response.status})`);
  }

  const blob = await response.blob();
  const contentDisposition = response.headers.get('content-disposition');
  const filenameMatch = contentDisposition?.match(/filename\*?=(?:UTF-8'')?["']?([^"';]+)/i);
  const filename = filenameMatch?.[1] ? decodeURIComponent(filenameMatch[1]) : fallbackFilename;

  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = objectUrl;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(objectUrl);
}
