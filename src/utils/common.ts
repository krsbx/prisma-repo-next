import fs from 'fs';

export const camelCase = (value: string) =>
  value
    .replace(/\s(.)/g, (str) => str.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (str) => str.toLowerCase());

export const constantCase = (value: string) => value.toUpperCase().replace(/ /g, '_');

export const isExist = (filePath: string) => fs.existsSync(filePath);
