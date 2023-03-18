import _ from 'lodash';
import BaseRepository from './baseRepository';
import { AnyRecord, ModelStructure, ModelTypes, ModelScalarFields, MODELS_NAME } from './prisma-repo';

// This type will be used if you want to extends the functions in {{ repository }} Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof {{ repositoryName }}]['Where'];
type Select = ModelTypes[typeof {{ repositoryName }}]['Select'];
type Include = ModelTypes[typeof {{ repositoryName }}]['Include'];
type Create = ModelTypes[typeof {{ repositoryName }}]['Create'];
type Update = ModelTypes[typeof {{ repositoryName }}]['Update'];
type Cursor = ModelTypes[typeof {{ repositoryName }}]['Cursor'];
type Order = ModelTypes[typeof {{ repositoryName }}]['Order'];
type Delegate = ModelTypes[typeof {{ repositoryName }}]['Delegate'];
type GroupBy = ModelTypes[typeof {{ repositoryName }}]['GroupBy'];
type Scalar = ModelScalarFields<typeof {{ repositoryName }}>;
type Model = ModelStructure[typeof {{ repositoryName }}];
/*  eslint-enable @typescript-eslint/no-unused-vars */


class {{ repository }} extends BaseRepository({{ repositoryName }}) {
}

export default {{ repository }}
