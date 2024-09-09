import React from "react";
import { ReUseActionPlaceholderStyle as Styled } from "./reUseActionPlaceHolder.style";

interface IActionPlaceHolder {
	children?: any;
}

export const ReUseActionPlaceholder: React.FC<IActionPlaceHolder> = (props) => {
	const { children } = props;
	return (
        <Styled.ActionPanelPlaceHolder>
            {children}
        </Styled.ActionPanelPlaceHolder>
    );
};
