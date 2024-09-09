import { FC, useEffect, useState } from "react";
import { CompanySwitcher } from "../CompanySwitcher/CompanySwitcher";
import { Icon } from "../Icons";

import { AvatarBox } from "./AvatarBox";
import { HelpBox } from "./HelpSupport";
import { HeaderStyles as Styled } from "./Header.style";
import { useHeaderState } from "./Header.state";
import { LinksBox } from "./LinksBox";
import { ROUTES } from "constants/routes";
import { useSettingsState } from "screens/Settings/Settings.state";
import { setLocalProfileImageURL } from "screens/SignUp/reducer/signup.reducer";
import { useDispatch } from "react-redux";
import { getProfile } from 'screens/Settings/MyAccount/myAccount.api';
import { setProfileImageKey } from 'screens/SignUp/reducer/signup.reducer';
import { useSideBarState } from "components/Sidebar/SideBar.state";

export const Header: FC = () => {
	const [profileGetUrl, setProfileGetUrl] = useState<string>("");
	const {
		isOpenSwitcher,
		switcherRef,
		companySwitcher,
		activeCompany,
		activeAccountId,
		isFetchingData,
		isSwitchCompany,
		active_account,
		isAvatarHover,
		avatarLinks,
		userProfilePhoto,
		isUploadingPhoto,
		// profile_image,
		profile_image_file,
		profile_image_local_url,
		profile_image_key,
		onMouseEnterHandler,
		onMouseLeaveHandler,
		onSwitchCompany,
		onClickSwitcherHandler,
		onSwitchCompanyHandler,
		onGetAllCompaniesHandler,
	} = useHeaderState();
	// const {profile_image_local_url} = useSideBarState();
	const { onGetProfilePhoto } = useSettingsState();
	// useEffect(() => {
	// 	const fetchProfile = async () => {
	// 	  try {
	// 		const image = await getProfile(); 
	// 		if (image && image.data.user.profile_image) {
	// 		  console.log("_image_image", image.data.user.profile_image); 
	// 		  dispatch(setProfileImageKey(image.data.user.profile_image));
	// 		  console.log("our key:", profile_image_key);
	// 		//   setTimeout(() => {
	// 		const profileURL = onGetProfilePhoto(profile_image_key);
	// 		setProfileGetUrl(profileURL);
	// 		//   }, 2000);
			  
	// 		} else {
	// 		  console.log("Profile data is undefined or incomplete");
	// 		}
	// 	  } catch (error) {
	// 		console.error("Error fetching profile:", error);
	// 	  }
	// 	};
	// 	  fetchProfile();
	//   }, [profile_image_key]);
	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const image = await getProfile();
				if (image && image.data.user.profile_image) {
					console.log("_image_image", image.data.user.profile_image);
					dispatch(setProfileImageKey(image.data.user.profile_image));
					console.log("our key:", profile_image_key);
	
					// Await the onGetProfilePhoto to resolve and then set the URL
					// const profileURL = await onGetProfilePhoto(profile_image_key);
					// setProfileGetUrl(profileURL); 
					onGetProfilePhoto(profile_image_key);
					// const test = () => {
					// 	setTimeout(async () => {
					// 		console.log("profile get url 1: ", profile_image_local_url);
					// 		setProfileGetUrl(profile_image_local_url || "");
					//   }, 5000);
					// }
					// if(profile_image_local_url === undefined){
					// 	console.log("profile_image_local_url is undefined");
					// 	test();
					// }
					// 	setTimeout(async () => {
					// 		console.log("profile get url 1: ", profile_image_local_url);
					// 		setProfileGetUrl(profile_image_local_url || "");
					//   }, 5000);
					
				} else {
					console.log("Profile data is undefined or incomplete");
				}
			} catch (error) {
				console.error("Error fetching profile:", error);
			}
		};
		fetchProfile();
	}, [profile_image_key]);
	
	useEffect(() => {

		if (profile_image_file) {
			console.log(typeof profile_image_file); // Should print 'object' for a File or Blob
			console.log(profile_image_file);        // Should log the actual File/Blob object details
			console.log("if condition");        // Should log the actual File/Blob object details
		
			try {
				const localURL = URL.createObjectURL(profile_image_file);
				setProfileGetUrl(localURL);
			} catch (error) {
				console.error("Error creating Blob URL:", error);
			}
		}
		// else {
		// 	// isLoading = true;
		// 	console.log("else condition");        // Should log the actual File/Blob object details

		// 	setTimeout(() => {
		// 		if (profile_image_file) {
		// 			const localURL = URL.createObjectURL(profile_image_file);
		// 			setProfileGetUrl(localURL);
		// 		}
		// 	},4000)
		//  }


	},[profile_image_file])
	
	const dispatch = useDispatch();
	// console.log(activeAccountId);
	useEffect(() => {
		active_account && onGetAllCompaniesHandler();
	}, [isFetchingData]);

	useEffect(() => {
		isSwitchCompany && onSwitchCompany();
	}, [isSwitchCompany]);
	// useEffect(()=>{
	// 	if(profile_image_file){
	// 		const url = URL.createObjectURL(profile_image_file);
	// 		dispatch(setLocalProfileImageURL(url));
	// 		console.log("profile_image_local_url:",profile_image_local_url)
	// 	}
	// });
	// const {profile_image_file} = useSettingsState();
	// const [imageUrl, setImageUrl] = useState<string | null>(null);
	// useEffect(() => {
	// 	if (profile_image_file) {
	// 	  const url = URL.createObjectURL(profile_image_file);
	// 	  setImageUrl(url);
	// 	  return () => {
	// 		URL.revokeObjectURL(url);
	// 	  };
	// 	}
	//   }, [profile_image_file]);
	return (
		<Styled.Header>
			<Styled.Container>
				{/* header icon part  */}
				<Styled.Link to={ROUTES.home} is_disabled={!active_account ? "true" : ""}>
					<Styled.LogoWrapper>
						<Styled.LogoIconWrapper>
							<Icon type="receiptHubLogo" />
						</Styled.LogoIconWrapper>
						<Styled.Title>ReceiptHub</Styled.Title>
					</Styled.LogoWrapper>
				</Styled.Link>
				{/* header icon part  end */}

				<LinksBox active_account={active_account} />
				<Styled.BlocksWrapper>
					<Styled.Notifications>
						{active_account ? (
							<CompanySwitcher activeAccountId={activeAccountId} activeCompany={activeCompany} companies={companySwitcher} isOpenSwitcher={isOpenSwitcher} onClickSwitcherHandler={onClickSwitcherHandler} switcherRef={switcherRef} onSwitchCompanyHandler={onSwitchCompanyHandler} />
						) : null}
						<HelpBox />
						<AvatarBox onMouseEnterHandler={onMouseEnterHandler} onMouseLeaveHandler={onMouseLeaveHandler} userProfilePhoto={profileGetUrl} isUploadingPhoto={isUploadingPhoto} isAvatarHover={isAvatarHover} menuItems={avatarLinks} />
					</Styled.Notifications>
				</Styled.BlocksWrapper>
			</Styled.Container>
		</Styled.Header>
	);
};
