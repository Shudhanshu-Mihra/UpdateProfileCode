import { styled } from 'styles/theme';

export const PhotoDetailsContentStyles = {
  ReceiptDetailContent: styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    padding: 15px;
    width: 100%;
    min-height: 60vh;
    // height: 100%;
    flex-grow: 1;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    overflow-y:auto;
  `,
  FormFieldWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    gap:20px;
    margin-bottom: 35px
  `,
  FieldWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  InputFieldWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
  `,
  StatusBarWrapper: styled.div`
    display: flex;
    gap: 20px;
    // justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  `,
  ChildrenWrapper: styled.div`
    max-width: 248px;
    width: 100%;
  `,
  ItemWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    // width: max-content;
  `,
  Label: styled.p<{ isStatus?: boolean }>`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    // width: ${({ isStatus }) => (isStatus ? '17%' : '35%')};
    width: 30%;
    min-width: max-content;
    flex-shrink: 0;
    margin-left:5px;
    display:flex;
    align-items: center;
  `,
  ReceiptItemTable: styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  h4 {
    margin-left: 8px;
  }
`,
  ButtonsBoxWrapper: styled.div`
  margin-top: 20px;
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

Footer: styled.footer`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
background-color: ${({ theme }) => theme.colors.white};
padding: 1rem;
box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
z-index: 11; /* Adjust the z-index as needed */
text-align: center;
border: 1px solid #0000000D;
max-height: 75px;
display:flex;
align-items:center;
  justify-content: space-between;
  gap: 10px;
`,
  Button: styled.button`
background-color: white;
border-radius: 50px;
border: 1px solid #DF1C29;
color: #DF1C29;
padding: 10px;
width: 100px;
height: 40px;
text-align: center;
font-family: 'Source Sans Pro', sans-serif;
font-size: 14px;
font-weight: 600;
&.approve {
  background-color: #DF1C29;
  border-color: #DF1C29;
  color: white;
  width: 200px;
}
&.reject  , &.save , &.cancel{
  margin-left: 10px;
}
  &:nth-child(3) {
    margin-left: auto;
  }
`,
items: styled.p`
  display: inline-block;
  margin-right: 10px;
`
};

  // ${commonTextStyles}
