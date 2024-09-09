import React from "react";

import { Pagination } from "components/Pagination";
import { CustomSelect } from "components/CustomSelect";

import { PaginationPanelStyles as Styled } from "./PaginationPanel.style";

import { PAGINATION_ARRAY } from "constants/pagination-array";

export interface IPaginationCustomStyle {
	position?: 'fixed' | 'absolute';
	bottom?: string;
	left?: string;
	right?: string;
	margin?: string;
	padding?: string;
}

interface newPaginationProps extends IPaginationPanelProps, IPaginationCustomStyle {}

export const PaginationPanel: React.FC<newPaginationProps> = (props) => {
	const { currentPage, inputPaginationValue, onBackwardClick, onChangePaginationInputValue, onChangeItemsPerPage, onForwardClick, onEnterGoToClick, onGoToClick, pages, onChangePage, itemsPerPage } = props;
	const { position = "absolute", bottom, left, right, margin, padding }:IPaginationCustomStyle = props.paginationCustomStyle ?? {};
	return (
		<Styled.Wrapper position={position} bottom={bottom} left={left} right={right} margin={margin} padding={padding}>
			<Styled.SelectorWrapper>
				<CustomSelect height="40" options={PAGINATION_ARRAY} onChangeValueHandler={onChangeItemsPerPage} value={itemsPerPage} marginBottom="0" paginate />
			</Styled.SelectorWrapper>
			<Styled.PagesWrapper>
				<Pagination
					onChangePaginationInputValue={onChangePaginationInputValue}
					inputPaginationValue={inputPaginationValue}
					onEnterGoToClick={onEnterGoToClick}
					onGoToClick={onGoToClick}
					onChangePage={onChangePage}
					onForwardClick={onForwardClick}
					onBackwardClick={onBackwardClick}
					currentPage={currentPage}
					pages={pages}
				/>
			</Styled.PagesWrapper>
		</Styled.Wrapper>
	);
};
