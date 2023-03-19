import fs from 'fs';
import snakeCase from 'lodash.snakecase';

export const constantCase = (value: string) => snakeCase(value).toUpperCase();

export const isExist = (filePath: string) => fs.existsSync(filePath);
