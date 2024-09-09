import axios, { AxiosRequestConfig } from 'axios';

import { setTokens } from 'screens/SignUp/reducer/signup.reducer';
import { persisterStore, store } from 'services/redux/store';

import { TypeStore } from './redux/store';
import { isTokenExpired } from './utils';
import { CONFIG } from 'constants/config';

export const injectStore = (_store: TypeStore) => {
  let store: TypeStore;
  store = _store;
};

let isRefreshing = false;
let refreshSubscribers: any[] = [];

const processQueue = (error: null | string, token: string | null = null) => {
  refreshSubscribers.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  refreshSubscribers = [];
};
export interface ICapiumAuthPayload {
  email: string;
  password: string;
}
const capiumBaseURL = 'https://dev-identity.capium.co.uk/api/Auth/AuthenticateUser';
const googleUserInfoURL = 'https://www.googleapis.com/oauth2/v3/userinfo';
const refreshTokensURL = 'auth/refresh-tokens';

const fetchTokens = (refreshToken: string) => {
  return axios.post(
    `${CONFIG.apiUrl}${refreshTokensURL}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
};

const instance = axios.create({
  baseURL: CONFIG.apiUrl,
  timeout: 60000,
});

export const setInterseptors = () => {
  instance.interceptors.request.use(async (config: AxiosRequestConfig<any>) => {
    const token = store.getState().user.token;
    const refreshToken = store.getState().user.refreshToken;

    if (!token) {
      return config;
    }
    if (config.headers!.Authorization) {
      return config;
    }

    if (isTokenExpired(token)) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          refreshSubscribers.push({ resolve, reject });
          return config;
        })
          .then((token) => {
            config.headers &&
              (config.headers['Authorization'] = `Bearer ${token}`);
            return {
              ...config,
              headers: { Authorization: `Bearer ${token}` },
            };
          })
          .catch((error) => {
            return Promise.reject(error);
          });
      }
      isRefreshing = true;

      try {
        const { data } = await fetchTokens(refreshToken);
        store.dispatch(
          setTokens({
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
          })
        );
        processQueue(null, data.access_token);
        isRefreshing = false;

        return {
          ...config,
          headers: { Authorization: `Bearer ${data.access_token}` },
        };
      } catch (err: any) {
        store.dispatch({ type: 'LOGOUT' });
        processQueue(err, null);
        isRefreshing = false;
        return config;
      }
    } else {
      return {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  });
  return instance;
};

const token = store.getState().user.token;
export const apiServices = {
  postData: async (requestUrl: string, payload: any) => {
    const token = store.getState().user.token;
    console.warn('()()post-post', token);
    return await instance.post(`${requestUrl}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  fetchData: async (requestUrl: string, params?: {}) => {
    const token = store.getState().user.token;
    console.warn('()()fetch-get', token);
    return instance.get(`${requestUrl}`, { params , headers: { Authorization: `Bearer ${token}` } });
  },
  // fetchData: (requestUrl: string, params?: {}, config?: AxiosRequestConfig) => {
  //   return instance.get(requestUrl, { params, ...config });
  // },
  changeData: async (requestUrl: string, payload: any) => {
    const token = store.getState().user.token;
    console.warn('()()change-put', token);
    return instance.put(`${requestUrl}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  deleteData: async (requestUrl: string, params?: {}) => {
    const token = store.getState().user.token;
    console.warn('()()delete-delete', token);
    return instance.delete(`${requestUrl}`, { params, headers: { Authorization: `Bearer ${token}` } });
  },
  updateData: async (requestUrl: string, payload: any) => {
    const token = store.getState().user.token;
    console.warn('()()update-patch', token);
    return instance.patch(`${requestUrl}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  capiumFetchData: async (payload: ICapiumAuthPayload) => {
    const token = store.getState().user.token;
    console.warn('()()capium-post', token);
    const data = axios.post(capiumBaseURL, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  },
  getGoogleUserInfo: async (token: string) => {
    console.warn('()()google-get', token);
    const data = await axios.get(googleUserInfoURL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  },
};
