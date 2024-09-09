import { styled } from 'styles/theme';

export const ForgotPasswordStyles = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
    overflow-y: scroll;
  `,
  Section: styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
  `,
  RightSideContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 10px 20px 50px;
    width: 100%;
  `,
  EmptyDiv: styled.div`
    max-height: 300px;
    display: flex;
    height: 100%;
    width: 100%;
  `,
};
