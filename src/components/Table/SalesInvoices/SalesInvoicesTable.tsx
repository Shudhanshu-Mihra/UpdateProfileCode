import { FC, memo } from "react";

import { CheckboxItem } from "../../Checkbox";
import { LoaderComponent } from "components/Loader";

import { setIsSorted } from "services/utils"; // import { ISalesInvoice } from '../../../screens/SalesInvoices/types/salesInvoices.types';

import { TableButton } from "../TableButton/TableButton";
import { SalesInvoicesItem } from "./SalesInvoicesItem";
import { TableSalesInvoiceStyles as Styled } from "./SalesInvoiceTable.style";
import { TABLE_COLUMN_NAMES, TABLE_GRID_MARKUP } from "./salesInvoiceTable.constants"; // interface ISalesInvoicesTableProps  extends Omit<TableInvoiceProps, 'invoiceList'> {  invoicesList: IInvoice[];}

export const SalesInvoicesTable: FC<TableInvoiceProps> = memo((props) => {
	const {
		onCheckedItemHandler,
		onCheckedPublishMockFuncHandler,
		onCheckedAllItemsHandler,
		onCheckedPaidHandler,
		onCheckedApproveHandler,
		isAllChecked,
		dateFormat,
		sortField,
		sortOrder,
		requestSort,

		sortedInvoices,
		isContentLoading,
	} = props;

	return (
		<Styled.TableWrapper>
			{isContentLoading && (
				<Styled.LoaderWrapper>
					<LoaderComponent theme="preview" />
				</Styled.LoaderWrapper>
			)}
			<Styled.Head>
				<Styled.Checkbox>
					<CheckboxItem isChecked={isAllChecked} onChange={onCheckedAllItemsHandler} name="allChecked" />
				</Styled.Checkbox>
				<Styled.Text>ID</Styled.Text>
				{TABLE_COLUMN_NAMES.map((item) => {
					const isSorted = setIsSorted(sortField, sortOrder, item.id);
					return (
						<Styled.Selector key={item.id} id={item.id} onClick={requestSort} isSorted={sortField === item.id}>
							<TableButton isSorted={isSorted}>{item.name}</TableButton>
						</Styled.Selector>
					);
				})}
				<Styled.Text>Status</Styled.Text>
			</Styled.Head>
			{sortedInvoices.length ? (
				sortedInvoices.map((invoice, index) => (
					<>
						{/* {console.warn('@!@!@!@!@!@', invoice)} */}
						<SalesInvoicesItem
							publishStatus={invoice?.publish_status}
							approveStatus={invoice?.approve_status}
							paymentStatus={invoice?.payment_status}
							key={invoice.id}
							invoiceIndex={index}
							customId={invoice?.custom_id}
							invoiceId={invoice?.id}
							currency={invoice?.currency?.value || 'BTC'}
							// currency={invoice?.currency.value}
							category={""}
							date={invoice?.saleinvoice_date}
							net={invoice?.net}
							total={invoice?.total}
							vatCode={invoice?.vat_code}
							tax={invoice?.tax}
							status={invoice?.status}
							customer={invoice?.customer}
							isChecked={invoice?.isChecked}
							onCheckedItemHandler={onCheckedItemHandler}
							onCheckedPaidHandler={onCheckedPaidHandler}
							onCheckedApproveHandler={onCheckedApproveHandler}
							onCheckedPublishMockFuncHandler={onCheckedPublishMockFuncHandler}
							dateFormat={dateFormat}
						/>
					</>
				))
			) : (
				<Styled.EmptyContentWrapper>No records found</Styled.EmptyContentWrapper>
			)}
		</Styled.TableWrapper>
	);
});
