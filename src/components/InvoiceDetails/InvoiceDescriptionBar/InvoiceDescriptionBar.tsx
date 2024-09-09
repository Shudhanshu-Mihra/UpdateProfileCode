import { FC } from 'react';

import { InvoiceDescriptionBarStyles as Styled } from './InvoiceDescriptionBar.style';

export const InvoiceDescriptionBar: FC = () => {
  return (
    <>
      <Styled.Details>Details</Styled.Details>
      <Styled.DescriptionHead>
        <Styled.ColumnName>Description</Styled.ColumnName>
        <Styled.ColumnsDevider>
          <Styled.ColumnName>VAT Rate</Styled.ColumnName>
          <Styled.ColumnName>Units</Styled.ColumnName>
          <Styled.ColumnName>Price</Styled.ColumnName>
          <Styled.ColumnName>Net</Styled.ColumnName>
          <Styled.ColumnName>Vat</Styled.ColumnName>
          <Styled.ColumnName>Total</Styled.ColumnName>
        </Styled.ColumnsDevider>
      </Styled.DescriptionHead>
    </>
  );
};
