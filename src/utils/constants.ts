import path from 'path';
import { fileURLToPath } from 'url';

export const GENERATOR_NAME = 'prisma-generator-repo';

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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const __filename = fileURLToPath(import.meta.url); // eslint-disable-line no-underscore-dangle
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, '../');
