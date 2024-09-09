import { styled } from 'styles/theme';

export const Styled = {
  ErrorText: styled.div`
    font-weight: ${(props) => props.theme.fontWeight.medium};
    width: 100%;
    font-size: ${(props) => props.theme.size.biggerSmall};
    color: ${(props) => props.theme.colors.red};
    text-align: left;
    position: absolute;
    bottom: -17px;
  `,
};
