import { FC } from 'react';

import { InvoiceDetailsItemStyles as Styled } from './InvoiceDetailsItem.style';

interface IInvoiceDetailsItemProps {
  isRightSideLabel?: boolean;
  label: string;
  children: React.ReactNode;
}
export const InvoiceDetailsItem: FC<IInvoiceDetailsItemProps> = (props) => {
  const { label, children, isRightSideLabel } = props;
  return (
    <Styled.ItemWrapper>
      <Styled.Label isRightSideLabel={isRightSideLabel}>{label}</Styled.Label>
      <Styled.ChildrenWrapper>{children}</Styled.ChildrenWrapper>
    </Styled.ItemWrapper>
  );
};
