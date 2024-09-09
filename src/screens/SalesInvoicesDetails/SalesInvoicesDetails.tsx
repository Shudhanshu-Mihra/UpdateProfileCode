import { FC } from 'react';

import { ReceiptDetailsHeader as InvoiceDetailsHeader } from 'components/ReceiptDetailsHeader';
import { PhotoPreview } from 'components/PhotoPreview';
import { InvoiceDetails } from 'components/InvoiceDetails';
import { ButtonsBox } from 'components/InvoiceDetails/ButtonsBox';

import { SalesInvoicesDetailsStyles as Styled } from './SalesInvoicesDetails.styles';
import { useSalesInvoicesDetailsState } from './useSalesInvoicesDetails.state';

export const SalesInvoicesDetails: FC = () => {
  const {
    currencyValue,
    datePickerRef,
    dateValue,
    formattedDate,
    inputFields,
    isOpen,
    isLoading,
    statusValue,
    onDatePickerClickHandler,
    onClickOutsideDatePickerHandler,
    onForbiddenCharacterClick,
    onClickGetNextInvoiceHandler,
    onClickGetPrevInvoiceHandler,
    onGoBackHandler,
  } = useSalesInvoicesDetailsState();
  return (
    <Styled.Section>
      <InvoiceDetailsHeader
        onClickGetNextReceiptHandler={onClickGetNextInvoiceHandler}
        onClickGetPrevReceiptHandler={onClickGetPrevInvoiceHandler}
        totalReceiptsCount={0}
        currentReceiptPosition={0}
        onGoBackHandler={onGoBackHandler}
        customId={'si1'}
      />
      <Styled.Wrapper>
        <Styled.PagesWrapper>
          <PhotoPreview imageSrc={''} isImageLoading={false} isPDF={false} />
          <InvoiceDetails
            datePickerRef={datePickerRef}
            statusValue="review"
            inputFields={inputFields}
            onDatePickerClickHandler={onDatePickerClickHandler}
            onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
            isOpen={isOpen}
            formattedDate={formattedDate}
            selectedDate={dateValue ? new Date(dateValue) : null}
            onForbiddenCharacterClick={onForbiddenCharacterClick}
          />
        </Styled.PagesWrapper>
        <ButtonsBox />
      </Styled.Wrapper>
    </Styled.Section>
  );
};
