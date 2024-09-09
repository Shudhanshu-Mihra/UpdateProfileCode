import { FC } from 'react';

import { AvatarSubmenu } from '../AvatarSubmenu';
import { LoaderComponent } from '../../Loader';
import { Avatar } from '../../Avatar/Avatar';
import { useHeaderState } from '../Header.state';
import { AvatarBoxStyles as Styled } from './AvatarBox.style';

interface IAvatarBoxProps extends IAvatarSubmenuLinks {
  onMouseEnterHandler: () => void;
  onMouseLeaveHandler: () => void;
  userProfilePhoto: string | null;
  isUploadingPhoto: boolean;
  isAvatarHover: boolean;
}
export const AvatarBox: FC<IAvatarBoxProps> = (props) => {
  const {
    onMouseEnterHandler,
    onMouseLeaveHandler,
    userProfilePhoto,
    isUploadingPhoto,
    isAvatarHover,
    menuItems,
  } = props;
  return (
    <Styled.AvatarWrapper
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <Styled.IconWrapper>
        {isUploadingPhoto ? (
          <Styled.LoaderWrapper>
            <LoaderComponent theme="avatarMin" />
          </Styled.LoaderWrapper>
        ) : userProfilePhoto ? (
          <Styled.Avatar src={userProfilePhoto} alt="avatar" />
        ) : (
          <Avatar />
        )}
      </Styled.IconWrapper>
      {isAvatarHover && <AvatarSubmenu menuItems={menuItems} />}
    </Styled.AvatarWrapper>
  );
};
