import { styled } from 'styles/theme';

export const ActionMenuListStyle = {
  // width: 130px;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.borderWhite};

  Wrapper: styled.div`
    position: absolute;
    top: 75%;
    right: 18px;
    display: flex;
    flex-direction: column;
    width: max-content;
    border: 1px solid ${(props) => props.theme.colors.boxShadowBlack};
    border-radius: 5px;
    overflow-y: auto;
    max-height: 70vh;
    box-shadow: 0px 1px 1px ${(props) => props.theme.colors.boxShadowBlack};
    z-index: ${({ theme }) => theme.zIndex.xs};
    background-color: ${({ theme }) => theme.colors.white};
  `,
  Item: styled.button`
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightBlack};
    width: auto;
    height: 38px;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: start;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? '0.5' : '1')};
    &:hover {
      background-color: ${({ theme }) => theme.colors.pink};
      color: ${({ theme }) => theme.colors.lightBlack};
    }
    &:last-child {
      border-bottom: none;
    }
  `,
};
