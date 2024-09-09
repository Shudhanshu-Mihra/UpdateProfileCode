import { FC } from 'react';

import { CheckboxItem } from '../../../Checkbox';
import { CustomDatePicker } from '../../../CustomDatePicker';
import { CustomSelect } from '../../../CustomSelect';
import { Input } from '../../../Input';
import { TInputFields } from '../photoDetailsContent.constants';
import { PhotoDetailsContentItem } from '../PhotoDetailsContentItem';

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

  const expression = "\b(?:Net|Tax|Total)\b";

  const isInputField = (item: any): item is { inputType: string; value: string; isTextArea?: boolean } => {
    return item.type === 'input' || item.type === 'number';
  };

  const isCheckboxField = (item: any): item is { value: boolean; onChangeCheckbox: (e: any) => void; labelText: string } => {
    return item.type === 'checkbox';
  };

  return (
    <>
      {inputFields.map((item) => (
        item.label != "Net" && item.label != "Tax" && item.label != "Total" &&
        <PhotoDetailsContentItem key={item.label} label={item.label}>
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
          ) : null}
        </PhotoDetailsContentItem>
      ))}
    </>
  );
};


/* import { FC } from 'react';

import { CheckboxItem } from '../../../Checkbox';
import { CustomDatePicker } from '../../../CustomDatePicker';
import { CustomSelect } from '../../../CustomSelect';
import { Input } from '../../../Input';
import { TInputFields } from '../photoDetailsContent.constants';
import { PhotoDetailsContentItem } from '../PhotoDetailsContentItem';

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
        <PhotoDetailsContentItem key={item.label} label={item.label}>
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
          ) : item.inputType === 'number' ? (
            <Input
              value={item.value as string}
              inputType={item.inputType}
              onChangeValue={item.onChange}
              isTextArea={item.isTextArea}
              isHiddenLabel
              isNoMargin
              isRemoveBorder
              onKeyDown={onForbiddenCharacterClick}
            />
          ) : item.type === 'input' ? (
            <Input
              value={item.value as string}
              inputType={item.inputType}
              onChangeValue={item.onChange}
              isTextArea={item.isTextArea}
              isHiddenLabel
              isRemoveBorder
              isNoMargin
            />
          ) : (
            <Styled.CheckBoxWrapper>
              <CheckboxItem
                name={item.label}
                isChecked={item.value as boolean}
                labelText={item.labelText}
                onChange={item.onChangeCheckbox}
              />
            </Styled.CheckBoxWrapper>
          )}
        </PhotoDetailsContentItem>
      ))}
    </>
  );
};
 */