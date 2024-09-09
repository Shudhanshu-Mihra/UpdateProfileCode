import { FC } from 'react';

import { UploadInputStyles as Styled } from './UploadInput.style';

interface IUploadInputProps {
  id?: string;
  name?: string;
  onChangeFiles?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const UploadInput: FC<IUploadInputProps> = (props) => {
  const { onChangeFiles, id, name } = props;
  return (
    <Styled.UploadInput
      onChange={onChangeFiles}
      type="file"
      id={id || 'uploadFile'}
      name={name || 'uploadFile'}
      accept="image/jpeg, image/jpg, image/png, .pdf"
      multiple
      data-testid="upload-file"
    />
  );
};
