import React from 'react';

import { Icon } from 'components/Icons';
import { Input } from 'components/Input';
import { SearchBox as Styled } from './ReUseSearch.style';

interface IserachBox {
    searchValue: string;
    onChangeSearchValueHandler: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlurHandler?: () => void;
    onFocusSearchHandler?: () => void;
}

export const ReUseSearch: React.FC<IserachBox> = (props) => {
    const { searchValue, onChangeSearchValueHandler, onFocusSearchHandler, onBlurHandler} = props;
  return (
    <Styled.SearchWrapper>
        <Styled.SearchInputWrapper>
        <Input
        value={searchValue}
        onChangeValue={onChangeSearchValueHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusSearchHandler}
        isHiddenLabel
        isNoMargin
        inputTheme="search"
        placeHolder="Search here"
    />
        <Styled.IconWrapper>
            <Icon type="smallSearchIcon" />
        </Styled.IconWrapper>
    </Styled.SearchInputWrapper>
  </Styled.SearchWrapper>
  )
}
