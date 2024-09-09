import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteFile } from 'screens/FilesUploadPreview/reducer';

interface IuseReceiptPreviewItemStateProps {
  isLastReceipt: boolean;
  onChooseReceiptHandler: (
    fileName: string,
    fileSrc: string,
    fileType: string
  ) => void;
  fileName: string;
  imageSrc: string;
  fileType: string;
}
export const useReceiptPreviewItemState = (
  props: IuseReceiptPreviewItemStateProps
) => {
  const {
    fileName,
    imageSrc,
    isLastReceipt,
    fileType,
    onChooseReceiptHandler,
  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onReceiptClickHandler = () =>
    onChooseReceiptHandler(fileName, imageSrc, fileType);

  const onDeleteReceiptFile = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(deleteFile(event.currentTarget.id));
    isLastReceipt && navigate(-1);
  };
  return { onDeleteReceiptFile, onReceiptClickHandler };
};
