import { styled } from 'styles/theme';

export const FileUploadButtonStyles = {
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  Label: styled.label<{ isRoundedButton?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    font-size: ${(props) => props.theme.size.default};
    max-height: 40px;
    min-height: 38px;
    border-radius: ${({ isRoundedButton }) =>
      isRoundedButton ? '50px' : '6px'};
    box-shadow: ${(props) =>
      `0px 0px 5px ${props.theme.colors.boxShadowBlackButton}`};
    background-color: ${(props) => props.theme.colors.darkRed};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  `,
};
