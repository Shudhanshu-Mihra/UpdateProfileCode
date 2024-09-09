import { styled } from 'styles/theme';

export const TimelineItemStyles = {
  Box: styled.div`
    display: flex;
    align-items: flex-start;
  `,
  TextWrapper: styled.div`
    margin-left: 32px;
    margin-bottom: 25px;
  `,
  TextContent: styled.p`
    margin: 0;
    font-size: ${(props) => props.theme.size.default};
    color: ${(props) => props.theme.colors.black};
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  `,
};
