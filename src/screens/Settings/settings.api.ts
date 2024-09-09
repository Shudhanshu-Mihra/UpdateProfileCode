import Axios from 'axios';

import { apiServices } from 'services/api-service';

import { CONFIG } from 'constants/config';
import { Binary, file } from '@babel/types';

interface ICreateCompanyMemberPayload {
  name?: string;
  isDifferentsRoles?: boolean;
  role: string;
  email: string;
  companiesIds?: string[];
  // thisUserPermissions: any[];
  new_user_permissions: any[];
}


interface IUpdateCompanyMember {
  name?: string;
  email?: string;
  isInviteCompanyMember?: boolean;
  active_account?: string;
  role: string;
}

interface ICompanyUpadetePayload{
  company_id:string,
  company_name: string,
  company_default_permissions?:any[]
}


export const logOut = () => {
  const URL = `auth/log-out`;
  return apiServices.changeData(URL, {});
};

export const getCompanyMembers = (params?: ISearchParams) => {
  const URL = 'company/get-members';
  return apiServices.fetchData(URL, params);
};

export const createCompanyMember = (payload: ICreateCompanyMemberPayload) => {
  console.log('-----',payload)
  const URL = `company-member/create`;
  return apiServices.postData(URL, payload);
};

export const companyCustomPermissions = (payload:ICompanyUpadetePayload) => {
  console.log('-----',payload)
  const URL = `company/company-default-permissions`;
  return apiServices.postData(URL, payload);
  
};

export const updateCompanyMember = (
  payload: IUpdateCompanyMember,
  memberId: string
) => {
  const URL = `company-member/update/${memberId}`;
  return apiServices.changeData(URL, payload);
};

export const resendInvitation = (invitationId: string) => {
  const URL = `company-member/resend-invitation/${invitationId}`;
  return apiServices.postData(URL, {});
};

export const deleteCompanyMember = (
  memberId: string,
  active_account?: string
) => {
  const URL = `company-member/delete/${memberId}`;
  return apiServices.deleteData(URL, { active_account });
};

export const getAllCompanies = () => {
  const URL = `company/get-all`;
  return apiServices.fetchData(URL);
};

export const getManyCompanies = (params?: ISearchParams) => {
  const URL = `company/get-many`;
  return apiServices.fetchData(URL, params);
};

export const getOneCompany = (companyId: string) => {
  const URL = `company/get/${companyId}`;
  return apiServices.fetchData(URL);
};

export const companyDelete = (companyId: string) => {
  const URL = `company/delete/${companyId}`;
  return apiServices.deleteData(URL);
};

export const companyDeleteLogo = (companyId: string) => {
  const URL = `company/delete-logo/${companyId}`;
  return apiServices.deleteData(URL);
};

