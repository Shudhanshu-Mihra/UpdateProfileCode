import { styled } from 'styles/theme';

export const DocumentMetricStyles = {
  Container: styled.div`
    padding: 21px 38px 0px 32px;
  `,
  Head: styled.h2`
    font-size: ${({ theme }) => theme.size.subTitle};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: 10px;
  `,
  CompaniesMainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  `,
  CompaniesTitle: styled.h3`
    font-size: ${({ theme }) => theme.size.xnormal};
    color: ${({ theme }) => theme.colors.lightBlack};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: 15px;
  `,
  CompanyItemWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 77px;
    border-radius: 5px;
    padding: 12px 14px 10px 12px;
    border: ${({ theme }) => `1px solid ${theme.colors.opacityBlack}`};
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
    align-items: center;
    margin-bottom: 10px;
  `,
  CompanyName: styled.div`
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.lightBlack};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  CompaniesWrapper: styled.div`
    max-height: 175px;
    height: 100%;
    overflow-y: scroll;
    padding-right: 5px;
  `,
  CompanyInfoLeftBlock: styled.div`
    display: flex;
    align-items: center;
  `,
  CompanyInfoRightBlock: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,
  CompanyInfo: styled.div`
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    color: ${(props) => props.theme.colors.lightBlack};
    text-align: end;
  `,
};
