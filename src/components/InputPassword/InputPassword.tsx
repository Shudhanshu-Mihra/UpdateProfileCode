import React from 'react';

import { Icon } from 'components/Icons/Icons';

import { Styled } from './InputPassword.style';
import { ErrorText } from '../ErrorText';

interface InputProps {
  inputName?: string;
  errorText?: string;
  touched?: boolean;
  isHiddenLabel?: boolean;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string;
  onClick?: () => void;
  showPassword: boolean;
  password: string;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputPassword: React.FC<InputProps> = (props) => {
  const {
    text,
    showPassword,
    password,
    inputName,
    errorText,
    touched,
    isHiddenLabel,
    onChangePassword,
    onClick,
    onBlur,
  } = props;

  return (
    <>
      <Styled.WrapperInput>
      {isHiddenLabel ? null : <Styled.Label>{text}</Styled.Label>}
        <Styled.Input
          data-testid="input-field"
          isError={!!errorText && touched}
          onBlur={onBlur}
          name={inputName}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={onChangePassword}
        />
        <Styled.Button onClick={onClick} data-testid="button">
          <Icon
            type={showPassword ? 'hidePassword' : 'showPassword'}
          />
        </Styled.Button>
        {touched && !!errorText && <ErrorText errorText={errorText} />}
      </Styled.WrapperInput>
    </>
  );
};
