import { styled } from "styles/theme";
import { Link, PathMatch } from "react-router-dom";

export const DatePickerStyle = {
	DateFilterBatchWrapper: styled.div`
		display: flex;
		align-items: center;
		width: max-content;
	`,
	DateFilterSelector: styled.div`
		width: max-content;
	`,
	SelectWrapper: styled.div`
		display: flex;
		justify-content: flex-start;
		gap: 10px;
		width: auto;
	`,
	// margin-left: 10px;
	DatePickerWrapper: styled.div``,
	connector: styled.div`
		width: 10px;
		height: 1px;
		background-color: #a5b1be;
	`,
};
