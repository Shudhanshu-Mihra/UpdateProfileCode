import { FC } from 'react';

import { Input } from '../../Input';

import { UnitFieldsStyles as Styled } from './UnitFields.style';

const unitFields = [
  {
    type: 'input',
    id: 'Description',
    value: '',
  },
  {
    type: 'input',
    id: 'VAT Rate',
    value: '',
  },
  {
    type: 'input',
    id: 'Units',
    value: '',
  },
  {
    type: 'input',
    id: 'Price',
    value: '',
  },
  {
    type: 'input',
    id: 'Net',
    value: '',
  },
  {
    type: 'input',
    id: 'Tax',
    value: '',
  },
  {
    type: 'input',
    id: 'Total',
    value: '',
  },
];

export const UnitFields: FC = () => {
  return (
    <Styled.MainWrapper>
      <Input
        value={unitFields[0].value as string}
        // inputType={item.inputType}
        // onChangeValue={item.onChange}
        isHiddenLabel
        isRemoveBorder
        isNoMargin
      />
      <Styled.ColumnsDevider>
        {unitFields.slice(1).map((item, key) => (
          <div key={item.id}>
            <Input
              value={item.value as string}
              onChangeValue={() => { }}
              isHiddenLabel
              isRemoveBorder
              isNoMargin
            />
          </div>
        ))}
      </Styled.ColumnsDevider>
    </Styled.MainWrapper>
  );
};
