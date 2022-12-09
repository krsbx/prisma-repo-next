import fs from 'fs';
import path from 'path';
import { execAsync } from './utils/common';

describe('Prisma Repository Generator', () => {
  it('Not blocking normal migrations process', async () => {
    try {
      await execAsync('npx prisma migrate dev --schema ./sample.prisma', {
        cwd: __dirname,
      });
    } catch {
      fail('Migrations failed in the systems');
    }
  });

  it('Can generate repository file', async () => {
    const dirInfo = fs.readdirSync(path.join(__dirname, 'out'));

    expect(dirInfo.length).toBeGreaterThan(1);
  });

  it('Can generate repositories file', async () => {
    const dirInfo = fs.readdirSync(path.join(__dirname, 'out'));

    const postIndex = dirInfo.findIndex((dir) => dir === 'post.ts');
    const userIndex = dirInfo.findIndex((dir) => dir === 'user.ts');

    expect(postIndex !== -1 && userIndex !== -1).toBe(true);
  });

  it('Can generate repository file', async () => {
    const dirInfo = fs.readdirSync(path.join(__dirname, 'out'));

    const repositoryIndex = dirInfo.findIndex((dir) => dir === 'prisma-repo.ts');

    expect(repositoryIndex !== -1).toBe(true);
  });

  it('Can generate base repository file', async () => {
    const dirInfo = fs.readdirSync(path.join(__dirname, 'out'));

    const baseRepondex = dirInfo.findIndex((dir) => dir === 'baseRepository.ts');

    expect(baseRepondex !== -1).toBe(true);
  });
});
