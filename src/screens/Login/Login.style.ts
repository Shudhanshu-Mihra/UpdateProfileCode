import { COLORS, styled, Z_INDEX } from 'styles/theme';

export const Styled = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
    position: relative;
  `,
  Section: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    width: 100%;
    height: 100vh;
    @media (max-width: 768px) {
      overflow: hidden;
    }
  `,
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
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
  Loading: styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: ${Z_INDEX.xs};
    background: ${COLORS.googleOverlay};
  `,
};
