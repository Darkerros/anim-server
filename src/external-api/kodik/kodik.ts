import axios, { Method } from 'axios';
import * as process from 'process';
import { ResponseKodik } from './types/response';
import { ListResource } from './types/list-resource';

const host = axios.create({
  baseURL: 'https://kodikapi.com',
});

const createRequest = (
  endpoint: string,
  method: Method,
  body: any,
  params: any = {},
) => {
  switch (method) {
    default:
      return host
        .get(endpoint, { params: { token: process.env.KODIK_KEY, ...params } })
        .then((res) => res.data);
  }
};

type TGetList = () => Promise<ResponseKodik<ListResource>>;

export const getList: TGetList = async () => {
  const resp = await createRequest('/list', 'get', null, {
    with_material_data: true,
    limit: 100,
  });
  if (resp.next_page) resp.next_page = resp.next_page.split('&page=')[1];
  return resp;
};
