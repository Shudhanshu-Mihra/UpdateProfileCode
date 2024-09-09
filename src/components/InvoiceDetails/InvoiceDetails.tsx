import { FC } from 'react';

import { TInvoiceInputFields } from '../../screens/SalesInvoicesDetails/salesInvoicesDetails.constants';
import { CustomDatePicker } from '../CustomDatePicker';
import { CustomSelect } from '../CustomSelect';

import { Icon } from '../Icons';
import { Input } from '../Input';
import { StatusLabel } from '../StatusLabel/StatusLabel';

import { InvoiceDescriptionBar } from './InvoiceDescriptionBar';
import { InvoiceDatailsStyles as Styled } from './InvoiceDetails.style';
import { InvoiceDetailsItem } from './InvoiceDetailsItem';
import { UnitFields } from './UnitFields';

interface IInvoiceDetailsProps {
  statusValue: TStatuses;
  inputFields: TInvoiceInputFields;
  onDatePickerClickHandler: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onClickOutsideDatePickerHandler: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  isOpen: boolean;
  formattedDate: string;
  datePickerRef: React.RefObject<HTMLButtonElement>;
  selectedDate: Date | null;
  onForbiddenCharacterClick: (event: React.KeyboardEvent<Element>) => void;
}

export const InvoiceDetails: FC<IInvoiceDetailsProps> = (props) => {
  const {
    statusValue,
    inputFields,
    datePickerRef,
    formattedDate,
    isOpen,
    onForbiddenCharacterClick,
    selectedDate,
    onClickOutsideDatePickerHandler,
    onDatePickerClickHandler,
  } = props;
  return (
    <Styled.MainWrapper>
      <Styled.MainFieldsWrapper>
        <Styled.TopLinesWrapper>
          <Styled.StatusRow>
            Status
            <Styled.StatusIconWrapper>
              <Icon type="active" />
            </Styled.StatusIconWrapper>
            <StatusLabel status={statusValue} />
          </Styled.StatusRow>
          <Styled.FieldsWrapper>
            <Styled.LeftFieldsWrapper>
              {inputFields.slice(0, 3).map((item) => {
                return (
                  <InvoiceDetailsItem key={item.label} label={item.label}>
                    {item.type === 'date' ? (
                      <CustomDatePicker
                        isInputDate
                        onChange={item.onChangeDate}
                        onDatePickerClickHandler={onDatePickerClickHandler}
                        onClickOutsideDatePickerHandler={
                          onClickOutsideDatePickerHandler
                        }
                        isDatePickerOpen={isOpen}
                        selectedDate={selectedDate}
                        formattedDate={formattedDate}
                      />
                    ) : item.type === 'select' ? (
                      <CustomSelect
                        value={item.value}
                        options={item.options}
                        marginBottom="0px"
                        isDisabled={item.isDisabled}
                        isRemoveBorder
                      />
                    ) : (
                      <Input
                        value={item.value as string}
                        onChangeValue={item.onChange}
                        isHiddenLabel
                        isRemoveBorder
                        isNoMargin
                      />
                    )}
                  </InvoiceDetailsItem>
                );
              })}
            </Styled.LeftFieldsWrapper>
            <Styled.RightFieldsWrapper>
              {inputFields.slice(3).map((item) => {
                return (
                  <InvoiceDetailsItem
                    key={item.label}
                    label={item.label}
                    isRightSideLabel
                  >
                    {item.type === 'date' ? (
                      <CustomDatePicker
                        isInputDate
                        isDatePickerOpen={isOpen}
                        selectedDate={selectedDate}
                        formattedDate={formattedDate}
                        onChange={item.onChangeDate}
                      />
                    ) : item.type === 'select' ? (
                      <CustomSelect
                        value={item.value}
                        options={item.options}
                        onChangeValueHandler={item.onChangeSelect}
                        marginBottom="0px"
                        isDisabled={item.isDisabled}
                        isRemoveBorder
                      />
                    ) : (
                      <Input
                        value={item.value}
                        onChangeValue={item.onChange}
                        isHiddenLabel
                        isRemoveBorder
                        isNoMargin
                      />
                    )}
                  </InvoiceDetailsItem>
                );
              })}
            </Styled.RightFieldsWrapper>
          </Styled.FieldsWrapper>
        </Styled.TopLinesWrapper>

        <InvoiceDescriptionBar />
        <UnitFields />
        <Styled.BottomWrapper>
          <Styled.AddNewLine>Add new line</Styled.AddNewLine>
          <Styled.PriceBox>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <Styled.PriceBoxTitle>Net</Styled.PriceBoxTitle>
              <Input
                value=""
                onChangeValue={() => {}}
                isNoMargin
                isHiddenLabel
                isDisabled
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <Styled.PriceBoxTitle>Tax</Styled.PriceBoxTitle>
              <Input
                value=""
                onChangeValue={() => {}}
                isNoMargin
                isHiddenLabel
                isDisabled
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <Styled.PriceBoxTitle>Total</Styled.PriceBoxTitle>
              <Input
                value=""
                onChangeValue={() => {}}
                isNoMargin
                isHiddenLabel
                isDisabled
              />
            </div>
          </Styled.PriceBox>
        </Styled.BottomWrapper>
      </Styled.MainFieldsWrapper>
    </Styled.MainWrapper>
  );
};
