import { styled } from 'styles/theme';

export const PhotoPreviewStyles = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height:100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  `,
  Content: styled.div<{ imageSrc: string }>`
    width: 260px;
    height: 100%;
    padding: 10px 0;
    height:100%;
    justify-content: center;
    display: flex;
    background: ${(props) => `url(${props.imageSrc})`};
    background-repeat: no-repeat;
    background-size: contain;
    `,
};
