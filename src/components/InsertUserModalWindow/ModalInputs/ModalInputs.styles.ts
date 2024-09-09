import { styled } from 'styles/theme';

export const ModalFormStyles = {
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
  `,
  InputWrapper: styled.div`
    display: flex;
    // margin-bottom: 25px;
  `,
  selectWrapper: styled.div`
  display: flex;
  // margin-bottom: 25px;
`
};
