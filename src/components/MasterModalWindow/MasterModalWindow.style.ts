import { styled } from 'styles/theme';
import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const MasterModalStyles = {
  content: {
    ...modalContentStyles,
    width: '350px',
    height: 'max-content',
    maxHeight: '90vh',
  },
  overlay,
};

export const MasterModalWindowStyles = {
  ModalMasterContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 22px;
  `,
  HeaderBox: styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    margin-bottom:15px;
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
    gap:20px;
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
    CloseIconWrapper: styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`,
};
