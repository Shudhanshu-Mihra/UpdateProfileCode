import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { IState } from 'services/redux/reducer';

import { selectReceipt } from '../Inbox/reducer/inbox.reducer';
import { getReceiptImage } from './ExpenseDetails.api';

export const useExpenseDetailsState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imageSrc, setImageSrc] = useState('');
  const [isPDF, setIsPDF] = useState(false);
  const [isImageLoading, setImageLoading] = useState(false);

  const {
    inbox: { selectedReceipt, receipts, selectedReceiptIndex },
    user: {
      token,
      user: { active_account },
    },
  } = useSelector((state: IState) => state);

  const onGoBackHandler = () => navigate(-1);

  const onClickGetNextReceiptHandler = () => {
    if (Number(selectedReceiptIndex) + 1 >= receipts.length) return;
    dispatch(selectReceipt(Number(selectedReceiptIndex) + 1));
  };

  const onClickGetPrevReceiptHandler = () => {
    if (Number(selectedReceiptIndex) < 1) return;

    dispatch(selectReceipt(Number(selectedReceiptIndex) - 1));
  };

  const onGetReceiptImageHandler = async () => {
    try {
      setImageLoading(true);
      selectedReceipt?.photos[0].match(/.pdf/g)
        ? setIsPDF(true)
        : setIsPDF(false);

      const { data } = await getReceiptImage(
        selectedReceipt?.photos[0] || '',
        token,
        active_account || ''
      );

      setImageSrc(URL.createObjectURL(data) || '');
      setImageLoading(false);
    } catch (error) {
      console.log(error);
      setImageLoading(false);
    } finally {
      setImageLoading(false);
    }
  };

  return {
    selectedReceipt,
    imageSrc,
    receipts,
    selectedReceiptIndex,
    isImageLoading,
    isPDF,
    onGetReceiptImageHandler,
    onGoBackHandler,
    onClickGetNextReceiptHandler,
    onClickGetPrevReceiptHandler,
  };
};
