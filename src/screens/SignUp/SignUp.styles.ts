import { styled } from 'styles/theme';

export const SignUpStyles = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
  `,
  Section: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  `,
  RightSideContentWrapper: styled.div`
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5px 10px 5px 50px;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      padding: 15px;
      align-items: center;
    }
  `,
};
