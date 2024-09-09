import { styled } from 'styles/theme';

export const ModalWindowHeaderStyles = {
  HeaderBox: styled.div`
    // padding: 15px 33px 15px 33px;
    display: flex;
    margin-bottom:15px;
    justify-content: left;
    width: 100%;
  `,
  Title: styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.title};
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
  TabButton:styled.div``,
  Header:styled.div``,
};
