import { styled } from 'styles/theme';

export const Styled = {
  Input: styled.input`
    font-size: ${(props) => props.theme.size.default};
    background-color: ${(props) => props.theme.colors.lightGray};
    height: 45px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.gray};
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
  `,
  WrapperIcon: styled.div`
    background-color: transparent;
    position: absolute;
    top: 30%;
    left: 90%;
  `,
  WrapperInput: styled.div`
    width: 300px;
    position: relative;
  `,
};
