import { create } from 'apisauce';
import snakeCase from 'lodash/snakeCase';
import camelCase from 'lodash/camelCase';
import { mapKeysDeep } from './index';

const { BASE_URL } = process.env;
const apiClients = {
  sellgo: null,
  default: null
};
export const getApiClient = (type = 'sellgo') => apiClients[type];
export const generateApiClient = (type = 'sellgo') => {
  switch (type) {
    case 'sellgo':
      apiClients[type] = createApiClientWithTransForm(BASE_URL);
      return apiClients[type];
    default:
      apiClients.default = createApiClientWithTransForm(BASE_URL);
      return apiClients.default;
  }
};

export const createApiClientWithTransForm = baseURL => {
  const api = create({
    baseURL,
    headers: { 'Content-Type': 'application/json' }
  });
  api.addResponseTransform(response => {
    const { ok, data } = response;
    if (ok && data) {
      response.data = mapKeysDeep(data, keys => camelCase(keys));
    }
    return response;
  });

  api.addRequestTransform(request => {
    const { data } = request;
    if (data) {
      request.data = mapKeysDeep(data, keys => snakeCase(keys));
    }
    return request;
  });
  return api;
};
