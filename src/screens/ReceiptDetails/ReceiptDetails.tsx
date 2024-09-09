import { FC, useEffect, useState } from "react";

import { ReceiptDetailsHeader } from "components/ReceiptDetailsHeader";
import { PhotoPreview } from "components/PhotoPreview";
import { PhotoDetailsContent } from "components/PhotoDetails/PhotoDetailsContent/PhotoDetailsContent";

import { ReceiptDetailsStyles as Styled } from "./ReceiptDetails.style";
import { useReceiptDetailsState } from "./receiptDetails.state";
// import { usePhotoDetailsContentState } from "components/PhotoDetails/PhotoDetailsContent/PhotoDetailsContent.state";
// import { ButtonsBox } from "components/PhotoDetails/ButtonsBox";
// import { ButtonsBoxNew } from 'components/PhotoDetails/ButtonBoxNew';
import { CheckboxItem } from "components/Checkbox";

export const ReceiptDetails: FC = () => {
	console.log("!!!!!!!!!!!!!!!!! - RD parent");
	const { onGoBackHandler, onClickGetNextReceiptHandler, onClickGetPrevReceiptHandler, onGetReceiptImageHandler, imageSrc, selectedReceipt, receipts, selectedReceiptIndex, isImageLoading, isPDF } = useReceiptDetailsState();

	// const { isLoading, onChangeRadioButtonHandler, saveReceiptHandler, onCancelButtonClickHandler, onChangePaymentStatus, paymentStatus, onChangePublishStatus, isPaymentStatus, isPublishStatus } = usePhotoDetailsContentState();
	const [changePaid, setChangePaid] = useState(false);
	const fnChangePaid = (): void => {
		setChangePaid(false);
	};
	const [actionValue, setActionValue] = useState(false);
	const fnSetvalue = (event: React.ChangeEvent<HTMLInputElement>): void => {
		// console.log(event.target.checked);
		setActionValue(event.target.checked);
		setChangePaid(true);
	};
	const [payStatus, setPayStatus] = useState(false);
	const getPayStatus = (what: boolean | undefined) => {
		if (what === undefined) {
			setPayStatus(false);
		} else {
			setPayStatus(what);
		}
	};
	// -------------->
	const [changePublish, setchangePublish] = useState(false);
	const fnChangePublish = (): void => {
		setchangePublish(false);
	};
	const [newPublish, setNewPublish] = useState(false);
	const fnSetPublish = (event: React.ChangeEvent<HTMLInputElement>): void => {
		// console.log(event.target.checked);
		setNewPublish(event.target.checked);
		setchangePublish(true);
	};
	const [livePublish, setLivePublish] = useState(false);
	const getLivePublish = (what: boolean | undefined) => {
		if (what === undefined) {
			setLivePublish(false);
		} else {
			setLivePublish(what);
		}
	};

	useEffect(() => {
		onGetReceiptImageHandler();
	}, [selectedReceipt]);

	return (
		<Styled.Section>
			<ReceiptDetailsHeader
				onClickGetNextReceiptHandler={onClickGetNextReceiptHandler}
				onClickGetPrevReceiptHandler={onClickGetPrevReceiptHandler}
				totalReceiptsCount={receipts?.length}
				currentReceiptPosition={Number(selectedReceiptIndex) + 1}
				onGoBackHandler={onGoBackHandler}
				customId={selectedReceipt?.custom_id}
			/>
			<Styled.BodyWrapper>
				<PhotoPreview imageSrc={imageSrc} isImageLoading={isImageLoading} isPDF={isPDF} />
				<Styled.ReceiptDetailWrapper>
					{/* <PhotoDetails /> */}
					<PhotoDetailsContent changePaid={changePaid} fnChangePaid={fnChangePaid} actionValue={actionValue} fnGetPayStatus={getPayStatus} changePublish={changePublish} fnChangePublish={fnChangePublish} newPublish={newPublish} getLivePublish={getLivePublish} />
					<Styled.ReceiptStatusContainer>
						<Styled.CheckboxContainer>
							<CheckboxItem
								name={"Payment status"}
								isChecked={payStatus || false}
								labelText={"Mark as Paid"}
								onChange={fnSetvalue}
								// onChange={onChangePaymentStatus}
							/>
							<CheckboxItem
								name={"Publish status"}
								isChecked={livePublish || false}
								labelText={"Mark as Published"}
								onChange={fnSetPublish}
							/>
						</Styled.CheckboxContainer>
						<Styled.Description>
							<Styled.DescriptionInput type="text" placeholder="Description" />
						</Styled.Description>
					</Styled.ReceiptStatusContainer>
				</Styled.ReceiptDetailWrapper>
			</Styled.BodyWrapper>
			{/* <Styled.Footer>
        <div>
          <ButtonsBoxNew
            onRejectButtonClickHandler={onChangeRadioButtonHandler}
            isLoading={isLoading}
          />
        </div>
        <div style={{ display: "flex" }}>
          <ButtonsBox
            saveReceiptHandler={saveReceiptHandler}
            onCancelButtonClickHandler={onCancelButtonClickHandler}
            isLoading={isLoading}
            onApproveButtonClickHandler={onChangeRadioButtonHandler}
          />
        </div>
      </Styled.Footer> */}
		</Styled.Section>
	);
};
