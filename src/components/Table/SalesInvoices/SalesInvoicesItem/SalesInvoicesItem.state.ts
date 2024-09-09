import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { selectInvoice } from 'screens/SalesInvoices/reducer/salesInvoices.reducer';

import { ROUTES } from 'constants/routes';

interface IuseTableInvoiceItemState {
  invoiceId: string;
  invoiceIndex: number;
}

export const useSalesInvoicesItemState = (
  props: IuseTableInvoiceItemState
) => {
  const { invoiceIndex } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: IState) => state.user);

  const onInvoiceDetailsClickHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    dispatch(selectInvoice(invoiceIndex));
    navigate(ROUTES.invoiceDetails);
  };
  return { ...user.userInfo, onInvoiceDetailsClickHandler };
};
