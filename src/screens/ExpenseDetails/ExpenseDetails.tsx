import { FC, useEffect , memo } from 'react';

import { ReceiptDetailsHeader } from 'components/ReceiptDetailsHeader';
import { PhotoPreview } from 'components/PhotoPreview';
import { PhotoDetails } from 'components/PhotoDetails';

import { ExpenseDetailsStyles as Styled } from './ExpenseDetails.style';
import { useExpenseDetailsState } from './ExpenseDetails.state';
import { usePhotoDetailsContentState } from 'components/PhotoDetails/PhotoDetailsContent/PhotoDetailsContent.state';
import { CheckboxItem } from 'components/Checkbox';
import { ExpenseContent } from 'screens/ExpenseReport/ExpenseContent';
import { ExpenseDetailsContent } from 'components/ExpenseContent/ExpenseDetailsContent';
import { ExpenseInformation } from 'components/ExpenseInformation/ExpenseInformation';

export const ExpenseDetails: FC = memo(() => {
  const {
    onGoBackHandler,
    onClickGetNextReceiptHandler,
    onClickGetPrevReceiptHandler,
    onGetReceiptImageHandler,
    imageSrc,
    selectedReceipt,
    receipts,
    selectedReceiptIndex,
    isImageLoading,
    isPDF,
  } = useExpenseDetailsState();

  const {
    isLoading,
    onChangePaymentStatus,
    onChangePublishStatus,
    isPaymentStatus,
    isPublishStatus
  } = usePhotoDetailsContentState();

  useEffect(() => {
    onGetReceiptImageHandler();
  }, [selectedReceipt]);

  return (
    <Styled.Section>
      <ReceiptDetailsHeader
        onClickGetNextReceiptHandler={onClickGetNextReceiptHandler}
        onClickGetPrevReceiptHandler={onClickGetPrevReceiptHandler}
        totalReceiptsCount={receipts?.length}
        currentReceiptPosition={Number(selectedReceiptIndex) + 1}
        onGoBackHandler={onGoBackHandler}
        customId={selectedReceipt?.custom_id}
      />
      <Styled.Wrapper>
       <><ExpenseInformation/></>
        <>
          <>
            <ExpenseDetailsContent />
          </>
        </>
      </Styled.Wrapper>
    </Styled.Section>
  );
});
