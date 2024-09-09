import React from 'react';

import { Styled } from './Input.style';
import { ErrorText } from '../ErrorText';
import { CustomDatePicker } from '../CustomDatePicker';

interface InputProps {
  isRemoveBorder?: boolean;
  inputHeight?: string;
  isTextArea?: boolean;
  isNoMargin?: boolean;
  inputName?: string;
  errorText?: string;
  placeHolder?: string;
  inputTheme?: 'search';
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRemoveBoxShadow?: boolean;
  touched?: boolean;
  isHiddenLabel?: boolean;
  text?: string;
  textCode?:string;
  onChangeValue?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  value: string;
  isInputDate?: boolean;
  selectedDate?: Date | null;
  inputType?: string;
  onFocus?: () => void;
  isDisabled?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    text,
    inputName,
    textCode,
    inputTheme,
    isTextArea,
    inputHeight,
    value,
    errorText,
    touched,
    isHiddenLabel,
    isNoMargin,
    placeHolder,
    isInputDate,
    selectedDate,
    inputType,
    isDisabled,
    isRemoveBoxShadow,
    isRemoveBorder,
    onChangeValue,
    onKeyDown,
    onBlur,
    onFocus,
  } = props;
  return (
    <Styled.InputWrapper data-testid="input-component" isNoMargin={isNoMargin}>
      {isHiddenLabel ? null : <Styled.Label>{text}{textCode}</Styled.Label>}
      {isTextArea ? (
        <Styled.TextArea
          inputHeight={inputHeight}
          onChange={onChangeValue}
          value={value}
          name={inputName}
        />
      ) : (
        <>
          {isInputDate ? (
            <CustomDatePicker
              isInputDate={isInputDate}
              selectedDate={selectedDate}
              formattedDate=""
            />
          ) : (
            <Styled.Input
              data-testid="input-field"
              inputTheme={inputTheme}
              type={inputType || 'text'}
              isError={!!errorText && touched}
              onBlur={onBlur}
              onFocus={onFocus}
              name={inputName}
              value={value}
              onChange={onChangeValue}
              onKeyDown={onKeyDown}
              placeholder={placeHolder}
              disabled={isDisabled}
              isDisabled={isDisabled}
              isRemoveBoxShadow={isRemoveBoxShadow}
              isRemoveBorder={isRemoveBorder}
            />
          )}
        </>
      )}
      {touched && !!errorText && <ErrorText errorText={errorText} />}
    </Styled.InputWrapper>
  );
};
