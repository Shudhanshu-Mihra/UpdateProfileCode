import { styled } from 'styles/theme';

import { modalContentStyles, overlay } from 'constants/modal-window.constants';

export const SuccessModalStyles = {
  content: {
    ...modalContentStyles,
    maxWidth: '400px',
    maxHeight: '250px',
  },
  overlay,
};

export const SuccessModalWindowStyle = {
  Circle: styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: ${({ theme }) => `5px solid ${theme.colors.green}`};
    margin-bottom: 25px;
  `,
  IconWrapper: styled.div`
    margin-bottom: 25px;
    height: 60px;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  Checkmark: styled.div`
    transform: rotate(45deg) translate(-90%);
    width: 17px;
    height: 23px;
    border-bottom: ${({ theme }) => `3px solid ${theme.colors.green}`};
    border-right: ${({ theme }) => `3px solid ${theme.colors.green}`};
    position: absolute;
    top: 42%;
    left: 55%;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 35px;
  `,
};
