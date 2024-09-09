import { FC } from 'react';

import { getFirstLetterUppercase } from 'services/utils';

import { UploadInput } from '../../UploadInput';
import { Avatar } from './Avatar/Avatar';
import { AvatarBoxStyles as Styled } from './AvatarBox.style';

interface IAvatarBoxProps {
  userFullName: string;
  id: string;
  name: string;
  onChangeAvatarHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  avatarSrc: string;
  userRole: TRoles;
  isUploadingPhoto: boolean;
  isHover: boolean;
  isActiveAccount: boolean;
  onMouseEnterHandler: () => void;
  onMouseLeaveHandler: () => void;
}

export const AvatarBox: FC<IAvatarBoxProps> = (props) => {
  const {
    userFullName,
    id,
    name,
    isUploadingPhoto,
    avatarSrc,
    userRole,
    isHover,
    isActiveAccount,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onChangeAvatarHandler,
  } = props;

  return (
    <Styled.MainWrapper data-testid='avatarBox'>
      <Styled.ContentWrapper>
        <Styled.ProfileImageWrapper
          data-testid="image-wrapper"
          isHover={isHover}
          isLoading={isUploadingPhoto}
        >
          <UploadInput
            id={id}
            name={name}
            onChangeFiles={onChangeAvatarHandler}
          />
          <Styled.InputLabel
            data-testid="input-label"
            htmlFor={id}
            isLoading={isUploadingPhoto}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          />
          <Avatar
            isUploadingPhoto={isUploadingPhoto}
            isHover={isHover}
            avatarSrc={avatarSrc}
          />
        </Styled.ProfileImageWrapper>
      </Styled.ContentWrapper>
      <Styled.NameAndStatus>{userFullName}</Styled.NameAndStatus>
      {isActiveAccount && (
        <Styled.NameAndStatus isStatus>
          {getFirstLetterUppercase(userRole)}
        </Styled.NameAndStatus>
      )}
    </Styled.MainWrapper>
  );
};
