export const OSS_BASE_URL = 'https://personl-website.oss-cn-shenzhen.aliyuncs.com/life-images-upload';

export const ossAsset = (path: string): string => `${OSS_BASE_URL}${path}`;
