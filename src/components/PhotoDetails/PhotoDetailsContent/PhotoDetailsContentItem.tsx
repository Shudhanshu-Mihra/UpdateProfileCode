import { FC } from 'react';

import { PhotoDetailsContentStyles as Styled } from './PhotoDetailsContent.style';

interface IusePhotoDetailsContentProps {
  label: string;
  children: React.ReactNode;
}

export const PhotoDetailsContentItem: FC<IusePhotoDetailsContentProps> = (props) => {
  const { label, children } = props;
  const isStatus = label === 'Status'; // Check if the label is 'status'

  return (
    <Styled.ItemWrapper>
      <Styled.Label isStatus={isStatus}>{label}</Styled.Label>
      <Styled.ChildrenWrapper>{children}</Styled.ChildrenWrapper>
    </Styled.ItemWrapper>
  );
};
