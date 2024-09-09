import Axios from 'axios';
import { CONFIG } from 'constants/config';

export const s3Create = (payload: {action:string,files: string[]}, token: string) => {
  const URL = `${CONFIG.apiUrl}aws/presiged`;
  console.warn('APIIIIIIIII', URL, '---', payload);
  return Axios.put(URL, payload, {
    headers: {
      // 'content-type': `multipart/form-data`,
      'content-type': `application/json`,
      Authorization: `Bearer ${token}`,
    },
  }).then(response => {
    console.log(response.data); 
    if (response.data) {
      return response.data;
    }
  })
  .catch(error => {
    console.error(error);
  });
};

export const s3Upload = (url: string, payload: string | ArrayBuffer | null, file: File) => {
  const URL = url;
  console.warn('APIIIIIIIII', URL, '---', payload);
  // return Axios.put(URL, payload, {
  //   headers: {
  //     'content-type': `multipart/form-data`,
  //     // Authorization: `Bearer ${token}`,
  //   },
  // }).then(response => {
  //   console.log(response); // Access the response data here
  //   if (response.status) {
  //     return response.status;
  //   }
  // })
  // .catch(error => {
  //   console.error(error);
  // });;
  return Axios.put(URL, payload, {
    headers: {
      'Content-Type': file.type || 'image/jpeg',
      'Content-Disposition': `attachment; filename="${file.name}"`,
    }
  }).then(response => {
    console.log(response); // Access the response data here
    if (response.status) {
      return response.status;
    }
  })
  .catch(error => {
    console.error(error);
  });;

  // return fetch(URL, {
  //   method: 'PUT',
  //   body: payload,
  // })
  //   // .then(response => response.json())
  //   .then(response => response.status && response.status)
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
}

export const receiptCreate = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}receipt/create`;
  console.warn('APIIIIIIIII', URL, '---', payload);
  return Axios.post(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};
export const salesCreate = (payload: FormData, token: string) => {
  const URL = `${CONFIG.apiUrl}sale-invoice/create`;
  return Axios.post(URL, payload, {
    headers: {
      'content-type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  });
};
