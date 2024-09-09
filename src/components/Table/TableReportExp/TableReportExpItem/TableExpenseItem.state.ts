import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { selectReceipt } from 'screens/Inbox/reducer/inbox.reducer';

import { ROUTES } from 'constants/routes';

interface IuseTableInboxAdminItemState {
  receiptId: string;
  receiptIndex: number;
}

export const useTableExpenseState = (
  props: IuseTableInboxAdminItemState
) => {
  const { receiptIndex } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: IState) => state.user);

  const onReceiptDetailsClickHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    dispatch(selectReceipt(receiptIndex));
    navigate(ROUTES.receiptDetails);
  };
  return { ...user.userInfo, onReceiptDetailsClickHandler };
};
