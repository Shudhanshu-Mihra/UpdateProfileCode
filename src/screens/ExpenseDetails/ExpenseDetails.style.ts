import { styled } from 'styles/theme';
import { commonTextStyles } from 'components/Purchases/PurchaseTable.style';

export const ExpenseDetailsStyles = {
  Section: styled.section`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column; 
  `,
  LeftContentWrapper: styled.div`
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
  `,
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 3fr 1.8fr;
    width: 100%;
    background: ${({ theme }) => theme.colors.lighterGrey};
    background-color:white;
    height: 100%;
  `,
  CheckboxContainer: styled.div`
  display: grid;
  grid-template-columns:  1fr;
  width:"100%";
  margin-top: 1rem;
  margin-bottom : 4.5rem;
  height:40px;
  background-color:white;
  ${commonTextStyles}
`,
  Input: styled.input`
  margin-right:10px;
`,
  DescriptionInput: styled.input`
width: 100%; /* Make the input take full width */
padding: 0.5rem; /* Add some padding for better appearance */
box-sizing: border-box; /* Ensure padding is included in the width calculation */
margin-left:31px;
border: 1px solid #A5B1BE;
border-radius:6px;
height:50px;

`,
  Description: styled.div`
flex: 1; 
margin-right: 75px;
`,
  Checkbox: styled.div`
display: flex;
flex-direction: column;
`,
  Container: styled.div`
display: flex;
 flex-direction: row;
justify-content: space-between
`,
  Footer: styled.footer`
position: fixed;
bottom: 0;
width: 100%;
background-color: ${({ theme }) => theme.colors.white};
padding: 1rem;
box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
z-index: 11; /* Adjust the z-index as needed */
text-align: center;
border: 1px solid #0000000D;
height:auto;
display:flex;
align-tems:center;
justify-content: space-between;
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

`,
};
