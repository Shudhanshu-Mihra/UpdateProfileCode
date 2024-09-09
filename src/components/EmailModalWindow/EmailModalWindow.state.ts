import React, { useState } from 'react';

interface IuseEmailModalWindowState {
  toValue: string;
  subjectValue: string;
  messageValue: string;
}

export const useEmailModalWindowState = () => {
  const initialState = {
    toValue: '',
    subjectValue: '',
    messageValue: '',
  };
  const [state, setState] = useState<IuseEmailModalWindowState>(initialState);

  const onChangeStateFieldHandler = (optionName: string, value: string) =>
    setState((prevState) => ({
      ...prevState,
      [optionName]: value,
    }));

  const onChangeToFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('toValue', event.target.value);

  const onChangeSubjectFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('subjectValue', event.target.value);

  const onChangeMessageFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => onChangeStateFieldHandler('messageValue', event.target.value);

  const inputFields = [
    {
      label: 'To',
      value: state.toValue,
      onChange: onChangeToFieldHandler,
    },
    {
      label: 'Subject',
      value: state.subjectValue,
      onChange: onChangeSubjectFieldHandler,
    },
    {
      label: 'Message',
      height: '159px',
      value: state.messageValue,
      onChange: onChangeMessageFieldHandler,
      isTextArea: true,
    },
  ];
  return {
    inputFields,
  };
};
