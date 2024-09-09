import { styled } from 'styles/theme';

export const MyAccountStyles = {
  LayoutWrapper: styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 38px 40px 20px 38px;
    background: ${({ theme }) => theme.colors.white};
    position: relative;
  `,
  ContentWrapper: styled.div<{ isResetPassword: boolean }>`
    max-width: ${({ isResetPassword }) =>
      isResetPassword ? '500px' : '1050px'};
    width: 100%;
  `,
  Form: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  FieldsWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0px 0 30px;
  `,
  ResetFieldsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin-bottom: 20px;
  `,
  ResetPasswordFiledsWrapper: styled.div`
    padding: 35px 0 30px;
    &:not(:last-child) {
      margin-top: 15px;
    }
    &:not(:first-child) {
      margin-bottom: 25px;
    }
  `,
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  ButtonsWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // padding-bottom: 5px;
  `,
  ButtonsBox: styled.div<{ isNoPadding?: boolean; buttonPosition?: string; isCancelButton?: boolean; }>`
  display: flex;
    width: 100%;
    gap:20px;
    align-items:center;
    justify-content: ${({ buttonPosition }) =>
      buttonPosition ? buttonPosition : 'center'};
    padding: ${({ isNoPadding }) => (isNoPadding ? '0' : '0 30px 0 30px')};
  `,
};
