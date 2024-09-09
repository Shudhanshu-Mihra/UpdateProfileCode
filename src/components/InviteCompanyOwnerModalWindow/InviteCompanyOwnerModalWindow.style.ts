import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const CompanyOwnerModalWindowStyles = {
  content: {
    ...modalContentStyles,
    maxWidth: '420px',
  },
  overlay,
};

export const InviteCompanyOwnerModalWindowStyles = {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 33px 10px 33px;
    width: 100%;
    flex: 1;
  `,
  SelectWrapper: styled.div`
    width: 100%;
  `,
  Form: styled.form``,
  InputsWrapper: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 5px;
    flex: 1;
  `,
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
  `,
  CheckBoxWrapper: styled.div`
    margin-bottom: 13px;
  `,
};
