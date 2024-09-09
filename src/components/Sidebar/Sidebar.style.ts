import { styled } from 'styles/theme';

export const SidebarStyles = {
  MainWrapper: styled.aside`
    display: flex;
    flex-direction: column;
    min-width: 225px;
    background: ${({ theme }) => theme.colors.white};
    height: 100%;
    margin-right: 15px;
    gap:10px;
    padding: 0px 5px 15px 5px;
  `,
  listWrapper: styled.div`
  margin-top: 15px;
  // max-height:60%;
  overflow-y : auto;
flex:  1 1 auto;
`,
ButtonWrapper:styled.div`
// width:220px !important;
  padding:0px 20px 0px 20px;
  margin-top:auto;
`,
};

