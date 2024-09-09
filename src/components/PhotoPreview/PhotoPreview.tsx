import { FC } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import { LoaderComponent } from '../Loader';
import { PdfViewer } from '../PdfViewer';
import { PhotoPreviewStyles } from './PhotoPreview.style';

interface IPhotoPreviewProps {
  imageSrc: string;
  isImageLoading: boolean;
  isPDF: boolean;
}

export const PhotoPreview: FC<IPhotoPreviewProps> = (props) => {
  const { imageSrc, isImageLoading, isPDF } = props;

  return (
    <PhotoPreviewStyles.Wrapper>
      {isImageLoading ? (
        <LoaderComponent theme="preview" />
      ) : isPDF ? (
        <PdfViewer
          currentFileSrc={imageSrc}
          pageWidth={300}
          loaderStyle={'big'}
          isLoader={false}
        />
      ) : (
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'Preview Image',
              isFluidWidth: false,
              src: imageSrc,
              height:450,
              width:300
            },
            largeImage: {
              src: imageSrc,
              width: 500, // Higher width for better quality
              height: 1300, // Higher height for better quality
            },
            enlargedImageContainerDimensions: {
              width: 400, // Example width, customize as needed
              height: 450, // Example height, customize as needed
            },
            enlargedImageContainerStyle: { zIndex: 1000 },
          }}
        />
      )}
    </PhotoPreviewStyles.Wrapper>
  );
};
