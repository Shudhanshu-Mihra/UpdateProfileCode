import { styled } from 'styles/theme';

export const InfoPopupStyles = {
  Wrapper: styled.div`
    position: absolute;
    top: -29px;
    left: 81px;
    width: 100%;
    max-width: 443px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ theme }) => `1px solid ${theme.colors.opacityBlack}`};
    box-sizing: border-box;
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
    border-radius: 5px 5px 5px 0px;
    height: 43px;
    z-index: ${({ theme }) => theme.zIndex.xs};
    background: ${({ theme }) => theme.colors.white};
    &::after {
      content: '';
      position: absolute;
      left: -25px;
      bottom: 0px;
      border: 8px solid transparent;
      border-right: ${({ theme }) => `14px solid ${theme.colors.black}`};
    }
  `,
  Text: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.biggerSmall};
    color: ${({ theme }) => theme.colors.lightBlack};
    padding: 0 5px;
    overflow-y: scroll;
    height: 100%;
    display: flex;
    align-items: center;
  `,
};
