import { styled } from 'styles/theme';

export const LinksBoxStyles = {
  LinkWrapper: styled.nav`
    width: 100%;
    display: flex;
    &:not(:last-child) {
      margin-right: 30px;
    }
  `,
  Links: styled.div`
    display: flex;
  `,
  SupportCenter: styled.a<{
    is_disabled?: string;
  }>`
    position: relative;
    min-width: 120px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    color: ${(props) => props.theme.colors.lightGray};
    pointer-events: ${({ is_disabled }) => is_disabled && 'none'};
    color: ${({ is_disabled, theme }) => is_disabled && theme.colors.gray};
    border-radius: 6px;
  `,
};
