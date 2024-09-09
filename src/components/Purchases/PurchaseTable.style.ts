// src/InvoiceTableStyles.ts
import { styled} from 'styles/theme';

export const commonTextStyles = `
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

export const InvoiceTableStyles = {
  ReceiptItemTable: styled.div`
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 10px;
    `,
    Table: styled.table`
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    `,
    TableHeader: styled.th`
      padding: 8px;
      background-color: #BFBFBF;
      text-align: left;
      color: #FFFFFF;
      width: auto;
      ${commonTextStyles}


      &.description {
        width: 190px;
      }
    `,
    TableData: styled.td`
      padding: 8px;
      ${commonTextStyles}
    `,
    InputWrapper: styled.div`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    `,
    Label: styled.div`
      font-size: ${({ theme }) => theme.size.xnormal};
      font-weight: 600;
    `,
    Input: styled.input`
      width: 100%;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #00000038;
      height: 35px;
      padding-left:5px;
      ${commonTextStyles}
    `,
    Button: styled.button`
      border: none;
      cursor: pointer;
      ${commonTextStyles}
    `,
    Summary: styled.div`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      ${commonTextStyles}
    `,
    SummaryInput: styled.input`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border-radius: 4px;
      border: 1px solid #00000038;
      height: 40px;
      width: 93px;
      text-align: right;
      padding-right:5px;
      margin-left: 70px;
      margin-right: 40px;
      ${commonTextStyles}
    `,
    SummaryItem: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      ${commonTextStyles}
    `,
    StyledLink: styled.a`
      color: #1E90FF;
      text-decoration: underline;
      cursor: pointer;
      ${commonTextStyles}
  
      &:hover {
        color: #3742fa;
      }
    `,
    Addnew: styled.a`
      color: #1E90FF;
      text-decoration: underline;
      cursor: pointer;
      ${commonTextStyles}
  
      &:hover {
        color: #3742fa;
      }
    `,
    Total: styled.div`
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: flex-end;
      flex: 0 0 30%;
      padding-right: 40px;
      gap: 20px;
      ${commonTextStyles}
    `,
    InputDiv: styled.div`
      width: 50%;
    `
};