import React from "react";
import { CustomSelect } from "components/CustomSelect";
import {selectStatusStyle as Styled} from './reUseStatusFilter.style';

import { ActionMeta } from "react-select";

interface IreUseStatusFilterProps {
    onChangeStatusValueHandler: (
        newValue: unknown,
        actionMeta: ActionMeta<unknown>
    ) => void;
    statusValue: IOption;
}
export const ReUseStatusFilter: React.FC<IreUseStatusFilterProps> = (props) => {
    const { onChangeStatusValueHandler, statusValue } = props;
    const statusFilterOptions = [
        { value: 'all', label: `All` },
        { value: 'processing', label: `Processing` },
        { value: 'accepted', label: `Accepted` },
        { value: 'review', label: `Review` },
        { value: 'rejected', label: `Rejected` },
    ];
	return (
		<Styled.SelectWrapper>
			<CustomSelect height="45" onChangeValueHandler={onChangeStatusValueHandler} options={statusFilterOptions} value={statusValue} paginate />
		</Styled.SelectWrapper>
	);
};