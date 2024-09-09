import React from "react";

import { Icon } from "components/Icons/Icons";

import { Checkbox, CheckboxContainer } from "./Checkbox.style";

export interface CheckboxProps {
	children?: React.ReactNode;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	labelText?: string;
	isChecked: boolean;
}

export const CheckboxItem = (props: CheckboxProps) => {
	const { isChecked, labelText, onChange, name } = props;

	return (
		<Checkbox.Label>
			<CheckboxContainer>
				<Checkbox.HiddenCheckbox type="checkbox" id={name} name={name} onChange={onChange} checked={isChecked} />
				<Checkbox.StyledCheckbox isChecked={isChecked} id={name} /* onChange={onChange} */ >
					{!!isChecked && <Icon type="checkmark" />}
				</Checkbox.StyledCheckbox>
			</CheckboxContainer>
			{labelText && <Checkbox.LabelText>{labelText}</Checkbox.LabelText>}
		</Checkbox.Label>
	);
};
