import { FC } from "react";

import { getIsDisabledLink } from "services/utils";

import { CustomLink } from "../../CustomLink/CustomLink";

import { LinksBoxStyles as Styled } from "./LinksBox.style";

import { ADMIN_LINKS } from "constants/header-links";

interface ILinksBox {
	active_account: string | null;
}
export const LinksBox: FC<ILinksBox> = (props) => {
	const { active_account } = props;
	return (
		<Styled.Links>
			<Styled.LinkWrapper>
				{ADMIN_LINKS.map((link) => (
					<CustomLink key={link.title} to={link.route} tabs={link.tabs} icontype={link.iconName} isLast={link.isLast} is_sales={link.title === "SALES"} isDisabled={getIsDisabledLink(link.route, active_account)}>
						{link.title}
					</CustomLink>
				))}
			</Styled.LinkWrapper>
		</Styled.Links>
	);
};
