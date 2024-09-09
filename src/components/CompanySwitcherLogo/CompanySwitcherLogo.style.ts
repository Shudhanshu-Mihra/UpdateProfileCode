import { styled } from 'styles/theme';

export const CompanySwitcherLogoStyles = {
  Wrapper: styled.div<{ isBigLogo?: boolean }>`
    min-width: ${({ isBigLogo }) => (isBigLogo ? '40px' : '35px')};
    height: ${({ isBigLogo }) => (isBigLogo ? '40px' : '35px')};
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.darkRed};
    display: flex;
    justify-content: center;
    margin-right: 17px;
  `,
  Text: styled.p`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.size.default};
    color: ${({ theme }) => theme.colors.lightGray};
  `,
  LogoImage: styled.img<{ isBigLogo?: boolean }>`
    width: ${({ isBigLogo }) => (isBigLogo ? '40px' : '35px')};
    height: ${({ isBigLogo }) => (isBigLogo ? '40px' : '35px')};
    margin-right: 17px;
    border-radius: 50%;
  `,
};
