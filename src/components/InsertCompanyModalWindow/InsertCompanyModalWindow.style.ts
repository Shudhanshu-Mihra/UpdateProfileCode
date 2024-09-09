import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const CompanyModalWindowStyles = {
  content: {
    ...modalContentStyles,
    maxWidth: '460px',
    height: 'auto ',
    maxHeight: '90vh',
    minHeight: 'max-content',
  },
  overlay,
};
export const InsertCompanyModalWindowStyles = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
        padding: 0px 5px;
max-height: calc(90vh - 210px);
    overflow-y:auto;
    gap:20px;
    flex: 0 0 calc(100% - 140px);
     scrollbar-width: thin;
       scrollbar-color: #ffffff #ffffff; 
  `,
  SubTitle: styled.div`
      font-weight: 600;
    font-size: 14px;
    color: #404A5F;
    line-height: 3;
    `
  , Label: styled.div`
      font-weight: 600;
    font-size: 14px;
    color: #404A5F;
    line-height: 3;
    `,
  Header: styled.div`
  width:100%;
  padding:0px 5px 10px;
  display:flex;
      gap: 20px;
`
  , TabButton: styled.button<{ isActive: boolean }>`
  border:none;
  color: ${({ isActive }) => (isActive ? 'red' : '#404A5F')};
   border-bottom: ${({ isActive }) => (isActive ? '2px solid #DF1C29' : '2px solid transparent')};
    font-weight: 600;
    padding:5px 0px 5px 0px;
    background-color:transparent;
        // color: ${({ theme }) => theme.colors.lightBlack};

  `,
  ContentSecond: styled.div`
  `,
  List: styled.ul`
  list-style-type: none;
  padding: 0;
`,
  ListItem: styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  // margin: 4px 0;
  background: transparent;
    border-bottom: 1px solid #ddd;
      justify-content:space-between;
`, ItemImage: styled.img`
width: max-content;
height: 50px;
margin-right: 10px;
`, ItemButton: styled.button`
margin-left: auto;
  padding: 5px 10px;
  background: #2C9F1C;
  color: white;
  border: none;
  cursor: pointer;
border-radius:5px;
  &:hover {
    background: #29711f;
  }`,
  ItemTextAndButton: styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  `,
  WrapHeader: styled.div`
  height:85%;
  width:100%;
  padding:22px 20px 0 20px;
  // overflow-y:auto;
  `,
  RedText: styled.span`
  display:flex;
  align-items:center;
  gap:5px;
  color:red;
  `,
  textWithIcon: styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:7px;
  `,
  IconHolder: styled.div``,
  RedTextWrapper: styled.div`
  background-color:transparent;
  padding:0;
  margin :0;
  cursor:pointer;
  `,
  ButtonWrapper: styled.div`
  padding:22px`,
  CloseIconWrapper: styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`,
};
