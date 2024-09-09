import { styled } from 'styles/theme';

export const AccountItemStyles = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    &:hover {
      background: ${({ theme }) => theme.colors.whiteGray};
    }
  `,
  UserInitials: styled.div`
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    min-width: 36px;
    min-height: 36px;
    max-width: 36px;
    max-height: 36px;
  `,
  UserInfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  `,
  Name: styled.p`
    display: flex;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.black};
  `,
  Email: styled.p`
    display: flex;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 3px;
  `,
};
