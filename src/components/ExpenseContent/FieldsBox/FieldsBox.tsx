import { FC } from 'react';

import { CheckboxItem } from 'components/Checkbox';
import { CustomDatePicker } from 'components/CustomDatePicker';
import { CustomSelect } from 'components/CustomSelect';
import { Input } from 'components/Input';
import { TInputFields } from '../ExpenseDetailsContent.constants';
import { ExpenseDetailsContentItem } from '../ExpenseDetailsContentItem';

import { FiedlsBoxStyles as Styled } from './FiledsBox.style';

interface IFieldsBox {
  inputFields: TInputFields;
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

export const FieldsBox: FC<IFieldsBox> = (props) => {
  const {
    inputFields,
    datePickerRef,
    formattedDate,
    isOpen,
    selectedDate,
    onForbiddenCharacterClick,
    onClickOutsideDatePickerHandler,
    onDatePickerClickHandler,
  } = props;

  const isInputField = (item: any): item is { inputType: string; value: string; isTextArea?: boolean } => {
    return item.type === 'input' || item.type === 'number';
  };

  const isCheckboxField = (item: any): item is { value: boolean; onChangeCheckbox: (e: any) => void; labelText: string } => {
    return item.type === 'checkbox';
  };

  return (
    <>
      {inputFields.map((item) => (
        <ExpenseDetailsContentItem key={item.label} label={item.label}>
          {item.type === 'date' ? (
            <CustomDatePicker
              isInputDate
              onChange={item.onChangeDate}
              onDatePickerClickHandler={onDatePickerClickHandler}
              onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
              isDatePickerOpen={isOpen}
              selectedDate={selectedDate}
              formattedDate={formattedDate}
              datePickerRef={datePickerRef}
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
          ) : isInputField(item) ? (
            <Input
              value={item.value}
              inputType={item.inputType}
              onChangeValue={item.onChange}
              isTextArea={item.isTextArea}
              isHiddenLabel
              isNoMargin
              isRemoveBorder
              onKeyDown={onForbiddenCharacterClick}
            />
          ) : isCheckboxField(item) ? (
            <Styled.CheckBoxWrapper>
              <CheckboxItem
                name={item.label}
                isChecked={item.value}
                labelText={item.labelText}
                onChange={item.onChangeCheckbox}
              />
            </Styled.CheckBoxWrapper>
          ) : <div style={{marginBottom:"20px"}}>
             {item.value}
            </div>}
        </ExpenseDetailsContentItem>
      ))}
    </>
  );
};
