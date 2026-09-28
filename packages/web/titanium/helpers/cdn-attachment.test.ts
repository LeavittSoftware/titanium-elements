import { CdnAttachment, getCdnFileUrl, isAzureStored } from './cdn-attachment.js';
import { getCdnInlineUrl } from './get-cdn-Inline-url.js';
import { getCdnDownloadUrl } from './get-cdn-download-url.js';

const token = '?sv=2024-11-04&sr=d&sdd=5&se=2026-09-25T23:00:00Z&sp=r&sig=abc';

const legacyImage: CdnAttachment = {
  CdnFileName: 'aBcD1234',
  Name: 'My photo',
  Extension: 'png',
  PreviewExtension: 'webp',
  PreviewSizes: '32,64,128',
};

const protectedImage: CdnAttachment = {
  CdnFileName: 'protected/testing/baskets/2026/09/123',
  Name: 'My photo',
  Extension: 'png',
  PreviewExtension: 'webp',
  PreviewSizes: '32,64,128',
  '@lg.fileToken': token,
  '@lg.fileTokenExpiresOn': '2026-09-25T23:00:00Z',
};

const publicImage: CdnAttachment = {
  CdnFileName: 'public/companies/1042/logo',
  Name: 'Logo',
  Extension: 'png',
  PreviewExtension: 'webp',
  PreviewSizes: '32,64,128',
};

describe('isAzureStored', () => {
  it('should be true for container-qualified prefixes', () => {
    expect(isAzureStored(protectedImage)).toBeTrue();
    expect(isAzureStored(publicImage)).toBeTrue();
  });

  it('should be false for legacy names and missing names', () => {
    expect(isAzureStored(legacyImage)).toBeFalse();
    expect(isAzureStored({})).toBeFalse();
  });
});

describe('getCdnFileUrl', () => {
  it('should build legacy original and preview URLs', () => {
    expect(getCdnFileUrl(legacyImage)).toBe('https://cdn.leavitt.com/aBcD1234.png');
    expect(getCdnFileUrl(legacyImage, 64)).toBe('https://cdn.leavitt.com/aBcD1234-64.webp');
  });

  it('should build protected Azure URLs with the file token', () => {
    expect(getCdnFileUrl(protectedImage)).toBe(`https://cdn01.leavitt.com/protected/testing/baskets/2026/09/123/original.png${token}`);
    expect(getCdnFileUrl(protectedImage, 64)).toBe(`https://cdn01.leavitt.com/protected/testing/baskets/2026/09/123/preview-64.webp${token}`);
  });

  it('should build public Azure URLs without a token', () => {
    expect(getCdnFileUrl(publicImage)).toBe('https://cdn01.leavitt.com/public/companies/1042/logo/original.png');
    expect(getCdnFileUrl(publicImage, 128)).toBe('https://cdn01.leavitt.com/public/companies/1042/logo/preview-128.webp');
  });
});

describe('getCdnInlineUrl', () => {
  it('should return undefined without a CdnFileName', () => {
    expect(getCdnInlineUrl(null)).toBeUndefined();
    expect(getCdnInlineUrl({ Extension: 'png' }, 64)).toBeUndefined();
  });

  it('should return the preview when the size was generated', () => {
    expect(getCdnInlineUrl(legacyImage, 64)).toBe('https://cdn.leavitt.com/aBcD1234-64.webp');
    expect(getCdnInlineUrl(protectedImage, 64)).toBe(`https://cdn01.leavitt.com/protected/testing/baskets/2026/09/123/preview-64.webp${token}`);
  });

  it('should fall back to the original image when the size was not generated', () => {
    expect(getCdnInlineUrl(legacyImage, 512)).toBe('https://cdn.leavitt.com/aBcD1234.png');
    expect(getCdnInlineUrl(protectedImage, 512)).toBe(`https://cdn01.leavitt.com/protected/testing/baskets/2026/09/123/original.png${token}`);
    expect(getCdnInlineUrl(protectedImage)).toBe(`https://cdn01.leavitt.com/protected/testing/baskets/2026/09/123/original.png${token}`);
  });

  it('should always use the original for svg', () => {
    expect(getCdnInlineUrl({ ...publicImage, Extension: 'svg' }, 64)).toBe('https://cdn01.leavitt.com/public/companies/1042/logo/original.svg');
  });

  it('should return undefined for non-images without a matching preview', () => {
    const pdf: CdnAttachment = { ...protectedImage, Extension: 'pdf', PreviewSizes: '' };
    expect(getCdnInlineUrl(pdf, 64)).toBeUndefined();
  });

  it('should return a non-image preview when the size was generated', () => {
    const pdf: CdnAttachment = { ...protectedImage, Extension: 'pdf' };
    expect(getCdnInlineUrl(pdf, 128)).toBe(`https://cdn01.leavitt.com/protected/testing/baskets/2026/09/123/preview-128.webp${token}`);
  });
});

describe('getCdnDownloadUrl', () => {
  it('should add the legacy ?d= file name', () => {
    expect(getCdnDownloadUrl(legacyImage)).toBe('https://cdn.leavitt.com/aBcD1234.png?d=My%20photo.png');
    expect(getCdnDownloadUrl(legacyImage, 64)).toBe('https://cdn.leavitt.com/aBcD1234-64.webp?d=My%20photo-64.webp');
  });

  it('should not add ?d= to Azure URLs', () => {
    expect(getCdnDownloadUrl(protectedImage)).toBe(`https://cdn01.leavitt.com/protected/testing/baskets/2026/09/123/original.png${token}`);
    expect(getCdnDownloadUrl(publicImage, 64)).toBe('https://cdn01.leavitt.com/public/companies/1042/logo/preview-64.webp');
  });

  it('should return undefined when the requested size was not generated', () => {
    expect(getCdnDownloadUrl(protectedImage, 512)).toBeUndefined();
    expect(getCdnDownloadUrl(null)).toBeUndefined();
  });
});
