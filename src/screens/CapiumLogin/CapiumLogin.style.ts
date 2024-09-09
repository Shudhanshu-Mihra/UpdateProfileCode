import { styled } from 'styles/theme';

export const CapiumLoginStyle = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
  `,
  Section: styled.section`
    display: flex;
    width: 100%;
    position: relative;
  `,
  RightSideContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 10px 20px 50px;
    width: 100%;
    @media (max-width: 768px) {
      padding: 15px;
      align-items: center;
    }
  `,
  TabWrapper: styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
  `,
};
