import { styled } from 'styles/theme';

import { overlay, modalContentStyles } from 'constants/modal-window.constants';

export const CapiumModalWindowStyles = {
  content: {
    ...modalContentStyles,
    width: '361px',
    height: '290px',
  },
  overlay,
};

export const CapiumModalWindowContentStyles = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  HeaderBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 62px;
    width: 100%;
  `,
  Title: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.mediumLarge};
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0px 20px;
    width: 100%;
  `,
  SubTitle: styled.p`
    display: flex;
    justify-content: center;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlack};
    line-height: 19px;
    margin-bottom: 25px;
  `,
  ButtonsBox: styled.div`
    display: flex;
    width: 100%;
    max-width: 231px;
    justify-content: center;
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
  AccountsWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 106px;
    height: 100%;
    overflow-y: auto;
    margin-left: 5px;
  `,
  SwitchAccount: styled.div`
    display: flex;
    width: 100%;
    margin-top: 5px;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    &:hover {
      background: ${({ theme }) => theme.colors.whiteGray};
    }
  `,
  AnotheAccountText: styled.p`
    display: flex;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlack};
    margin-left: 5px;
  `,
};
