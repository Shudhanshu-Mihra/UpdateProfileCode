import { styled } from 'styles/theme';

export const TableInvitesStyles = {
  Head: styled.div`
    display: grid;
    grid-template-columns:
      minmax(55px, 65px) minmax(175px, 240px) minmax(130px, 180px)
      minmax(110px, 200px) minmax(90px, 170px)
      minmax(111px, 200px);
    border-top: solid 1px ${(props) => props.theme.colors.borderWhite};
    border-bottom: solid 1px ${(props) => props.theme.colors.lightBlack};
    height: 49px;
    width: 100%;
    padding-left: 18px;
  `,
  Actions: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.lightBlack};
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
  `,
  Column: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-right: solid 1px ${(props) => props.theme.colors.borderWhite};
    padding-left: 13px;
    &:last-child {
      border-right: none;
    }
  `,
  EmptyContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.gray};
    border-top: 0;
    min-height: 50px;
    width: 100%;
  `,
};
