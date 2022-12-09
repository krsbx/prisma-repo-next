import fs from 'fs';
import path from 'path';
import { isExist } from './common';
import { formatFile } from './formatFile';

export const writeFileSafely = async (
  writeLocation: string,
  content: string,
  overwrite = false
) => {
  if (!isExist(path.dirname(writeLocation)))
    fs.mkdirSync(path.dirname(writeLocation), {
      recursive: true,
    });

  if (isExist(writeLocation) && !overwrite) return;

  fs.writeFileSync(writeLocation, await formatFile(content));
};

export const copyFile = (sourcePath: string, destPath: string, overwrite = false) =>
  new Promise<void>((resolve, reject) => {
    if (!isExist(path.dirname(destPath)))
      fs.mkdirSync(path.dirname(destPath), {
        recursive: true,
      });

    if (isExist(destPath) && !overwrite) {
      resolve();

      return;
    }

    fs.copyFile(sourcePath, destPath, (err) => {
      if (!err) {
        resolve();

        return;
      }

      reject(err);
    });
  });
