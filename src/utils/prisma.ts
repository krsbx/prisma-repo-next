import { CustomGeneratorOptions } from '@prisma/generator-helper';
import { PRISMA_LOGGER } from './constants';

const convertToString = (value: PR.PrismaLoggerType[]) =>
  `[${value.map((type) => `'${type}'`).join(', ')}]`;

export const getPrismaLogger = (config: CustomGeneratorOptions['generator']['config']) => {
  const loggerSettings: PR.PrismaLoggerType[] = [];

  if (config.error === 'true') loggerSettings.push(PRISMA_LOGGER.ERROR);
  if (config.info === 'true') loggerSettings.push(PRISMA_LOGGER.INFO);
  if (config.query === 'true') loggerSettings.push(PRISMA_LOGGER.QUERY);
  if (config.warn === 'true') loggerSettings.push(PRISMA_LOGGER.WARN);

  return convertToString(loggerSettings);
};
