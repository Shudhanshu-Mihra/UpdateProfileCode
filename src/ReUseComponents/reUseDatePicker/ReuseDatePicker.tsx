import React from "react";

import { DatePickerStyle as Styled } from "./reUseDatePicker.style";
import { CustomDatePicker } from "components/CustomDatePicker";
import { DateRangePicker } from "components/CustomDateRangePicker";
import { useOutsideClick } from "hooks/useOutsideClick";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icons";
import { Input } from "../../components/Input";
import { CustomSelect } from "../../components/CustomSelect";

interface IreUseDatePickerProps {
	onChangeDateFilterValueHandler: (newValue: unknown /* ,actionMeta: ActionMeta<unknown> */) => void;
	datePickerRef: React.RefObject<HTMLButtonElement>;
	dateFilterValue: IOption;
	onChangeDate: (date: Date) => void;
	onClickOutsideDatePickerHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
	isDatePickerOpen: boolean;
	dateValue: Date | null;
	setIsDatePickerOpen: () => void;
	formattedDate: string;
	isInputDate: boolean;
}
export const ReUseDatePicker: React.FC<IreUseDatePickerProps> = (props) => {
    const {
        datePickerRef,
        dateFilterValue,
        isDatePickerOpen,
        dateValue,
        formattedDate,
        isInputDate,
        onChangeDate,
        setIsDatePickerOpen,
        onChangeDateFilterValueHandler,
        onClickOutsideDatePickerHandler,
    } = props;

    const dateFilterOptions = [
        { value: 'all', label: `All` },
        { value: 'today', label: `Today` },
        { value: 'yesterday', label: `YesterDay` },
        { value: 'thisweek', label: `This Week` },
        { value: 'lastweek', label: `Last Week` },
        { value: 'thismonth', label: `This Month` },
        { value: 'lastmonth', label: `Last Month` },
        { value: 'thisyear', label: `This Year` },
        { value: 'lastyear', label: `Last Year` },
        { value: 'range', label: `Range (From - To)` },
        { value: 'customdate', label: `Particular Date` },
    ];

	return (
		<Styled.DateFilterBatchWrapper>
			<Styled.DateFilterSelector>
				<CustomSelect height="70vh" width="210px" onChangeValueHandler={onChangeDateFilterValueHandler} options={dateFilterOptions} value={dateFilterValue} paginate />
			</Styled.DateFilterSelector>
			{dateFilterValue?.value === "range" || dateFilterValue?.value === "customdate" ? <Styled.connector></Styled.connector> : null}
			<Styled.DatePickerWrapper>
				{dateFilterValue?.value === "range" ? (
					<DateRangePicker
						isInputDate={isInputDate}
						isDatePickerOpen={isDatePickerOpen}
						onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
						onChange={onChangeDate}
						onDatePickerClickHandler={setIsDatePickerOpen}
						selectedDate={dateValue}
						formattedDate={formattedDate}
						datePickerRef={datePickerRef}
					/>
				) : dateFilterValue?.value === "customdate" ? (
					<CustomDatePicker
						isInputDate={false}
						isDatePickerOpen={isDatePickerOpen}
						onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
						onChange={onChangeDate}
						onDatePickerClickHandler={setIsDatePickerOpen}
						selectedDate={dateValue}
						formattedDate={formattedDate}
						datePickerRef={datePickerRef}
					/>
				) : null}
			</Styled.DatePickerWrapper>
		</Styled.DateFilterBatchWrapper>
	);
};
