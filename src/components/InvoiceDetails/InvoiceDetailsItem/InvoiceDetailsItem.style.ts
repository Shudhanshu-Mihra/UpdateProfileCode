import { styled } from 'styles/theme';

export const InvoiceDetailsItemStyles = {
  ChildrenWrapper: styled.div`
    width: 100%;
    flex-basis: 250px;
    display: flex;
  `,
  ItemWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
  `,
  Label: styled.p<{ isRightSideLabel?: boolean }>`
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.lightBlack};
    width: ${({ isRightSideLabel }) => (isRightSideLabel ? `24%` : '30%')};
  `,
};
