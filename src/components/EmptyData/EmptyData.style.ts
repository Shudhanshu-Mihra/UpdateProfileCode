import { styled } from 'styles/theme';

export const EmptyDataStyles = {
  MainWrapper: styled.div`
    width: 100%;
    height: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  `,
  ContentWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  `,
  reUseBuutonHolder: styled.div`
    // width: 100%;
    // height: 100%;
    // display: flex;
    // flex-direction: column;
    // flex: 1 0 auto;
    // justify-content: center;
    // align-items: center;
    // padding: 10px 0;
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
    min-height: 200px;
    min-width: 300px;
    max-width: 500px;
  `,
  Title: styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.xnormal};
    text-align: center;
    // margin-bottom: 15px;
  `,
  SubTitle: styled.p`
    justify-content: center;
    display: flex;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.default};
    text-align: center;
    margin-bottom: 12px;
  `,
  ImageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    max-height: 500px;
    min-width: 400px;
    height: 100%;
    width: 100%;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
  `,
};
