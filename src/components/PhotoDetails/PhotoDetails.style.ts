import { styled } from 'styles/theme';

export const PhotoDetailsStyles = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    padding: 15px;
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #00000040;
  `,
};
