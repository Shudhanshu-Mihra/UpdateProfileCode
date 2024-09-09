import React from 'react';
import { ActionMeta } from 'react-select';

import { ReceiptsSelectsStyles } from './ReceiptsSelects.style';
import { CustomSelect } from '../../CustomSelect';

interface IReceiptsSelectsProps {
  timeFilterValue: {
    value: string;
    label: string;
  };
  timeFilterOptions: {
    value: string;
    label: string;
  }[];
  onChangeCategoryFieldHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;
}

export const ReceiptsSelects: React.FC<IReceiptsSelectsProps> = (props) => {
  const { timeFilterOptions, timeFilterValue, onChangeCategoryFieldHandler } =
    props;
  return (
      <ReceiptsSelectsStyles.SelectorBox>
        <CustomSelect
          defaultOption={timeFilterOptions[0]}
          options={timeFilterOptions}
          value={timeFilterValue}
          onChangeValueHandler={onChangeCategoryFieldHandler}
          marginBottom="0"
          isRemoveBorder
        />
      </ReceiptsSelectsStyles.SelectorBox>
  );
};
