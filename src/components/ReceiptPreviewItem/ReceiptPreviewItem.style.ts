import { styled } from 'styles/theme';

export const ReceiptPreviewItemStyles = {
  ItemWrapper: styled.div<{ isActive?: boolean }>`
    padding: 10px;
    width: 129px;
    height: 158px;
    border-radius: 5px;
    margin-right: 15px;
    background: ${({ theme, isActive }) =>
      isActive ? theme.colors.pink : theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Image: styled.img<{ isActive?: boolean }>`
    width: 92px;
    height: 130px;
    box-shadow: ${({ theme, isActive }) =>
      !isActive && `0px 4px 4px 1px ${theme.colors.halfTranparentBlack}`};
  `,
  ImageWrapper: styled.div`
    display: flex;
    position: relative;
    &:hover {
      cursor: pointer;
    }
  `,
  IconWrapper: styled.div`
    cursor: pointer;
    width: 18px;
    height: 18px;
    display: flex;
    position: absolute;
    top: -6px;
    right: -6px;
  `,
  PdfWrapper: styled.div<{ isActive?: boolean }>`
    max-width: 254px;
    width: 92px;
    height: 130px;
    box-shadow: ${({ theme, isActive }) =>
      !isActive && `0px 4px 4px 1px ${theme.colors.halfTranparentBlack}`};
    .react-pdf__Document,
    .react-pdf__Page,
    .react-pdf__Page__svg {
      height: 130px !important;
    }
  `,
};
