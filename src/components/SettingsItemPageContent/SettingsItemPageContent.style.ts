import { styled } from 'styles/theme';

export const SettingsItemPageContentStyle = {
  ContentWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    flex: 1 0 auto;
  `,
  LoaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  `,
  paginationPosition: styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: max-content;
    margin-left: -30px;
  `,
};
