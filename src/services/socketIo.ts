import io from 'socket.io-client';
import Axios from 'axios';
import { CONFIG } from 'constants/config';
import { apiServices } from 'services/api-service';

import { persisterStore, store } from 'services/redux/store';

import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'services/redux/reducer';


// export const useClientSocketIO = () => {
export const socketEvent = async (disconnect = false) => {

    const loginID = await apiServices.fetchData(`${CONFIG.apiUrl}profile/get`);
    const token = store.getState().user.token;
    const s3UploadResponse = store.getState().inbox.s3UploadStatus;

    console.log(loginID.data?.user?.id);
    console.log(s3UploadResponse);
    // console.log(CONFIG.apiUrl);

    // Establish the socket connection
    const socketOptions = {
        extraHeaders: {
            Authorization: "Bearer " + token + ""
        }
    }
    const socket = io(CONFIG.apiUrl || '', socketOptions);

    socket.on('connect', () => {
        console.log('socket Connected to server');

        // for (const kuj of s3UploadResponse) {
        //     // console.log(number); // Prints each number in the array
        //     // Emit the 's3_ack' event
        //     socket.emit('s3_ack', { loginId: loginID.data?.user?.id, jobId: kuj.job_id },
        //         (response: any) => {
        //             console.log('s3_ack -->', response);
        //         }
        //     );
        // }
    });

        socket.on("s3_event", (data) => {
            console.log('s3_event listening', data);
        });

    socket.on('exception', function (response) {
        console.log('exception error', response);
    });

    socket.on("connect_error", (error) => {
        if (socket.active) {
            console.log('socket reconnect');
            // temporary failure, the socket will automatically try to reconnect
        } else {
            // the connection was denied by the server
            // in that case, `socket.connect()` must be manually called in order to reconnect
            console.log(error.message);
        }
    });

    console.log(disconnect)
    if (disconnect) {
        socket.disconnect();
    }
    socket.on('disconnect', () => {
        console.log('Socket Disconnected from server');
    });

}

//     return {
//         socketEvent
//     };
// }