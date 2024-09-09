import React from 'react';

import { Icon } from '../Icons/Icons';
import { Styled } from './InputSearch.style';

interface InputProps {
  search: string;
  onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch: React.FC<InputProps> = ({
  search,
  onChangeSearch,
}) => {
  return (
    <>
      <Styled.WrapperInput>
        <Styled.Input
          value={search}
          onChange={onChangeSearch}
          placeholder="Search here..."
        />
        <Styled.WrapperIcon>
          <Icon type="search" />
        </Styled.WrapperIcon>
      </Styled.WrapperInput>
    </>
  );
};
