import io from 'socket.io-client';
import Axios from 'axios';
import { CONFIG } from 'constants/config';
import { apiServices } from 'services/api-service';

import { persisterStore, store } from 'services/redux/store';

import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'services/redux/reducer';

export const s3Ack = async (jobID: string) => {
    const loginID = await apiServices.fetchData(`${CONFIG.apiUrl}profile/get`);
    const token = store.getState().user.token;
    const s3UploadResponse = store.getState().inbox.s3UploadStatus;

    // console.log(loginID.data?.user?.id, s3UploadResponse);
    // console.log(CONFIG.apiUrl);

    // Establish the socket connection
    const socketOptions = {
        extraHeaders: {
            Authorization: "Bearer " + token + ""
        }
    }
    const socket = io(CONFIG.apiUrl || '', socketOptions);

    socket.on('connect', () => {
        // console.log('socket Connected to server');
            // Emit the 's3_ack' event
            socket.emit('s3_ack', { loginId: loginID.data?.user?.id, jobId: jobID },
                (response: any) => {
                    console.log('s3_ack -->', response);
                }
            );
    });

    // socket.on("s3_event", (data) => {
    //     console.log('s3_event listening', data);
    // });
}
