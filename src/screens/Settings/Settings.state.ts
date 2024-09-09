import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'services/redux/reducer';
import { getCompressedImage, hitapiwithbinary, setCompanyLogoHandler } from 'services/utils';
import { updateS3ProfilePhoto } from './MyAccount/myAccount.api';
import { getProfilePhotoPresiged, s3profileUploadPhoto, s3ProfileCreate,} from './settings.api';
import { setLocalProfileImageURL, setProfileImage, setUserAvatar ,setProfileImageKey } from '../SignUp/reducer/signup.reducer';
import { file } from '@babel/types';
import { string } from 'yup';
import { apiServices } from 'services/api-service';
import { useSideBarState } from 'components/Sidebar/SideBar.state';


export const useSettingsState = () => {
  const {
    user: { fullName, active_account, accounts, profile_image, profile_image_key, profile_image_file, id, profile_image_url},
    token,
  } = useSelector((state: IState) => state.user);

  const dispatch = useDispatch();
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(
    !profile_image_key ? false : true
  );
  const [isHover, setIsHover] = useState(false);
  const [userProfilePhoto, setUserProfilePhoto] = useState('');
  // const [profileKey, setProfileKey] = useState("");
  const [profileKey, setProfileKey] = useState<string | string[]>('');
  const onMouseEnterHandler = () => setIsHover(true);
  const onMouseLeaveHandler = () => setIsHover(false);
  const [file, setFile] = useState<File | null>(null);
  const onChangeFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };
  // const { test } = useSideBarState;

//   const onUploadProfilePhotoHandler = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     try {
//       if (
//         !event.target.files?.length ||
//         !event.target.files[0].type.match('jpg')
//       )
//         return;
//       setIsHover(false);
//       setIsUploadingPhoto(true);
//       const profileFile = event.target.files[0];
//       const formData = new FormData();
//       const compressedFile = await getCompressedImage(event.target.files[0]);
//       const binaryFileData = await hitapiwithbinary(profileFile);
//       console.log('🟥  compressedFile:', compressedFile);
//       formData.append('profile_image', compressedFile);
//       const key_URL_jobId = await s3ProfileCreate({action:"profile",files: [profileFile.name]}, token);
//       // console.log("URL DATA:", key_URL_jobId[0].url);
//       const  data  = await s3profileUploadPhoto( key_URL_jobId[0].url, binaryFileData);
      
//       // await s3profileUploadPhoto( key_URL_jobId[0].url, formData);
// // //NEW
//       // console.log("DATA", data );
//       // dispatch(setUserAvatar(binaryFileData));

//       onGetProfilePhoto(key_URL_jobId[0].key);
//     } catch (error) {
//       setIsHover(false);
//       setIsUploadingPhoto(false);
//       console.log(error);
//     }
//   };

const onUploadProfilePhotoHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
  try {
    const file = event.target.files?.[0];
    // setIsLoading(true);
    if (!file) {
      console.error('No file found');
      // setIsLoading(false);
      return;
    }
    // const url = URL.createObjectURL(file);
    const filename = file.name;
    console.log("data sent in s3UploadHandler:", filename);
    const payload1 = {
      action: 'profile_image',
      files: [filename],
    };
    const key_url = await s3ProfileCreate({action:"profile",files:[file.name]}, token);
    console.log('key-url', key_url);

    if (key_url.length > 0) {
      setProfileKey(key_url[0].key);
      console.log("KEYYYYYYY",key_url[0].key);
      
      const binaryFileData = await hitapiwithbinary(file);
      console.log("binaryFileData:",binaryFileData)
      const response:any = await s3profileUploadPhoto(binaryFileData, key_url[0].url, file);
      if(response.status === 200){
        const {data} = await updateS3ProfilePhoto({profile_image:key_url[0].key});
        console.log("updateS3ProfilePhoto data:", data);
        // dispatch(setUserAvatar(data.user.profile_image));
        dispatch(setProfileImageKey(data.user.profile_image));
        onGetProfilePhoto(data.user.profile_image);
        // test();
      }
    }
  } catch (error) {
    // setIsLoading(false);
    // dispatch(setIsFetchingData(false));
    console.error('Error in s3UploadHandler:', error);
  }
};
const hitapiwithbinary = (file: File): Promise<ArrayBuffer | null | string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = function(e) {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(new Error('Failed to read file'));
    };
  });
}
//new8
const convertUrlToFile = async (url: string, fileName: string): Promise<File> => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], fileName, { type: blob.type });
  return file;
};
  const activeAccount = accounts?.find(
    (account) => account.id === active_account
  );
  const onGetProfilePhoto = async (profileKey?: string) => {
    try {
      console.log("profileKey_SETTINGS:",profileKey)
      // if (!id) return;
      // const { data } = await getProfilePhoto(profileKey || "", token);
      const {url} = await getProfilePhotoPresiged({keys:[profileKey || ""]}, token)
      console.log("response url 1",  url); 
      setIsUploadingPhoto(false);
      //Converting url to file //new8
      const profilePhotoFile = await convertUrlToFile(url, 'profile-photo.png');
      // const response = await fetch(url);
      // const profilePhotoFile = await response.blob();
      // setUserProfilePhoto(url);
      console.log("profilePhotoFile", profilePhotoFile)
      dispatch(setProfileImage(profilePhotoFile));
      // setUserProfilePhoto(URL.createObjectURL(data));
      // dispatch(setUserAvatar(url));
      if(profile_image_file){
        console.log(" profile_image_file",profile_image_file);
        // const localURL = URL.createObjectURL(profilePhotoFile);
        // console.log("localURL", localURL);
        // dispatch(setLocalProfileImageURL(localURL));
      }
      return url;
    } catch (error) {
      setIsUploadingPhoto(false);
      console.log(error);
    }
  };
  return {
    fullName,
    activeAccount,
    isUploadingPhoto,
    isHover,
    userProfilePhoto,
    active_account,
    profile_image,
    profile_image_key,
    profileKey,
    onGetProfilePhoto,
    onMouseEnterHandler,
    onUploadProfilePhotoHandler,
    // s3UploadHandler,
    onMouseLeaveHandler,
    profile_image_file,
  };
};
