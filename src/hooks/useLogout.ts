import { useDispatch } from 'react-redux';

import { logOut } from '../screens/Settings/settings.api';

export const useLogout = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const { data } = await logOut();
      data.message === 'Success' &&
        dispatch({
          type: 'LOGOUT',
        });
    } catch (error) {
      console.log(error);
    }
  };
  return logoutHandler;
};
