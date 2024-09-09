import { FC } from 'react';

// import { PhotoDetailsContent } from './PhotoDetailsContent/PhotoDetailsContent';
import { PhotoDetailsStyles } from './PhotoDetails.style';
// import { PhotoDetailsTabs } from './PhotoDetailsTabs';

export const PhotoDetails: FC = () => (
  <PhotoDetailsStyles.ContentWrapper>
      {/* <PhotoDetailsContent /> This section is never called after modification */}
  </PhotoDetailsStyles.ContentWrapper>
);
