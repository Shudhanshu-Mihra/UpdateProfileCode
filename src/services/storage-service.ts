const TOKEN_STORAGE_KEY = 'token';
const USER_STORAGE_KEY = 'user';

interface IUserData {
  email?: string;
  password?: string;
  newPassword?: string;
}
class StorageService {
  public getToken = () => {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  };
  public setToken = (token: string) => {
    return localStorage.setItem(TOKEN_STORAGE_KEY, token);
  };
  public clearStorage = () => {
    return localStorage.clear();
  };
  public setUser = (data: IUserData) => {
    return localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data));
  };
  public getUser = () => {
    const data = localStorage.getItem(USER_STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  };
  public removeUser = async () => {
    return localStorage.removeItem(USER_STORAGE_KEY);
  };
  public removeToken = async () => {
    return localStorage.removeItem(TOKEN_STORAGE_KEY);
  };
}

export const storageService = new StorageService();
