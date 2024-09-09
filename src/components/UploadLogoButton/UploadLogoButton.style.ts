import { styled } from 'styles/theme';

export const UploadLogoButtonStyles = {
  Label: styled.label`
    display: flex;
    justify-content: left;
    align-items: left;
    cursor: pointer;
  `,
  Wrapper: styled.div`
  margin-top:20px;
    display: flex;
    flex-direction:column;
    align-items: right;
    gap:10px;
    height: 75px;
  `,
  LogoTextWrapper: styled.p`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};

    margin-right: 35px;
  `,
  Size: styled.span`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.lightBlack};
  `,
  Image: styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
  `,
  ImageWrapper: styled.div`
    position: relative;
    border-radius: 5px;
    width: 75px;
    height: 75px;
    overflow: hidden;
    outline: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  `,
  Logo: styled.div`
    display: flex;
    position: relative;
    gap:20px;

  `,
  IconWrapper: styled.div`
    cursor: pointer;
 
    display: flex;
    align-items:center;
    
  `,
  DeletePhoto: styled.span`
    font-size: ${({ theme }) => theme.size.default};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.black};
    text-decoration: underline;
    margin-left: 8px;
    cursor: pointer;
  `,
  deleteLink:styled.p`
  border-bottom:1px solid ${({ theme }) => theme.colors.transparentOrange};
  //  color: ${({ theme }) => theme.colors.black};

  padding-bottom:.5px;
  `,
};
