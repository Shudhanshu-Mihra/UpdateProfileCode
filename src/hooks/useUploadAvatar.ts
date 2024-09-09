import { useCallback, useEffect, useState } from 'react';

import { getProfilePhoto } from 'screens/Settings/settings.api';

export const useUploadAvatar = (
  profile_image: string,
  token: string,
  id: string
) => {
  const [userProfilePhoto, setUserProfilePhoto] = useState('');

  const [isUploadingPhoto, setIsUploadingPhoto] = useState(
    !profile_image ? false : true
  );

  const onGetProfilePhoto = useCallback(async () => {
    try {
      if (!id) return;
      setIsUploadingPhoto(true);
      const { data } = await getProfilePhoto(id, token);
      setIsUploadingPhoto(false);
      setUserProfilePhoto(URL.createObjectURL(data));
    } catch (error) {
      setIsUploadingPhoto(false);
      console.log(error);
    }
  }, [profile_image]);

  useEffect(() => {
    onGetProfilePhoto();
  }, [profile_image]);

  return { userProfilePhoto, isUploadingPhoto };
};