export const changeCompanyLogo = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}company/change-logo`;
  return Axios.post(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};
export const companyCreate = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}company/create`;
  return Axios.post(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const companyUpdate = (
  payload: FormData,
  token: string,
  companyId: string
) => {
  const URL = `${CONFIG.apiUrl}company/update/${companyId}`;
  return Axios.put(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCompanyLogo = (companyId: string, token: string) => {
  const URL = `${CONFIG.apiUrl}company/get-logo/${companyId}`;
  return Axios.get(URL, {
    headers: {
      'Content-Type': 'image/jpeg',
      Authorization: `Bearer ${token}`,
    },
    responseType: 'blob',
  });
};

// export const s3ProfileCreate = (payload: {action:string, files: string[]}, token: string) => {
//   const URL = `${CONFIG.apiUrl}aws/presiged`;
//   return Axios.put(URL, payload, {
//     headers: {
//       // 'content-type': `multipart/form-data`,
//       'content-type': `application/json`,
//       Authorization: `Bearer ${token}`,
//     },
//   }).then(response => {

//     if (response.data) {
//       console.log("s3ProfileCreate",response.data);
//       return response.data;
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });
// };

// // export const s3profileUploadPhoto = (url: string , payload:string) => {

// //   console.log("URL:s3profileUploadPhoto: ",url);
// //   const file = payload.get('receipt_photos') as File;
// //   console.log("S3PROFILE UPLOAD",payload);
// //   // if (!file) {
// //   //   throw new Error("No file found in FormData under the key 'receipt_photos'");
// //   // }
// //   return new Promise((resolve, reject) => {
// //     // const reader = new FileReader();
// //     // reader.readAsArrayBuffer(file);
// //     // reader.onloadend = () => {
// //     //   // if (reader.result) {
// //     //     const binaryData = reader.result;
// //         Axios.put(url, payload, {
// //           headers: {
// //             'Content-Type': file.type || 'image/jpeg',
// //           },
// //         })
// //         .then(response => resolve(response))
// //         .catch(error => reject(error));
// //       // } else {
// //       //   reject(new Error('Failed to read file as binary data.'));
// //       // }
// //     });

// //     reader.onerror = () => {
// //       reject(new Error('Error reading file.'));
// //     };
// //   });
// // }

// // export const s3profileUploadPhoto = (URL: string ,payload: string | ArrayBuffer | null, token: string, file: File) => {
// //   // console.log("payload.type", typeof payload);
// //   console.log("payload.type", file);
// //   return Axios.post(URL, payload, {
// //     headers: {
// //       'Content-Type': file.type || 'image/jpeg',
// //       // 'Content-Disposition': `attachment; filename="${file.name}"`,
// //     }
// //   });
// // };

// export const s3profileUploadPhoto = (url: string, payload: string) => {
//   console.log("URL:s3profileUploadPhoto: ", url);
//   console.log("S3PROFILE UPLOAD", payload);

//   return new Promise((resolve, reject) => {
//     Axios.put(url, payload, {
//       headers: {
//         'Content-Type': 'application/octet-stream', // Set this to the appropriate content type if needed
//       },
//     })
//       .then(response => resolve(response))
//       .catch(error => reject(error));
//   });
// };

export const s3ProfileCreate = (payload: {action:string,files: string[]}, token: string) => {
  const URL = `${CONFIG.apiUrl}aws/presiged`;
  console.log('APIIIIIIIII', URL, '---', payload);
  return Axios.put(URL, payload, {
    headers: {
      // 'content-type': `multipart/form-data`,
      'content-type': `application/json`,
      Authorization: `Bearer ${token}`,
    },
  }).then(response => {
    if (response.data) {
    console.log(response.data);
      return response.data;
    }
  })
  .catch(error => {
    console.error(error);
  });;
};
export const s3profileUploadPhoto = (payload: string | ArrayBuffer | null, url: string, file:File ) => {
  console.log("URL:s3profileUploadPhoto: ", url);
  // console.log("S3PROFILE UPLOAD", payload);

  return new Promise((resolve, reject) => {
    Axios.put(url, payload,{
      // headers: {
      //   'Content-Type': 'application/octet-stream',
      //   Authorization: `Bearer ${token}`,
      // },
      headers: {
        'Content-Type': file.type || 'image/jpeg',
        'Content-Disposition': `attachment; filename="${file.name}"`,
      }
    })
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

// export const getProfilePhoto = (key: string, token: string) => {
//   const URL = `${CONFIG.apiUrl}profile/update`;
//   console.log('id key:', key);
//   return Axios.post(
//     URL,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )
//   .then((response) => {
//     return "profile_image" = response.config.key; 
//   })
//   .catch((error) => {
//     console.error('Error fetching profile photo:', error);
//     throw error; 
//   });
// };

export const getProfilePhoto = (id: string, token: string) => {
  const URL = `${CONFIG.apiUrl}profile/get-photo/${id}`;
  return Axios.get(URL, {
    headers: {
      'Content-Type': 'image/jpeg',
      Authorization: `Bearer ${token}`,
    },
    responseType: 'blob',
  });
};

export const  getProfilePhotoPresiged = (payload: {keys:string[]}, token: string) => {
  const URL = `${CONFIG.apiUrl}aws/presiged`;
  return Axios.post(URL, payload, { 
    headers: {
      // 'content-type': `multipart/form-data`,
      'content-type': `application/json`,
      Authorization: `Bearer ${token}`,
    },
  }).then(response => {
    if (response) {
    console.log(response);
      return response.data;
    }
  })
  .catch(error => {
    console.error(error);
  });
};