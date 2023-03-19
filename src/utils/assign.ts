import { DMMF } from '@prisma/generator-helper';
import camelCase from 'lodash.camelcase';
import { constantCase } from './common';

export const assignRepositories = (
  prismaStructures: string[],
  modelsName: { key: string; value: string }[],
  modelStructure: { key: string; value: string }[],
  modelTypes: {
    key: string;
    value: PR.ModelTypes<string>;
  }[],
  model: DMMF.Model
) => {
  // Prisma.{{ operation.model }}WhereUniqueInput
  const hasUnique = model.fields.some((field) => field.isUnique);
  // Prisma.{{ operation.model }}WhereUniqueInput
  const hasRelation = model.fields.some((field) => {
    if (!field.relationFromFields) return false;

    return field.relationFromFields.length;
  });

  prismaStructures.push(model.name);
  modelsName.push({
    key: constantCase(model.name),
    value: `'${camelCase(model.name)}'`,
  });
  modelStructure.push({
    key: camelCase(model.name),
    value: model.name,
  });
  modelTypes.push({
    key: camelCase(model.name),
    value: {
      CreateInput: `Prisma.${model.name}CreateInput | Prisma.${model.name}UncheckedCreateInput`,
      UpdateInput: `Prisma.${model.name}UpdateInput | Prisma.${model.name}UncheckedUpdateInput`,
      WhereUniqueInput: hasUnique ? `Prisma.${model.name}WhereUniqueInput` : `unknown`,
      OrderByWithRelationInput: `Prisma.${model.name}OrderByWithRelationInput`,
      Include: hasRelation ? `Prisma.${model.name}Include` : `unknown`,
      GroupByOutputType: `Prisma.${model.name}GroupByOutputType`,
      WhereInput: `Prisma.${model.name}WhereInput`,
      Delegate: `Prisma.${model.name}Delegate`,
      Select: `Prisma.${model.name}Select`,
      Return: `Prisma.${model.name}GetPayload<T>`,
    },
  });
};
