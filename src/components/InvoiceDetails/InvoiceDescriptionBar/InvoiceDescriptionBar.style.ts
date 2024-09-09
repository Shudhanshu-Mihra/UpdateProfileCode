import { styled } from 'styles/theme';

export const InvoiceDescriptionBarStyles = {
  DescriptionHead: styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 179px) 1fr;
    column-gap: 66px;
    background: ${(props) => props.theme.colors.softGray};
    height: 49px;
    padding-left: 21px;
    padding-right: 30px;
  `,
  Details: styled.h3`
    color: ${({ theme }) => theme.colors.lightBlack};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.xnormal};
    padding-left: 21px;
  `,
  ColumnName: styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.default};
    display: flex;
    align-self: center;
  `,
  ColumnsDevider: styled.div`
    display: grid;
    grid-template-columns:
      minmax(70px, 85px) minmax(70px, 85px)
      minmax(70px, 85px) minmax(70px, 85px) minmax(70px, 85px) minmax(70px, 85px);
    column-gap: 23px;
  `,
};
