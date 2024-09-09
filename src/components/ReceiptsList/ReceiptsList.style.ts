import { styled } from 'styles/theme';
import { css } from 'styled-components';

const centeredContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ReceiptsListStyles = {
  Container: styled.div<{ isContentCentered?: boolean }>`
    ${({ isContentCentered }) => isContentCentered && centeredContainerStyle};
  `,
  CenterWrapper: styled.div`
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
  `,
  HeaderWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
  `,
  Title: styled.h2`
    font-size: ${({ theme }) => theme.size.xnormal};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
  ItemWrapper: styled.div``,
  EmptyDataWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  Image: styled.div<{ src: string }>`
    display: flex;
    width: 100%;
    background: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    height: 100%;
    max-height: 500px;
    min-height: 300px;
    min-width: 300px;
    max-width: 500px;
  `,
  EmptyDataTitle: styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.size.xnormal};
  `,
};
