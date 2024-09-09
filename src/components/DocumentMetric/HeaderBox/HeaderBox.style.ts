import { styled } from 'styles/theme';

export const HeaderBoxStyles = {
  HeaderBlock: styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
  `,
  TitleBlock: styled.div`
    width: calc((100% - 2 * 18px) / 2);
    margin-right: 36px;
  `,
  Title: styled.h2`
    font-size: ${({ theme }) => theme.size.xnormal};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.black};
    text-align: start;
    margin-bottom: 33px;
  `,
  MetricTitle: styled.h2`
    font-size: ${({ theme }) => theme.size.xnormal};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
    text-align: start;
    margin-left: 12px;
  `,
  MetricBlock: styled.div`
    display: flex;
  `,
};
