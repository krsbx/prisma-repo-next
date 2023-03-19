import { CustomGeneratorOptions } from '@prisma/generator-helper';
import { PRISMA_LOGGER } from './constants';

const convertToString = (value: PR.PrismaLoggerType[]) =>
  `[${value.map((type) => `'${type}'`).join(', ')}]`;

export const getPrismaLogger = (config: CustomGeneratorOptions['generator']['config']) => {
  const loggerSettings: PR.PrismaLoggerType[] = [];

  if (Boolean(config.error) === true) loggerSettings.push(PRISMA_LOGGER.ERROR);
  if (Boolean(config.info) === true) loggerSettings.push(PRISMA_LOGGER.INFO);
  if (Boolean(config.query) === true) loggerSettings.push(PRISMA_LOGGER.QUERY);
  if (Boolean(config.warn) === true) loggerSettings.push(PRISMA_LOGGER.WARN);

  return convertToString(loggerSettings);
};
