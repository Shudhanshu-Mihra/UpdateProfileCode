import { Link } from 'react-router-dom';
import { styled } from 'styles/theme';

export const AvatarSubmenuStyles = {
  Wrapper: styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    width: 98px;
    position: absolute;
    top: 39px;
    right: -10px;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: ${({ theme }) => theme.zIndex.xs};
    outline: ${({ theme }) => `1px solid ${theme.colors.boxShadowBlack}`};
    margin: 0;
    padding: 0;
    justify-content: center;
    ::before {
      content: '';
      position: absolute;
      top: -14px;
      right: 15px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      cursor: pointer;
      border-bottom: ${({ theme }) => `14px solid  ${theme.colors.white}`};
    }
  `,
  Item: styled(Link)`
    padding: 10px 12px;
    display: flex;
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.default};
    width: 100%;
    :hover {
      background-color: ${({ theme }) => theme.colors.pink};
    }
    :first-child {
      border-radius: 6px 6px 0px 0px;
    }
    :last-child {
      border-radius: 0 0 6px 6px;
    }
  `,
  IconWrapper: styled.div`
    display: flex;
    margin-right: 10px;
  `,
};
