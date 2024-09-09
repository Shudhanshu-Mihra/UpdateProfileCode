import { styled } from 'styles/theme';

export const HeaderPanelStyles = {
  HeaderPanelWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
  `,
  ButtonWrapper: styled.div`
    height: 40px;
  `,
  SearchWrapper: styled.div`
    height: 40px;
  `,
  SearchInputWrapper: styled.div`
    display: flex;
    position: relative;
    max-width: 200px;
    width: 100%;
  `,
  IconWrapper: styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 9px;
    transform: translateY(-50%);
  `,
};
