import { FC, memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// import { EmptyData } from 'components/EmptyData';
import { LoaderComponent } from 'components/Loader';
// import { ROUTES } from 'constants/routes';
import { theme } from '../../styles/theme';

import { TableUploadViewStyles as Styled } from './uploadingView.style';

// import { TableInboxAdmin } from "components/Table/TableInboxAdmin";

// import { ReUseSearch } from "ReUseComponents/reUseSearch/ReUseSearch";
// import { ReUseDatePicker } from "ReUseComponents/reUseDatePicker/ReuseDatePicker";
// import { ReUseStatusFilter } from "ReUseComponents/reUseStatusFilter/ReUseStatusFilter";
// import { ReUseActionMenu } from "ReUseComponents/reUseActionMenu/ReUseActionMenu";
// import { ReUseActionButton } from "ReUseComponents/reUseActionButton/ReUseActionButton";

// import { EMPTY_DATA_STRINGS as Strings } from 'constants/strings';
// import { useClientSocketIO } from 'hooks/useSocketIO';

import { ReUseActionPlaceholder } from 'ReUseComponents/reUseActionPlaceHolder/ReUseActionPlaceHolder';
import { StatusLabel } from 'components/StatusLabel/StatusLabel';
import { Icon } from 'components/Icons';
import { UploadViewModal } from './UploadViewModal';
import { useUploadViewState } from './useUploadView.state';

interface IUploadViewProps {
    status?: boolean;
    IconName?: string;
    uploadFileName?: string;
    uploadFileStatusMessage?: string;
    uploadFileStatus?: string;
    modalShow: boolean;
    modalToggle: () => void;

    totalUploads?: number | null;
	totalSuccess?: number | null;
	totalPending?: number | null;
	totalRejected?: number | null;
    // onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // onCheckedPaidHandler: (
    //   event: React.ChangeEvent<HTMLInputElement>
    // ) => Promise<void>;
}

export const UploadingView: React.FC<IUploadViewProps> = (props)=> {
    const {
        status,
        IconName,
        uploadFileName,
        uploadFileStatusMessage,
        uploadFileStatus,
        modalShow,
        modalToggle,
    } = props;

	const { totalUploads=50, totalSuccess=40, totalPending=9, totalRejected=1 } = props;

    const staticUpload = [
        {uploadFileName: 'tim-hook-3455.jpeg', uploadFileStatusMessage: 'uploaded successfully', uploadFileStatus: 'success'},
        {uploadFileName: 'pizza hut-3456.png', uploadFileStatusMessage: 'Analysing File....', uploadFileStatus: 'processing'},
        {uploadFileName: 'pvr-ff2021.jpeg', uploadFileStatusMessage: 'In processing Queue', uploadFileStatus: 'Pending'},
        {uploadFileName: 'ff2021.jpeg', uploadFileStatusMessage: 'Not a receipt', uploadFileStatus: 'Rejected'},
        {uploadFileName: 'club-lions-ff2021.png', uploadFileStatusMessage: 'unsupported format', uploadFileStatus: 'Error'}
    ]


    // const {
    //     isModalWindowOpen,
    //     onModalWindowToggle,
    // } = useUploadViewState();

    return (
    <>
        { false ? (
            <Styled.LoaderWrapper>
                <LoaderComponent theme="preview" />
            </Styled.LoaderWrapper>
        ) : (
            <UploadViewModal isModalWindowOpen={modalShow} onCloseModalWindowHandler={modalToggle}>
            {/* <Styled.Wrapper> */}
                <ReUseActionPlaceholder>
                    <Styled.Title>Uploading Receipts.... </Styled.Title> <Styled.Stats>Total: {totalUploads} ( <Styled.Stat color={"green"}>Success: {totalSuccess}</Styled.Stat> | <Styled.Stat color={"mango"}>Pending: {totalPending}</Styled.Stat> | <Styled.Stat color={"red"}>Rejected: {totalRejected}</Styled.Stat> )</Styled.Stats>
                    {/* <Styled.Bar>
                        <Styled.Progress width={uploadStatus}></Styled.Progress>
                    </Styled.Bar> */}
                </ReUseActionPlaceholder>
			<Styled.TableWrapper>
            <>
                <Styled.Head>
                    <Styled.Text>Icon</Styled.Text>
                    <Styled.Text>File Name</Styled.Text>
                    <Styled.Text>Status Message</Styled.Text>
                    <Styled.Text>Status</Styled.Text>
                </Styled.Head>
                
                <Styled.Item>
                    <Styled.Selector>
                        <Styled.ValueWrapper>{IconName && <Icon type={IconName || 'addPlus'} />}</Styled.ValueWrapper>
                    </Styled.Selector>
                    <Styled.Selector>
                        <Styled.ValueWrapper>{uploadFileName || '---'}</Styled.ValueWrapper>
                    </Styled.Selector>
                    <Styled.Selector>
                        <Styled.ValueWrapper>{uploadFileStatusMessage || '----------'}</Styled.ValueWrapper>
                    </Styled.Selector>
                    <Styled.Status>
                        <StatusLabel status={uploadFileStatus as Statuses} />
                    </Styled.Status>
                </Styled.Item>

                {staticUpload.map((s3) => {
                    return (
                <Styled.Item>
                    <Styled.Selector>
                        <Styled.ValueWrapper><Icon type={s3.uploadFileStatus == 'success' ? 'uploadSuccess' : 'addPlus'} /></Styled.ValueWrapper>
                    </Styled.Selector>
                    <Styled.Selector>
                        <Styled.ValueWrapper>{s3.uploadFileName || '---'}</Styled.ValueWrapper>
                    </Styled.Selector>
                    <Styled.Selector>
                        <Styled.ValueWrapper>{s3.uploadFileStatusMessage || '----------'}</Styled.ValueWrapper>
                    </Styled.Selector>
                    <Styled.Status>
                        <StatusLabel status={s3.uploadFileStatus as Statuses} />
                    </Styled.Status>
                </Styled.Item>
                    )
                })}
            </>
			</Styled.TableWrapper>
		{/* </Styled.Wrapper> */}
        </UploadViewModal>
      )
    }
    </>
  );
};