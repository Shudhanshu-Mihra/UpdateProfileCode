import { Link } from 'react-router-dom';

import { styled } from 'styles/theme';

export const HeaderStyles = {
  Header: styled.header``,
  Container: styled.div`
    display: flex;
    // justify-content: space-between;
    background-color: ${(props) => props.theme.colors.darkRed};
    width: 100%;
    max-height: 56px;
    min-height: 53px;
    height: 100%;
  `,
  LogoIconWrapper: styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    width: 48px;
    margin-top: 8px;
    margin-right: 5px;
    overflow: hidden;
  `,
  LogoWrapper: styled.div`
    width: max-content;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 18px;
    height: 100%;
  `,
  Title: styled.h1`
    color: ${(props) => props.theme.colors.lightGray};
    font-size: ${(props) => props.theme.size.xnormal};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  `,
  BlocksWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: max-content;
    margin-left: auto;
    @media (max-width: 1278px) {
      width: 80%;
    }
    @media (max-width: 1200px) {
      width: 85%;
    }
    @media (max-width: 810px) {
      width: 100%;
    }
  `,
  Notifications: styled.div`
    display: flex;
    align-items: center;
  `,
  Link: styled(Link)<{ is_disabled?: string }>`
    pointer-events: ${({ is_disabled }) => is_disabled && 'none'};
    width: max-content;
  `,
};
