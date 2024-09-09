import React, { FC ,useEffect,useState } from 'react';

import { AvatarBox } from './AvatarBox';
// import { LinksList } from './LinksList';
import { SidebarStyles as Styled } from './Sidebar.style';
import { Icon } from 'components/Icons/Icons';
import { LinkItem } from './LinkItem';
import { useSideBarState } from './SideBar.state';
import { Button } from 'components/Button';
import { ROUTES } from 'constants/routes';
import styled from 'styled-components';
import { DeleteModalWindow } from '../DeleteModalWindow';
import { ReUseActionButton } from 'ReUseComponents/reUseActionButton/ReUseActionButton';

interface ISideBar {
  userRole: TRoles;
  userFullName: string;
  avatatSrc: string;
  onUploadProfilePhotoHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  isUploadingPhoto: boolean;
  isHover: boolean;
  onMouseEnterHandler: () => void;
  onMouseLeaveHandler: () => void;
  isActiveAccount: boolean;
}

export const Sidebar: FC<ISideBar> = (props) => {
  const {
    userFullName,
    userRole,
    avatatSrc,
    isUploadingPhoto,
    isHover,
    isActiveAccount,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onUploadProfilePhotoHandler,
  } = props;
  const {
    settingsLink,
    logoutHandler,
    onLogOut,
    onDeleteModalWindowToggle,
    isDeleteModalWindowOpen,
    profile_image_local_url,
    onDelete,
    profile_image_file
  } = useSideBarState();

	const [profileGetUrl2, setProfileGetUrl2] = useState<string>("");
  const [runCount, setRunCount] = useState(0);

  // useEffect(() => {
  //   // if (profile_image_file) {
  //   //   console.log(typeof profile_image_file); // Should print 'object' for a File or Blob
  //   //   console.log(profile_image_file);        // Should log the actual File/Blob object details
      
  //   //   try {
  //   //     const localURL = URL.createObjectURL(profile_image_file);
  //   //     setProfileGetUrl(localURL);
  //   //   } catch (error) {
  //   //     console.error("Error creating Blob URL:", error);
  //   //   }
  //   // }

  //   if (profile_image_file) {
  //     setTimeout(() => {
	// 		console.log(typeof profile_image_file); // Should print 'object' for a File or Blob
	// 		console.log(profile_image_file);        // Should log the actual File/Blob object details
  //     console.log('with out setTimeOut Working Side BAr')
		
	// 		try {
  //       const localURL = URL.createObjectURL(profile_image_file);
  //       console.log("local URL",localURL);
	// 			setProfileGetUrl(localURL);
	// 		} catch (error) {
	// 			console.error("Error creating Blob URL:", error);
  //     }
  //   },2000)

  //   }
  //   // else {
	// 	// 	// isLoading = true;
  //   //   setTimeout(() => {
  //   //     console.log('setTimeOut Working Side BAr')
	// 	// 		if (profile_image_file) {
	// 	// 			const localURL = URL.createObjectURL(profile_image_file);
	// 	// 			setProfileGetUrl(localURL);
	// 	// 		}
	// 	// 	},4000)
	// 	//  }


  // },[])
  
  // useEffect(() => {
  //   let timeoutId: NodeJS.Timeout;

  //   const fetchProfileImage = () => {
  //     if (profile_image_file && !profileGetUrl) {
  //       try {
  //         const localURL = URL.createObjectURL(profile_image_file);
  //         setProfileGetUrl(localURL); // Set the URL in the state
  //         console.log("Local URL fetched successfully:", localURL);

  //         // Clear the timeout and stop further retries
  //         clearTimeout(timeoutId);
  //       } catch (error) {
  //         console.error("Error creating Blob URL:", error);
  //         // Retry after 2 seconds if there's an error
  //         timeoutId = setTimeout(fetchProfileImage, 2000);
  //       }
  //     }
  //   };

  //   // Only fetch if the URL is not already set
  //   if (!profileGetUrl) {
  //     fetchProfileImage();
  //   }

  //   // Cleanup function to clear timeout and revoke URL
  //   return () => {
  //     clearTimeout(timeoutId);
  //     if (profileGetUrl) {
  //       URL.revokeObjectURL(profileGetUrl); // Revoke the Blob URL when component unmounts
  //     }
  //   };
  // }, [profile_image_file, profileGetUrl]);
  
  useEffect(() => {
    if (runCount < 3 && profile_image_file) {
      const timeoutId = setTimeout(() => {
        console.log(`Running useEffect, execution count: ${runCount + 1}`);
        console.log(typeof profile_image_file); // Should print 'object' for a File or Blob
        console.log(profile_image_file);        // Should log the actual File/Blob object details
        console.log('Working Side BAr without setTimeout');

        try {
          const localURL = URL.createObjectURL(profile_image_file);
          console.log("local URL", localURL);
          setProfileGetUrl2(localURL);
        } catch (error) {
          console.error("Error creating Blob URL:", error);
        }

        // Increment the run count after execution
        setRunCount(prevCount => prevCount + 1);
      }, 2000);

      // Clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [runCount, profile_image_file]);
  return (
    <Styled.MainWrapper>
      <AvatarBox
        id="avatar"
        name="avatar"
        isActiveAccount={isActiveAccount}
        isUploadingPhoto={isUploadingPhoto}
        userRole={userRole}
        // avatarSrc={profile_image_local_url} 
        avatarSrc={profileGetUrl2} 
        onChangeAvatarHandler={onUploadProfilePhotoHandler}
        userFullName={userFullName}
        isHover={isHover}
        onMouseEnterHandler={onMouseEnterHandler}
        onMouseLeaveHandler={onMouseLeaveHandler}
      />
      {/* <LinksList isActiveAccount={isActiveAccount}/> */}

      <Styled.listWrapper data-testid="links">
      {settingsLink.map((link) => (
        <LinkItem
          // icon = {<Icon type="accountIcon"/>}
          icon={link.icon}
          key={link.title}
          path={link.route}
          title={link.title}
          onClick={link.onClick}
          exact={link.route === '/settings'}
          isDisabled={
            !isActiveAccount &&
            link.route !== ROUTES.settings &&
            !isActiveAccount &&
            link.route !== ROUTES.login
          }
        />
      ))}
        </Styled.listWrapper>


      <Styled.ButtonWrapper>
        {/* <Button
          onClick={onLogOut}
          themedButton="primary"
          width="secondary"
        >
         Logout
        </Button> */}
                <ReUseActionButton displayText="Logout" buttonType="actionButton" onClick={onLogOut}  widthType="primary" themedButton='primary'  displayIconType="logoutIcon" customWidth='100%' margin='30px 0 0 0' />
                </Styled.ButtonWrapper>

      <DeleteModalWindow
        isLoading={false}
        onCloseDeleteModalWindowHandler={onDeleteModalWindowToggle}

        onDeleteButtonClickHandler={onDelete}
        isDeleteModalWindowOpen={isDeleteModalWindowOpen}
        deleteItemName={''}
        account={'yes'}
        categoryName=""
      ></DeleteModalWindow>
    </Styled.MainWrapper>
  );
};
