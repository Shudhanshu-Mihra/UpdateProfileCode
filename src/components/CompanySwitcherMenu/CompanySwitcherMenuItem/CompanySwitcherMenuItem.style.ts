import { styled } from 'styles/theme';

export const CompanySwitcherMenuItemStyles = {
  Item: styled.div<{ isCompanyPicker?: boolean }>`
    font-size: ${({ theme }) => theme.size.default};
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: ${({ isCompanyPicker }) =>
      isCompanyPicker ? '14px' : '21px'};
    padding-right: 20px;
    &:hover {
      border-color: ${({ theme, isCompanyPicker }) =>
        !isCompanyPicker && theme.colors.lightGray};
      background-color: ${({ theme, isCompanyPicker }) =>
        !isCompanyPicker && theme.colors.pink};
    }
    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    ${({ isCompanyPicker, theme }) =>
      isCompanyPicker &&
      `border-radius: 5px;
       border: 1px solid ${theme.colors.boxShadowBlack};
       margin: 0 15px 15px 0;
       max-width: 200px;
       width: 100%;
       cursor: pointer;
    `}
  `,
  CompanyNameWrapper: styled.div`
    display: flex;
  `,
  Content: styled.div`
    display: flex;
    align-items: center;
  `,
  Logo: styled.div``,
};
