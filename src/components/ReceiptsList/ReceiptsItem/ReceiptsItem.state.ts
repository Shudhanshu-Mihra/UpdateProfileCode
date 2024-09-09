import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';

import { selectReceiptWithId } from 'screens/Inbox/reducer/inbox.reducer';

import { ROUTES } from 'constants/routes';

interface IuseReceiptsItemState {
  receiptId: string;
}

export const useReceiptsItemState = (props: IuseReceiptsItemState) => {
  const { receiptId } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    user: { userInfo },
  } = useSelector((state: IState) => state);

  const onReceiptDetailsClickHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    dispatch(selectReceiptWithId(receiptId));
    navigate('inbox/receipt-details');
  };
  return {
    ...userInfo,
    onReceiptDetailsClickHandler,
  };
};
