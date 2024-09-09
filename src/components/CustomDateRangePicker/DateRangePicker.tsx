import { FC, RefObject, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { CustomDatePickerStyles as Styled } from "./DateRangePicker.style";
import { DateButton } from "./DateButton";
import { boolean } from "yup";

interface ICustomDatePicker {
	onChange?: (date: Date) => void;
	onDatePickerClickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isDatePickerOpen?: boolean;
	selectedDate?: Date | null;
	onClickOutsideDatePickerHandler?: (event: React.MouseEvent<HTMLDivElement>) => void;
	datePickerRef?: RefObject<HTMLButtonElement>;
	isInputDate: boolean;
	formattedDate: string;

	selectsRange?: boolean;
	startDate?: Date | null;
	endDate?: Date | null;
	isClearable?: boolean;
}

export const DateRangePicker: FC<ICustomDatePicker> = (props) => {
	const { isInputDate, selectedDate, isDatePickerOpen, formattedDate, datePickerRef, onDatePickerClickHandler, onClickOutsideDatePickerHandler, onChange } = props;
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(null);

	const yesChange = (dates: any): any => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
		if (start && end) {
			onChange && onChange(dates);
		}
	};

	const dateLabelCondition = !formattedDate && isInputDate ? "" : formattedDate ? `${formattedDate}` : "Choose Date";

	return (
		<Styled.Container data-testid="date-picker-component">
			<DateButton datePickerRef={datePickerRef} onClick={onDatePickerClickHandler} isInputDate={isInputDate} isOpen={isDatePickerOpen}>
				{dateLabelCondition}
			</DateButton>
			{isDatePickerOpen && (
				<Styled.Wrapper isFormattedDate={!!dateLabelCondition} isInputDate={isInputDate} data-testid="date-picker-menu">
					<DatePicker data-testid="date-picker1" onClickOutside={onClickOutsideDatePickerHandler} onChange={yesChange} selected={startDate} /* onChange={onChange} */ selectsRange startDate={startDate} endDate={endDate} inline />
					{/* <DatePicker data-testid="date-picker1" onClickOutside={onClickOutsideDatePickerHandler} selected={selectedDate} onChange={onChangeDateHandler} allowSameDay inline /> */}
				</Styled.Wrapper>
			)}
		</Styled.Container>
	);
};
