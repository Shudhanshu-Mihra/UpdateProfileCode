import React, { ReactNode } from "react";

import { Pagination } from "components/Pagination";
import { CustomSelect } from "components/CustomSelect";

import { FormButtonPanelStyles as Styled } from "./FormButtonPanel.style";

import { PAGINATION_ARRAY } from "constants/pagination-array";

export interface IFormButtonPanelStyle {
	position?: 'fixed' | 'absolute';
	bottom?: string;
	left?: string;
	right?: string;
	margin?: string;
	padding?: string;

	children?: any;

	paginationCustomStyle?: {
		position?: 'fixed' | 'absolute';
		bottom?: string;
		left?: string;
		right?: string;
		margin?: string;
	  };
}

// interface newPaginationProps extends IPaginationPanelProps, IFormButtonPanelStyle {}

export const FormButtonPanel: React.FC<IFormButtonPanelStyle> = (props) => {
	// const { currentPage, inputPaginationValue, onBackwardClick, onChangePaginationInputValue, onChangeItemsPerPage, onForwardClick, onEnterGoToClick, onGoToClick, pages, onChangePage, itemsPerPage } = props;
	const { children } = props;
	const { position = "absolute", bottom, left, right, margin, padding }:IFormButtonPanelStyle = props.paginationCustomStyle ?? {};
	return (
		<Styled.Wrapper position={position} bottom={bottom} left={left} right={right} margin={margin} padding={padding}>
			{children }
		</Styled.Wrapper>
	);
};
