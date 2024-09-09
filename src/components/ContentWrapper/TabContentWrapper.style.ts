import { styled } from 'styles/theme';

export const TabContentWrapperStyles = {
  Content: styled.div<{ active: boolean }>`
    ${(props) =>
      props.active
        ? 'display: flex; flex-flow: column nowrap'
        : 'display: none'};
    height: 100%;
    flex: 1;
  `,
};
