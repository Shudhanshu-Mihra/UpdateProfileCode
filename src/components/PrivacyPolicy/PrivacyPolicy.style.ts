import { styled } from 'styles/theme';

export const PrivacyPolicyStyles = {
  Wrappper: styled.section`
    padding: 20px 30px;
    background-color: ${(props) => props.theme.colors.white};
  `,
  Title: styled.h1`
    margin-bottom: 10px;
    font-size: ${(props) => props.theme.size.xnormal};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  `,
  SubTitle: styled.h2`
    margin-bottom: 5px;
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  `,
  Paragraph: styled.p`
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-bottom: 5px;
  `,
  ContentWrapper: styled.div`
    padding-right: 5px;
    max-height: calc(100vh - 135px);
    overflow-y: scroll;
  `,
};
