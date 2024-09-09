import { components, DropdownIndicatorProps, GroupBase } from 'react-select';

import { Icon } from 'components/Icons/Icons';

import { IconWrapper } from './CustomSelect.style';

export const DropdownIndicator = (
  props: DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconWrapper isOpen={props.selectProps.menuIsOpen}>
        <Icon type='dropDownArrow' />
      </IconWrapper>
    </components.DropdownIndicator>
  );
};
