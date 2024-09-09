import { styled } from 'styles/theme';

export const FilesUploadPreviewStyles = {
  LayoutWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.lighterGrey};
  `,
  MainWrapper: styled.div`
    width: 100%;
    height: 100%;
    padding: 15px 35px;
    display: flex;
    background: ${({ theme }) => theme.colors.lighterGrey};
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    padding: 15px 20px;
  `,
  ImageWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0 25px 0;
    min-height: 358px;
    flex: 1;
  `,
  ReceiptImage: styled.img`
    max-width: 254px;
    max-height: 358px;
    min-width: 250px;
    width: 100%;
    height: 100%;
  `,
  CenterWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
  `,
  ButtonsBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  `,
  BoxWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 125px;
  `,
  ButtonText: styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.size.normal};
    color: ${({ theme }) => theme.colors.halfTranparentBlack};
  `,
  PdfWrapper: styled.div<{ src?: string }>`
    max-width: 254px;
    max-height: 358px;
    min-width: 250px;
    width: 100%;
    height: 100%;
    .react-pdf__Page__canvas {
      max-height: 358px !important;
    }
  `,
};
