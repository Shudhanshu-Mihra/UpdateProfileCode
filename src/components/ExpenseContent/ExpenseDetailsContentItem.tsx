import { FC } from 'react';

import { ExpenseDetailsContentStyles as Styled } from './ExpenseDetailsContent.style';

interface IusePhotoDetailsContentProps {
  label: string;
  children: React.ReactNode;
}

export const ExpenseDetailsContentItem: FC<IusePhotoDetailsContentProps> = (props) => {
  const { label, children } = props;
  const isStatus = label === 'Report Id'; // Check if the label is 'status'
  return (
    <Styled.ItemWrapper>
      <Styled.Label isStatus={isStatus}>{label}</Styled.Label>
      <Styled.ChildrenWrapper>{children}</Styled.ChildrenWrapper>
    </Styled.ItemWrapper>
  );
};
