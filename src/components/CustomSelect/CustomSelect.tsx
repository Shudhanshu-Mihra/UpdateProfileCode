import { FC } from 'react';
import {
  ActionMeta,
  SingleValue,
  OnChangeValue,
  MultiValue,
} from 'react-select';

import { DropdownIndicator } from './DropdownIndicator';
import { StyledReactSelect, SelectWrapper, SelectLabel } from './CustomSelect.style';

import { IOption, IsMulti } from './types';

interface ICustomSelectProps {
  name?: string;
  onChangeValueHandler?: (
    newValue: OnChangeValue<IOption, IsMulti> | unknown,
    actionMeta: ActionMeta<IOption | unknown>
  ) => void;
  marginBottom?: string;
  value?: SingleValue<IOption> | MultiValue<IOption>;
  height?: string;
  width?: string;
  defaultOption?: IOption;
  options?: IOption[];
  paginate?: boolean;
  isDisabled?: boolean;
  isMulti?: boolean;
  isFullWidth?: boolean;
  isRemoveBorder?: boolean;
  label?: string;
}

export const CustomSelect: FC<ICustomSelectProps> = (props) => {
  const {
    onChangeValueHandler,
    defaultOption,
    options,
    value,
    marginBottom,
    height,
    width,
    paginate,
    name,
    isDisabled,
    isMulti,
    isFullWidth,
    isRemoveBorder,
    label,
  } = props;

  return (
    <SelectWrapper>
      {!label ? null : <SelectLabel>{label}</SelectLabel>}
      <StyledReactSelect
        isRemoveBorder={isRemoveBorder}
        height={height}
        width={width}
        marginBottom={marginBottom}
        components={{ DropdownIndicator }}
        classNamePrefix="Select"
        options={options}
        defaultValue={defaultOption}
        value={value}
        onChange={onChangeValueHandler}
        paginate={paginate}
        name={name}
        menuPlacement="auto"
        isDisabled={isDisabled}
        placeholder={isDisabled && 'Nothing for select'}
        isMulti={isMulti}
        isClearable={false}
        isFullWidth={isFullWidth}
      />
    </SelectWrapper>
  );
};
