import io from 'socket.io-client';
import Axios from 'axios';
import { CONFIG } from 'constants/config';
import { apiServices } from 'services/api-service';

import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'services/redux/reducer';


//
// this is hooks is depreceated, instead use services/socketIo
export const useClientSocketIO = () => {
    const {
        inbox: { s3UploadStatus },
        user:{ token }
    } = useSelector((state: IState) => state);

    const socketEvent = async (disconnect = false) => {
        const loginID = await apiServices.fetchData(`${CONFIG.apiUrl}profile/get`);
        console.log(loginID.data?.user?.id);
        console.log(s3UploadStatus[0]?.job_id);
        // console.log(CONFIG.apiUrl);

        // Establish the socket connection
        const socketOptions ={
            extraHeaders: {
                Authorization: "Bearer "+token+""
            }
        }
        const socket = io(CONFIG.apiUrl || '', socketOptions);

        socket.on('connect', () => {
            console.log('socket Connected to server');

            // Emit the 's3_ack' event
            socket.emit('s3_ack', { loginId: loginID.data?.user?.id, jobId: s3UploadStatus[0]?.job_id },
                (response: any) => {
                    console.log('s3_ack -->', response);
                }
            );
        });

        socket.on('exception', function(response) {
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

        socket.on("s3_event", (data) => {
            console.log('se event listening', data);
        });
    }

    return {
        socketEvent
    };
}