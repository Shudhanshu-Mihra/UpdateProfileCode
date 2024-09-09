import { apiServices } from 'services/api-service';

interface IUpdateUserProfile extends IUpdateUserProfilePhoto {
  fullName: string;
  email: string;
  country: string;
  currency: string;
  date_format: string;
  active_account: string;
}
interface IUpdateUserProfilePhoto {
  profile_image: string;
}
interface IChangePassword {
  old_password?: string;
  new_password: string;
}

export const getProfile = (
  active_account?: string,
  isSkipOnboarding?: boolean
) => {
  const URL = `profile/get`;
  return apiServices.fetchData(URL, { active_account, isSkipOnboarding });
};

export const resetPassword = (payload: IChangePassword) => {
  const URL = `profile/change-password`;
  return apiServices.changeData(URL, payload);
};
export const updateProfile = (payload: IUpdateUserProfile) => {
  const URL = `profile/update`;
  return apiServices.changeData(URL, payload);
};
export const updateS3ProfilePhoto = (payload: IUpdateUserProfilePhoto) => {
  const URL = `profile/update`;
  return apiServices.changeData(URL, payload);
};
export const linkSocialAccount = (payload: {
  email: string;
  country: string;
  newPassword: string;
}) => {
  const URL = 'auth/bind-social-account';
  return apiServices.postData(URL, payload);
};
