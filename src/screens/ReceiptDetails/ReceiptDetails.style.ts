import { styled } from 'styles/theme';
import { commonTextStyles } from 'components/Purchases/PurchaseTable.style';

export const ReceiptDetailsStyles = {
  Section: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  `,
  LeftContentWrapper: styled.div`
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
  `,
  BodyWrapper: styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.lighterGrey};
    overflow: hidden;
    background-color:white;
  `,
  ReceiptDetailWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 90px);
    // background-color: #ff0;
    overflow-y: auto;
    padding-right: 35px;
  `,
  ReceiptStatusContainer: styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  gap: 15px;
  width:"100%";
  margin-top: 10px;
  height: max-content;
  // background-color: #f0f;
  // ${commonTextStyles}
`,
  Input: styled.input`
  margin-right:10px;
`,
  DescriptionInput: styled.input`
    width: 100%; /* Make the input take full width */
    padding: 15px; /* Add some padding for better appearance */
    box-sizing: border-box; /* Ensure padding is included in the width calculation */
    border: 1px solid #A5B1BE;
    border-radius:6px;
    // height:54px;
  `,
  Description: styled.div`
  flex: 1; 
`,
  CheckboxContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
