import { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetListParams, GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, Identifier, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult, fetchUtils } from 'ra-core';

const httpClient = fetchUtils.fetchJson

export const dataProvider: DataProvider = {
  getList: async function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetListParams): Promise<GetListResult<RecordType>> {
    const {json} = await httpClient(`${import.meta.env.VITE_BACKEND_URL}/${resource}`)
    return {
      data: json,
      total: json.length
    }
  },
  getOne: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetOneParams<RecordType>): Promise<GetOneResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  getMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyParams): Promise<GetManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  getManyReference: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  update: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: UpdateParams<any>): Promise<UpdateResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  updateMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: UpdateManyParams<any>): Promise<UpdateManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  create: function <RecordType extends Omit<RaRecord<Identifier>, 'id'> = any, ResultRecordType extends RaRecord<Identifier> = RecordType & { id: Identifier; }>(resource: string, params: CreateParams<any>): Promise<CreateResult<ResultRecordType>> {
    throw new Error('Function not implemented.');
  },
  delete: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  deleteMany: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  }
}