import React, { FC } from 'react';
import { UploadInput } from '../UploadInput';

import { FileUploadButtonStyles as Styled } from './FileUploadButton.style';

interface IFileUploadButtonProps {
  onChangeFiles?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customButtonName: string | null;
  isRoundedButton?: boolean;
}

export const FileUploadButton: FC<IFileUploadButtonProps> = (props) => {
  const { onChangeFiles, customButtonName, isRoundedButton } = props;

  return (
    <Styled.ButtonWrapper>
      <UploadInput onChangeFiles={onChangeFiles} />
      <Styled.Label htmlFor="uploadFile" isRoundedButton={isRoundedButton}>{customButtonName}</Styled.Label>
    </Styled.ButtonWrapper>
  );
};
