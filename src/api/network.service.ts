import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const networkInstance = axios.create();

networkInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

networkInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const get = (url: string, params = {}, config = {}) => {
  return new Promise((resolve, reject) => {
    networkInstance
      .get(url, { params: params, ...config })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const post = (
  url: string,
  params: Record<string, never> | undefined,
  config = {},
) => {
  return new Promise((resolve, reject) => {
    networkInstance
      .post(url, params, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default networkInstance;
