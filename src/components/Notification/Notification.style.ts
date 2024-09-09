import { styled } from 'styles/theme';

export const NotificationStyles = {
  Wrapper: styled.div`
    border-left: solid 1px ${(props) => props.theme.colors.white};
    width: 54px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
