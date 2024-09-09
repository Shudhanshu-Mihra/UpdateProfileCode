import { styled } from 'styles/theme';
import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const ReUseModalStyles = {
  content: {
    ...modalContentStyles,
    width: '420px',
    height: 'max-content',
    maxHeight: '94vh'
  },
  overlay,
};

export const ReUseModalContentStyles = {
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
  TabButton:styled.div``,
  Header:styled.div``,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
  `,
  SubTitle: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.black};
    line-height: 19px;
    margin: 32px 0 25px 0;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
  `,
  AttachmentsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-height: 90px;
    overflow: hidden;
    overflow-y: scroll;
    margin-bottom: 26px;
    border-radius: 5px;
  `,
};
