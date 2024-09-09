import { useLogout } from 'hooks/useLogout';
// import { useToggle } from '../../../hooks/useToggle';
import { useToggle } from '../../hooks/useToggle';

import { apiServices } from '../../services/api-service';

import { useSelector } from 'react-redux';
import { IState } from '../../services/redux/reducer';
// import { getSettingsLinks } from './LinksList.constants';
import { getSettingsLinks } from './SideBar.constants';

export const useSideBarState = () => {
//delete 


const {
  user: {
    user:{profile_image_local_url,profile_image_file,profile_image_key}, user
  },
} = useSelector((state: IState) => state);
  console.log("profile_image_key" ,profile_image_key);
const onDelete = async () => {
  const activeAccount = user?.accounts?.find((item: { id: string }) => item.id === user?.active_account)
  if (activeAccount) {
    try {
      const URL = `company-member/delete-own/${user.id}`;
      await apiServices.deleteData(URL, { active_account: activeAccount.id });
    } catch { }
  }
  onDeleteModalWindowToggle()
  localStorage.clear()
  window.location.reload()
}


const [isDeleteModalWindowOpen, onDeleteModalWindowToggle] = useToggle();


//logout 
  const logoutHandler = useLogout();
  const onLogOut = () => logoutHandler();

  const settingsLink = getSettingsLinks(onDeleteModalWindowToggle);

  return {
    settingsLink,
    logoutHandler,
    onLogOut,
    onDeleteModalWindowToggle,
    profile_image_local_url,
    isDeleteModalWindowOpen,
    onDelete,
    profile_image_file
  }
};
