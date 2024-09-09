import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import {
  getUserCompanies,
  selectActiveAccount,
} from 'components/Header/header.api';

import { getCompaniesLogoHandler, setCompanyLogoHandler } from 'services/utils';

import { switchAccount } from '../SignUp/reducer/signup.reducer';

import { ROUTES } from 'constants/routes';

export const useWorkSpacePickerState = () => {
  const [companies, setCompanies] = useState<ICompaniesSwitcher[] | []>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    user: { token },
  } = useSelector((state: IState) => state);

  const getAllCompaniesHandler = async () => {
    try {
      const { data } = await getUserCompanies();
      const companiesLogo = await getCompaniesLogoHandler(data, token);
      const companiesWithLogo = setCompanyLogoHandler(data, companiesLogo);
      setCompanies(companiesWithLogo);
    } catch (error) {
      console.log(error);
    }
  };

  const onChooseCompanyClickHandler = async (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    try {
      const { data } = await selectActiveAccount(event.currentTarget.id);
      dispatch(switchAccount(data));
      navigate(ROUTES.purchaseInvoices, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    companies,
    getAllCompaniesHandler,
    onChooseCompanyClickHandler,
  };
};
