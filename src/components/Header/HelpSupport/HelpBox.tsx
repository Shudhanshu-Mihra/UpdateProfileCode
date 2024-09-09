import { FC } from "react";

import { AvatarSubmenu } from "../AvatarSubmenu";
import { LoaderComponent } from "../../Loader";
import { Avatar } from "../../Avatar/Avatar";

import { ExtraLinkStyles } from "./HelpBox.style";
import { Icon } from "components/Icons/Icons";
import { HELP_LINK } from "constants/header-links";

interface IAvatarBoxProps extends IAvatarSubmenuLinks {
	onMouseEnterHandler: () => void;
	onMouseLeaveHandler: () => void;
	userProfilePhoto: string;
	isUploadingPhoto: boolean;
	isAvatarHover: boolean;
}
export const HelpBox = () => {
	// const {
	//   onMouseEnterHandler,
	//   onMouseLeaveHandler,
	//   userProfilePhoto,
	//   isUploadingPhoto,
	//   isAvatarHover,
	//   menuItems,
	// } = props;
	return (
		<>
			{HELP_LINK.map((link: any, index) => (
				<ExtraLinkStyles.Link to={link.route} key={index}>
					<Icon type={link.iconName} width={24} height={24} />
				</ExtraLinkStyles.Link>
			))}
		</>
	);
};
