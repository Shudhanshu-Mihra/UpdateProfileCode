import { FC } from 'react';
import { Page, Document, pdfjs } from 'react-pdf';

import { LoaderComponent } from '../Loader';

import { PdfViewerStyles as Styled } from './PdfViewer.style';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface IPdfViewerProps {
  isLoader?: boolean;
  loaderStyle?: 'big' | 'small';
  pageWidth: number;
  currentFileSrc: string;
}

export const PdfViewer: FC<IPdfViewerProps> = (props) => {
  const { currentFileSrc, loaderStyle, pageWidth, isLoader } = props;
  const loader = isLoader ? (
    <Styled.LoaderWrapper>
      <LoaderComponent
        theme={loaderStyle === 'big' ? 'preview' : 'avatarMin'}
      />
    </Styled.LoaderWrapper>
  ) : (
    ''
  );
  return (
    <Document file={currentFileSrc} loading={loader}>
      <Page pageNumber={1} loading="" width={pageWidth} renderMode="svg" />
    </Document>
  );
};
