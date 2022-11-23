//! Do not edit this file manually, it is generate by `prisma repo generator`

import { PrismaClient, Prisma, {{ #prismaStructures }} {{ this }}, {{ /prismaStructures }} } from '@prisma/client';
import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyRecord = Record<string, any>;

export type BaseOption<Include, Select> = {
  include?: Include;
  select?: Select;
};

export type Find<Select, Include, Cursor, Order, Distinct> = BaseOption<Include, Select> & {
  cursor?: Cursor;
  take?: number;
  skip?: number;
  orderBy?: Prisma.Enumerable<Order>;
  distinct?: Distinct;
};

export type CountArgs<Select, Cursor, Order, Distinct> = Omit<
  Find<Select, never, Cursor, Order, Distinct>,
  'include'
>;

export type Aggregate<Cursor, Order, Distinct> = Omit<
  CountArgs<never, Cursor, Order, Distinct>,
  'select' | 'distinct'
>;

export const prisma = new PrismaClient({
  log: {{ log }},
});

export const models = _.omit(prisma, [
  '$on',
  '$connect',
  '$disconnect',
  '$use',
  '$executeRaw',
  '$executeRawUnsafe',
  '$queryRaw',
  '$queryRawUnsafe',
  '$transaction',
]);

export const MODELS_NAME = {
{{ #modelsName }}
  {{ key }}: {{ value }},
{{ /modelsName }}
} as const;

// eslint-disable-next-line @typescript-eslint/ban-types
export type ModelStructure = {
{{ #modelStructure }}
  {{ key }}: {{ value }};
{{ /modelStructure}}
};

export type ModelName = keyof ModelStructure;

export type ModelScalarFields<T extends keyof ModelStructure> = Prisma.Enumerable<
  keyof ModelStructure[T]
>;

export type ModelDelegate = Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined;

export type ModelTypes = {
{{ #modelTypes }}
  {{ key }}: {
    Where: {{ value.WhereInput }};
    Select: {{ value.Select }};
    Include: {{ value.Include }};
    Create: {{ value.CreateInput }};
    Update: {{ value.UpdateInput }};
    Cursor: {{ value.WhereUniqueInput }};
    Order: {{ value.OrderByWithRelationInput }};
    Delegate: {{ value.Delegate }}<ModelDelegate>;
    GroupBy: {{ value.GroupByOutputType }};
  },
{{ /modelTypes }}
};