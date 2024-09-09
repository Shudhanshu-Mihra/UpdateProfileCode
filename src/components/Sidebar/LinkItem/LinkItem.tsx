
import { FC } from 'react';
import { useLinkItemState } from './LinkItem.state';
import { Icon } from 'components/Icons/Icons'; // Adjust import path as necessary
import { LinkItemStyles } from './LinkItem.style';

interface ILinkItemProps {
  exact?: boolean;
  onClick?: () => void;
  title: string;
  icon: string; 
  path: string;
  isDisabled: boolean;
}

export const LinkItem: FC<ILinkItemProps> = (props) => {
  const { path, title, exact, isDisabled, onClick, icon } = props;
  const isActive = useLinkItemState({ path, exact });
// console.log("onclick and path "+ onClick +" "+ path );
  return (
    <LinkItemStyles.Link
      data-testid="link-item"
      onClick={onClick}
      to={path}
      active={isActive}
      is_disabled={isDisabled ? `${isDisabled}` : ''}
    >
      <LinkItemStyles.IconsDesign active={isActive} iconType={icon}>
        <Icon type={icon} />
      </LinkItemStyles.IconsDesign>
      {title}
    </LinkItemStyles.Link>
  );
};
