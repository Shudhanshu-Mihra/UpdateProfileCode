import { styled } from 'styles/theme';

export const EmailModalFormStyles = {
  MainContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 33px 0 33px;
    width: 100%;
    flex: 1;
  `,
  Label: styled.p`
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-bottom: 10px;
  `,
  AttachmentsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    max-height: 90px;
    overflow: hidden;
    overflow-y: scroll;
    margin-bottom: 26px;
    border-radius: 5px;
  `,
  ItemWrapper: styled.div`
    border: ${({ theme }) => `1px solid ${theme.colors.opacityBlack}`};
    box-sizing: border-box;
    box-shadow: ${({ theme }) => `0px 1px 1px ${theme.colors.boxShadowBlack}`};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    height: 45px;
    width: 100%;
    padding: 13px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  Text: styled.p`
    color: ${({ theme }) => theme.colors.lightBlack};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.size.default};
  `,
};
