import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const LinkSocaAccModalWindowStyles = {
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 33px 28px 33px;
    width: 100%;
    flex: 1;
  `,
  PasswordFieldWrapper: styled.div`
  padding-top:20px; `
  ,
  ModalMasterContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 22px;
  `,
  HeaderBox: styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
  `,
  Title: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.title};
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
  CloseIconWrapper: styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`,
};

export const PasswordChangeModel = {
  content: {
    ...modalContentStyles,
    width: '420px',
    height: 'max-content', 
    maxHeight: '90vh',
  },
  overlay,
};
