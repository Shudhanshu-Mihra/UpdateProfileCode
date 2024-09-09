import { styled } from 'styles/theme';

export const SalesInvoicesDetailsStyles = {
  Section: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    overflow: hidden;
  `,
  LeftContentWrapper: styled.div`
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
  `,
  Wrapper: styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    padding: 1.5px 35px 15px 35px;
    overflow: hidden;
    height: 100%;
  `,
  PagesWrapper: styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 15px;
  `,
};
