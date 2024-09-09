import { FC } from 'react';

import { Styled } from './ErrorText.styles';

interface IErrorTextProps {
  errorText: string;
}
export const ErrorText: FC<IErrorTextProps> = (props) => {
  const { errorText } = props;
  return <Styled.ErrorText>{errorText}</Styled.ErrorText>;
};
