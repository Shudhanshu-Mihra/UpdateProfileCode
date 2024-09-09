import { FC } from 'react';

import { Icon } from '../Icons';
import { PdfViewer } from '../PdfViewer';

import { useReceiptPreviewItemState } from './ReceiptPreviewItem.state';
import { ReceiptPreviewItemStyles as Styled } from './ReceiptPreviewItem.style';

interface IReceiptPreviewItemProps {
  isLastReceipt: boolean;
  imageSrc: string;
  isActive: boolean;
  fileName: string;
  fileType: string;
  onChooseReceiptHandler: (
    fileName: string,
    fileSrc: string,
    fileType: string
  ) => void;
}
export const ReceiptPreviewItem: FC<IReceiptPreviewItemProps> = (props) => {
  const {
    imageSrc,
    fileName,
    isActive,
    isLastReceipt,
    fileType,
    onChooseReceiptHandler,
  } = props;

  const { onDeleteReceiptFile, onReceiptClickHandler } =
    useReceiptPreviewItemState({
      onChooseReceiptHandler,
      fileType,
      fileName,
      imageSrc,
      isLastReceipt,
    });

  return (
    <Styled.ItemWrapper isActive={isActive}>
      <Styled.ImageWrapper onClick={onReceiptClickHandler}>
        {fileType === 'application/pdf' ? (
          <Styled.PdfWrapper>
            <PdfViewer
              currentFileSrc={imageSrc}
              loaderStyle="small"
              isLoader
              pageWidth={92}
            />
          </Styled.PdfWrapper>
        ) : (
          <Styled.Image isActive={isActive} src={imageSrc} alt={fileName} />
        )}
        <Styled.IconWrapper id={fileName} onClick={onDeleteReceiptFile}>
          <Icon type="deletePhotoIcon" />
        </Styled.IconWrapper>
      </Styled.ImageWrapper>
    </Styled.ItemWrapper>
  );
};
