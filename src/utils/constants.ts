import path from 'path';
import appRootPath from 'app-root-path';

export const GENERATOR_NAME = 'Prisma Repo Generator';

export const TYPE_SUFFIX = {
  WHERE_INPUT: 'WhereInput',
  SELECT: 'Select',
  INCLUDE: 'Include',
  CREATE_INPUT: 'CreateInput',
  UPDATE_INPUT: 'UpdateInput',
  WHERE_UNIQUE_INPUT: 'WhereUniqueInput',
  ORDER_BY_WITH_RELATION_INPUT: 'OrderByWithRelationInput',
  DELEGATE: 'Delegate',
  GROUP_BY: 'GroupByOutputType',
} as const;

export const DEFAULT_PATH = `${appRootPath.path}/src/repository`;

export const PRISMA_LOGGER = {
  QUERY: 'query',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
} as const;

export const PRISMA_LOGGER_VALUES = Object.values(PRISMA_LOGGER) as PR.PrismaLoggerType[];

export const PKG_ROOT = path.join(__dirname, '../../');
