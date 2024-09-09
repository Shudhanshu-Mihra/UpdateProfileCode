import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { ROUTES } from 'constants/routes';

export const PrivateRouter: FC = () => {
  const userState = useSelector((state: IState) => state.user);

  const location = useLocation();

  return userState.token ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.login} state={{ from: location }} />
  );
};
