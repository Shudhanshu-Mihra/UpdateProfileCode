import { styled } from 'styles/theme';

export const AuthImageSectionStyles = {
  Section: styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    background: ${({ theme }) => theme.colors.lightGray};
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    height: 100%;
  `,
  LeftSideContentWrapper: styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    background: ${({ theme }) => theme.colors.lightGray};
    padding: 20px;
    width: 100%;
    height: 100%;
  `,
  Title: styled.h1`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.title};
  `,
  BoldText: styled.span`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.title};
  `,
  SubTitle: styled.h2`
    display: flex;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.size.big};
    max-width: 409px;
    width: 100%;
  `,
  Image: styled.div<{ src: string }>`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 473px;
    max-height: 473px;
    background: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: contain;
  `,
};
