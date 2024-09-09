import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { IState } from 'services/redux/reducer';

import { setIsFetchingData, setReceipts, setS3UploadStatus } from '../Inbox/reducer/inbox.reducer';
import { receiptCreate, salesCreate, s3Create, s3Upload } from './filesUploadPreview.api';
import {
  resetState,
  setActiveIndex,
} from './reducer/filesUploadPreview.reducer';
import { LocationState, loany } from './types/filesUploadPreview.types';
import { INITIAL_STATE } from './filesUploadPreview.constants';

import { ROUTES } from 'constants/routes';
import { getReceipts } from '../Inbox/inbox.api';
import { updateReceiptItem } from '../ReceiptDetails/receiptDetails.api';

// import { useClientSocketIO } from 'hooks/socketIo';
import { socketEvent } from 'services/socketIo';
import { s3Ack } from 'services/socketAck';

export const useFilesUploadPreviewState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const onNavigateToInboxPage = () => navigate(ROUTES.purchaseInvoices);

  // const { from } = location.state as LocationState;
  const { from } = location.state as loany;
  // console.log(location, from);

  const nameToShow = from.state.action === 'receipt' ? '/Upload Receipt' : 'Upload Invoice';

  const [isLoading, setIsLoading] = useState(false);

  const {
    filesUpload: { previewFiles, filesArray, activeIndex },
    user: { token, user },
  } = useSelector((state: IState) => state);

  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      currentFileName: previewFiles[activeIndex]?.fileName,
      currentFileSrc: previewFiles[activeIndex]?.fileSrc,
      curretFileType: previewFiles[activeIndex]?.fileType,
    }));
  }, [previewFiles]);

  const onChooseReceiptHandler = (
    fileName: string,
    fileSrc: string,
    fileType: string
  ) => {
    setState((prevState) => ({
      ...prevState,
      currentFileName: fileName,
      currentFileSrc: fileSrc,
      curretFileType: fileType,
    }));
    dispatch(setActiveIndex(fileName));
  };

  const onGoBackHandler = () => navigate(-1);

  const onCancelClickHandler = () => {
    dispatch(resetState());
    navigate(from.state.action === 'receipt' ? '/purchase-invoices' : '/sales-invoices');
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

  const s3UploadHandler = async () => {
    try {
      setIsLoading(true);
      const filename = filesArray.map((file) => file.name)
      const key_url_jobid = await s3Create({action: 'receipt',files: filename}, token);
      dispatch(setS3UploadStatus(key_url_jobid));
      dispatch(setIsFetchingData(true));
      console.log(key_url_jobid);

      // const uploadBinaryStatus = await Promise.all(key_url_jobid.map(async (kuj: { key: string, url: string, job_id: string }, index: number) => {
      //   // const singleFormdata = new FormData();
      //   // singleFormdata.append('receipt_photos', filesArray[index]);
      //   //=======================================>

      //   // const reader = new FileReader();
      //   // reader.readAsArrayBuffer(filesArray[index]);
      //   // reader.onloadend = function async(e) {
      //   //   const arrayBuffer = reader.result; // This is the binary data
      //   //   return arrayBuffer;
      //   // };

      //   console.log('binaryFileData');
      //   const binaryFileData = await hitapiwithbinary(filesArray[index]); //convert image to binary
      //   const oneUplaod =  await s3Upload(kuj.url, binaryFileData, filesArray[index]);
      //   if(oneUplaod){
      //     s3Ack(kuj.job_id);
      //   }
      //   return oneUplaod;
      // }));
      // console.log(await uploadBinaryStatus, typeof uploadBinaryStatus, (await uploadBinaryStatus).length);
      socketEvent();
      const arr200 = []
      for (let a=0; a < key_url_jobid.length; a++) {
        const binaryFileData = await hitapiwithbinary(filesArray[a]); //convert image to binary
        const oneUplaod =  await s3Upload(key_url_jobid[a].url, binaryFileData, filesArray[a]);
        arr200.push(oneUplaod);
        if(oneUplaod){
          s3Ack(key_url_jobid[a].job_id);
        }
      }

      console.log(arr200)

      // if (arr200.length == key_url_jobid.length) {
      //   socketEvent();
      // }

      setIsLoading(false);
      dispatch(resetState());
      navigate(ROUTES.purchaseInvoices, { replace: true });
    } catch (error) {
      setIsLoading(false);
      dispatch(setIsFetchingData(false));
      console.log(error);
    }
  };
  const onSaveClickHandler = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      filesArray.forEach((file) => {
        formData.append('receipt_photos', file);
        console.warn(formData);
      });
      formData.append('active_account', user.active_account || '');
      await receiptCreate(formData, token);

      dispatch(setIsFetchingData(true));
      dispatch(resetState());
      setIsLoading(false);
      navigate(ROUTES.purchaseInvoices, { replace: true });
    } catch (error) {
      setIsLoading(false);
      dispatch(setIsFetchingData(false));
      console.log(error);
    }
  };
  const onCreateSalesHandler = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      filesArray.forEach((file) => {
        formData.append('receipt_photos', file);
      });
      formData.append('active_account', user.active_account || '');
      await salesCreate(formData, token);

      dispatch(setIsFetchingData(true));
      dispatch(resetState());
      setIsLoading(false);
      navigate(from.state.action === 'receipt' ? '/purchase-invoices' : '/sales-invoices', { replace: true });
    } catch (error) {
      setIsLoading(false);
      dispatch(setIsFetchingData(false));
      console.log(error);
    }
  };

  const isDisableButton = previewFiles.length > 50;

  return {
    ...state,
    previewFiles,
    filesArray,
    isLoading,
    isDisableButton,
    onChooseReceiptHandler,
    onNavigateToInboxPage,
    onGoBackHandler,
    onCancelClickHandler,
    onSaveClickHandler,
    onCreateSalesHandler,
    s3UploadHandler,
    nameToShow,
  };
};
