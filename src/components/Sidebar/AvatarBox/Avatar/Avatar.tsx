import { FC } from 'react';

import { Icon } from '../../../Icons';
import { LoaderComponent } from '../../../Loader';
import { HoverUploadLogo } from '../AvatarBox.style';
import { AvatarStyles as Styled } from './Avatar.style';

interface IAvatarProps {
  isUploadingPhoto: boolean;
  isHover: boolean;
  avatarSrc: string;
}
export const Avatar: FC<IAvatarProps> = (props) => {
  const { avatarSrc, isHover, isUploadingPhoto } = props;
  return (
    <>
      {isUploadingPhoto ? (
        <Styled.LoaderWrapper>
          <LoaderComponent theme="preview" />
        </Styled.LoaderWrapper>
      ) : avatarSrc ? (
        <Styled.Image imageSrc={avatarSrc} />
      ) : (
        !isUploadingPhoto &&
        !avatarSrc && (
          <Styled.ImageWrapper>
            <Icon type="settingsAvatar" height={55} width={75} />
          </Styled.ImageWrapper>
        )
      )}
      {!isUploadingPhoto && isHover && (
        <HoverUploadLogo data-testid="hover-upload-logo">
          <Icon type="cloudUpload" width={50} height={55} />
        </HoverUploadLogo>
      )}
    </>
  );
};
