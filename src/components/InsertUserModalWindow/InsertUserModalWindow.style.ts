import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const UserModalWindowStyles = {
  content: {
    ...modalContentStyles,
    width: '520px',
    maxHeight: '90vh',
    minHeight: 'max-content',
    overflowY: 'auto' as 'auto' | 'hidden' | 'scroll' | 'visible' | undefined,  },
  overlay,
};

export const StyledInput = styled.input`
  /* Add your custom CSS for the input */
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
`;

export const InsertUserModalWindowStyles = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    // padding: 5px 33px 0 33px;
    width: 100%;
    flex: 1;
  `,
  SelectWrapper: styled.div`
    width: 100%;
  `,
  Form: styled.form`
  display:flex;
  flex-direction:column;
  gap:20px;`,
  InputsWrapper: styled.div`
    display: flex;
    gap:20px;
    flex-direction: column;
    margin-bottom: 15px;
    flex: 1;
  `, 
   CheckboxItemWrapper: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

`,Hyperlink:styled.a`

    color: blue;
    cursor: pointer;
    display: flex;
    width: 100%;
    gap: 4px;
`,
SecondModalContent:styled.div`height:85vh`,
SecondModalButton:styled.button`
// display:flex;
// align-items:center;
// color:blue;
background:transparent;
// border-bottom:1px solid blue;
`,
SecondModalHeading:styled.p`
// display:flex;
// align-items:center;
    font-weight: 600;
    font-size: 24px;
    color: #404A5F;
`,
ButtonWraper:styled.div`
display:flex;
width:100%;
justify-content:space-between`,

SecondModalButton2:styled.button`
display:flex;
align-items:center;
background-color:#DF1C29;
color:white;
gap:7px;
border-radius:5px;
padding: 5px  15px`,
HyperLinkInnerText:styled.p`
color:black;
`,
SecondModalHeadingWrapper:styled.div`
display:flex;
gap:20px;
margin-top:10px;`,
  InsertUserWrapper: styled.div`
padding:22px;
display:flex;
flex-direction:column;
gap:20px
`,
  PContent: styled.div`
padding:22px;`,
CloseIconWrapper: styled.div`
position: absolute;
top: 20px;
right: 20px;
cursor: pointer;
`,

};
