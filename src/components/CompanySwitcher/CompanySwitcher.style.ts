import { styled } from 'styles/theme';

export const CompanySwitcherStyles = {
  Wrapper: styled.div`
    position: relative;
    width: 220px;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.opacityBlack};
    border-radius: ${(props) => props.theme.size.borderRadius};
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    padding-left: 12px;
    margin-right: 15px;
    &:hover {
      cursor: pointer;
    }
  `,
  Content: styled.div`
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.lightBlack};
    margin-left: -5px;
    width: 118px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  Arrow: styled.div`
    margin-left: auto;
    padding: 0 12px;
  `,
};
