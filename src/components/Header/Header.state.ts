import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { useUploadAvatar } from 'hooks/useUploadAvatar';
import { useLogout } from 'hooks/useLogout';
import { useGetCompanyLogo } from 'hooks/useGetCompanyLogo';

import {
  setCompanySwitcher,
  setIsSwitchCompany,
} from 'screens/Settings/reducer/settings.reducer';
import { switchAccount } from 'screens/SignUp/reducer/signup.reducer';

import { getUserCompanies, selectActiveAccount } from './header.api';
import { getAvatarLinks } from 'constants/header-links';
import { setIsCompanyChanged } from '../../screens/Inbox/reducer';

export const useHeaderState = () => {
  const dispatch = useDispatch();
  const {
    user: {
      token,
      user: { active_account, id, profile_image_local_url, profile_image_key, profile_image_file },
    },
    settings: { companySwitcher, isFetchingData, isSwitchCompany },
  } = useSelector((state: IState) => state);

  const activeCompany = companySwitcher?.find(
    (account) => account.id === active_account
  );
  // console.log("profile_image:",profile_image_local_url);
  const { userProfilePhoto, isUploadingPhoto } = useUploadAvatar(
    profile_image_local_url,
    token,
    id
  );

  const [isAvatarHover, setIsAvatarHover] = useState(false);
  const [isOpenSwitcher, setIsOpenSwitcher] = useState(false);
  const [activeAccountId, setActiveAccountId] = useState(active_account || '');

  const onMouseEnterHandler = () => setIsAvatarHover(true);
  const onMouseLeaveHandler = () => setIsAvatarHover(false);
  const onClickSwitcherHandler = () => setIsOpenSwitcher(!isOpenSwitcher);
  const onClickOutsideSwitcherHandler = () => setIsOpenSwitcher(false);

  const switcherRef = useOutsideClick(onClickOutsideSwitcherHandler);

  const logoutHandler = useLogout();
  const onLogOut = () => logoutHandler();
  const getCompanyLogo = useGetCompanyLogo();

  const avatarLinks = getAvatarLinks(onLogOut);

  const onSwitchCompany = async (id?: string) => {
    try {
      setActiveAccountId(id || companySwitcher[0].id);
      const { data } = await selectActiveAccount(id || companySwitcher[0].id);
      dispatch(switchAccount(data));
      dispatch(setIsCompanyChanged(true));

      isSwitchCompany && dispatch(setIsSwitchCompany(false));
    } catch (error) {
      console.log(error);
    }
  };

  const onSwitchCompanyHandler = (event: React.MouseEvent<HTMLDivElement>) =>
    onSwitchCompany(event.currentTarget.id);

  const onGetAllCompaniesHandler = async () => {
    try {
      const { data } = await getUserCompanies();
      const companiesWithLogo = await getCompanyLogo(data, token);
      dispatch(setCompanySwitcher(companiesWithLogo || []));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isOpenSwitcher,
    isFetchingData,
    isSwitchCompany,
    onClickSwitcherHandler,
    onSwitchCompanyHandler,
    onSwitchCompany,
    switcherRef,
    companySwitcher,
    activeCompany,
    activeAccountId,
    active_account,
    isAvatarHover,
    avatarLinks,
    userProfilePhoto,
    // profile_image,
    isUploadingPhoto,
    profile_image_key,
    profile_image_file,
    profile_image_local_url,
    useUploadAvatar,
    onGetAllCompaniesHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  };
};
