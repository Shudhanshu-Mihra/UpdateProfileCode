import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const DeleteModalWindowStyles = {
  content: {
    ...modalContentStyles,
    width: '420px',
    height: '232px',
  },
  overlay,
};

export const DeleteModalWindowContentStyles = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.title};
    color: ${({ theme }) => theme.colors.lightBlack};
    padding-top: 30px;
    text-align: center;
  `,
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 33px 34px 37px;
    align-items: center;
    width: 100%;
  `,
  SubTitle: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlack};
    line-height: 19px;
    margin: 32px 0 25px 0;
    text-align: center;
  `,
  Highlighter: styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  `,
  ButtonsBox: styled.div`
    display: flex;
    width: 100%;
    max-width: 200px;
    justify-content: center;
  `,
  ButtonsWrapper: styled.div`
  margin-top:20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 15px;
  `,
  CloseIconWrapper: styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`,
};
