import React from "react";
import { format } from "date-fns";

import { getCorrectCustomId } from "services/utils";

import { CheckboxItem } from "components/Checkbox/Checkbox";
import { StatusLabel } from "components/StatusLabel/StatusLabel";

import { TableExpenseItemStyles as Styled } from "./TableExpenseItem.style";
import { useTableExpenseState } from "./TableExpenseItem.state";
import { IReportTableProps, IReportList } from "../../../../screens/ExpenseReport/types/expenseReport.types";

export interface IExpenseReport {
	reportId: string;
	isChecked: boolean;
	onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	key: string;
	reportIndex: number;
	reportType: string;
	reportFor: string;
	reportName: string;
	date: Date | string;
	tax: number | string | null;
	total: number | string | null;
	dateFormat: string;
}

export const TableReportExpItem: React.FC<IExpenseReport> = (props) => {
	const { reportIndex, reportType, reportFor, reportName, reportId, date, total, tax, isChecked, onCheckedItemHandler, dateFormat } = props;

	// const { onReceiptDetailsClickHandler } = useTableExpenseState({
	//   reportId,
	//   reportIndex,
	// });

	return (
		<Styled.Item>
			<Styled.Checkbox>
				<CheckboxItem name={reportId} isChecked={isChecked} onChange={onCheckedItemHandler} />
			</Styled.Checkbox>
			<Styled.Selector>
				<Styled.ValueWrapper>{reportFor || "---"}</Styled.ValueWrapper>
			</Styled.Selector>
			<Styled.Selector>
				<Styled.ValueWrapper>{reportType || "---"}</Styled.ValueWrapper>
			</Styled.Selector>
			<Styled.View id={reportId} /* onClick={onReceiptDetailsClickHandler} */>
				<Styled.Link>{reportName}</Styled.Link>
			</Styled.View>
			<Styled.Selector>
				<Styled.Selector>{!!date && dateFormat ? format(new Date(date), dateFormat) : "---"}</Styled.Selector>
			</Styled.Selector>
			<Styled.Selector>
				<Styled.ValueWrapper>{total || "---"}</Styled.ValueWrapper>
			</Styled.Selector>
			<Styled.Selector>
				<Styled.ValueWrapper>{tax || "---"}</Styled.ValueWrapper>
			</Styled.Selector>
		</Styled.Item>
	);
};
