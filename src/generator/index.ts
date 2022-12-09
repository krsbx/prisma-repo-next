import { CustomGeneratorOptions, generatorHandler } from '@prisma/generator-helper';
import { logger } from '@prisma/sdk';
import path from 'path';
import * as templateFile from 'template-file';
import { assignRepositories } from 'utils/assign';
import { camelCase, constantCase } from 'utils/common';
import { DEFAULT_PATH, GENERATOR_NAME, PKG_ROOT } from 'utils/constants';
import { getPrismaLogger } from 'utils/prisma';
import { copyFile, writeFileSafely } from 'utils/writeFileSafely';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../../package.json');

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`);
    return {
      version,
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    };
  },
  onGenerate: async (options: CustomGeneratorOptions) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
    const basePath = options.generator.output?.value ?? DEFAULT_PATH;
    const rootDir = path.join(PKG_ROOT, 'template');
    const repoTemplatePath = path.join(rootDir, 'repository.ts');
    const baseRepoTemplatePath = path.join(rootDir, 'baseRepository.ts');
    const templatePath = path.join(rootDir, 'prisma-repo.ts');

    const repoLocation = path.join(basePath, 'prisma-repo.ts');
    const baseRepoLocation = path.join(basePath, 'baseRepository.ts');

    const prismaLogger = getPrismaLogger(options.generator.config);
    const prismaStructures: string[] = [];
    const modelsName: { key: string; value: string }[] = [];
    const modelStructure: { key: string; value: string }[] = [];
    const modelTypes: {
      key: string;
      value: PR.ModelTypes<string>;
    }[] = [];

    // Generate the repository file
    options.dmmf.datamodel.models.forEach(async (model) => {
      assignRepositories(prismaStructures, modelsName, modelStructure, modelTypes, model);

      const writeLocation = path.join(basePath, `${camelCase(model.name)}.ts`);

      const content = await templateFile.renderFile(repoTemplatePath, {
        repository: model.name,
        repositoryName: `MODELS_NAME.${constantCase(model.name)}`,
      });

      await writeFileSafely(writeLocation, content);
    });

    const content = await templateFile.renderFile(templatePath, {
      log: prismaLogger,
      prismaStructures,
      modelsName,
      modelStructure,
      modelTypes,
    });

    await Promise.all([
      copyFile(baseRepoTemplatePath, baseRepoLocation),
      writeFileSafely(repoLocation, content, true),
    ]);
  },
});
