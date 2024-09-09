import { FC, useState, useEffect } from "react";

import { UploadStatusStyle as Styled } from "./uploadStatus.style";
import { useUploadViewState } from "screens/UploadingView/useUploadView.state";

interface IUploadStatus {
	totalUploads?: number | null;
	totalSuccess?: number | null;
	totalPending?: number | null;
	totalRejected?: number | null;
    margin?: string;
    uploadingModalToggle: () => void;
}
export const UploadStatus: FC<IUploadStatus> = (props) => {
	const { totalUploads=50, totalSuccess=40, totalPending=9, totalRejected=1, margin, uploadingModalToggle } = props;
    const [uploadStatus, setUploadStatus] = useState(5);

    // const {
    //     isModalWindowOpen,
    //     onModalWindowToggle,
    // } = useUploadViewState();

	useEffect(() => {
		// isShowPopup && setTimeout(closePopupFc, delay || 3000);
        const calcProgress = 100*(totalSuccess && totalRejected ? totalSuccess + totalRejected : 1) / (totalUploads ? totalUploads : 1);
        setUploadStatus(calcProgress);
	}, [totalUploads, totalSuccess, totalPending, totalRejected]);

	return (
        <Styled.Wrapper onClick={uploadingModalToggle} margin={margin} title={`Total(${totalUploads}) | Success(${totalSuccess}) | Pending(${totalPending}) | Rejected(${totalRejected})`}>
            <Styled.Title>Uploading... <Styled.Stats>Total: {totalUploads} ( <Styled.Stat color={"green"}>{totalSuccess}</Styled.Stat> | <Styled.Stat color={"mango"}>{totalPending}</Styled.Stat> | <Styled.Stat color={"red"}>{totalRejected}</Styled.Stat> )</Styled.Stats></Styled.Title>
            <Styled.Bar>
                <Styled.Progress width={uploadStatus}></Styled.Progress>
            </Styled.Bar>
        </Styled.Wrapper>
    )
};
