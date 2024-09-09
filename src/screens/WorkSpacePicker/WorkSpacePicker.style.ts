import { styled } from 'styles/theme';

export const WorkSpacePickerStyles = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
  `,
  Section: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  `,
  RightSideContentWrapper: styled.div`
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5px 10px 5px 50px;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      padding: 15px;
      align-items: center;
    }
  `,
  TitleWrapper: styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
  `,
  Title: styled.h1`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.title};
    color: ${(props) => props.theme.colors.orange};
    padding-bottom: 7px;
    position: relative;
    margin-bottom: 22px;
    &::before {
      ${({ theme }) =>
        `
      position: absolute;
      content: '';
      bottom: 0;
      width: 100%;
      height: 3px;
      background: ${theme.colors.orange};
      border-radius: 10px;`}
    }
  `,
  SubTitle: styled.div`
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.normal};
    margin-bottom: 10px;
  `,
  CompaniesWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2px 10px 0 0;
    max-width: 450px;
    width: 100%;
    max-height: 195px;
    height: 100%;
    overflow-y: scroll;
    align-content: flex-start;
  `,
};
