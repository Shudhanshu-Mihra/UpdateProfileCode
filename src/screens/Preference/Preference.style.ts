import { styled } from 'styles/theme';

export const PreferenceStyles = {
  MainWrapper: styled.div`
    display: flex;
    width: 100%;
  `,
  Section: styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
  `,
  RightSideContentWrapper: styled.div`
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 10px 20px 50px;
    width: 100%;
    @media (max-width: 768px) {
      padding: 15px;
      align-items: center;
    }
  `,
  EmptyDiv: styled.div`
    max-height: 230px;
    display: flex;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      display: none;
    }
  `,
  SubTitle: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-bottom: ${(props) => props.theme.size.small};
  `,
  TitleWrapper: styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
  `,
  Title: styled.h1`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.title};
    color: ${(props) => props.theme.colors.darkRed};
    padding-bottom: 7px;
    position: relative;
    margin-bottom: 38px;
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
  Form: styled.form`
    max-width: 500px;
    width: 100%;
  `,
  CheckBoxWrapper: styled.div`
    margin: 10px 0 15px 0;
  `,
};
