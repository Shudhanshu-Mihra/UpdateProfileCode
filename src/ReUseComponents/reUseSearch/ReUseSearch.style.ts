import { styled } from 'styles/theme';

export const SearchBox = {
    ButtonWrapper: styled.div`
    height: 40px;
  `,
    SearchWrapper: styled.div`
    height: 40px;
  `,
    SearchInputWrapper: styled.div`
    display: flex;
    position: relative;
    max-width: 200px;
    width: 100%;
  `,
    IconWrapper: styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 9px;
    transform: translateY(-50%);
  `,
};
