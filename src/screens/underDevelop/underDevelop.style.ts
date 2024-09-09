import { Link } from 'react-router-dom';
import { styled } from 'styles/theme';

export const NotFoundStyles = {
  MainWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ContentWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  `,
  Image: styled.div<{ src: string }>`
    display: flex;
    width: 100%;
    height: 100%;
    min-width: 750px;
    min-height: 200px;
    min-width: 350px;
    max-height: 500px;
    background: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
  `,
  Title: styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.xnormal};
    margin-bottom: 15px;
  `,
  SubTitle: styled.p`
    justify-content: center;
    display: flex;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.default};
    margin-bottom: 23px;
  `,
  Link: styled(Link)`
    max-width: 250px;
    width: 100%;
  `,
};
