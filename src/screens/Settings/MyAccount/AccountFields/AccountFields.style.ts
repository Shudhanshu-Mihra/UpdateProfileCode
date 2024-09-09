import { styled } from 'styles/theme';

export const AccountFieldsStyle = {
  FieldsWrapper: styled.div`
    display: flex;
    &:first-child {
      padding-right: 50px;
    }
    width: 100%;
    flex-direction: column;
  `,
  FieldsBlockWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0 30px;
  `,
  ResetFieldsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin-bottom: 20px;
  `,
  ResetPasswordFiledsWrapper: styled.div`
    padding: 0px 0 30px;
    &:not(:last-child) {
      margin-top: 15px;
    }
    &:not(:first-child) {
      margin-bottom: 25px;
    }
  `,
};
