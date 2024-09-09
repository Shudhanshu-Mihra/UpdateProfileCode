import { FC } from 'react';

import { IHeaderPanelMasterProps } from 'screens/Master/master.types';

import { Button } from '../Button';
import { Icon } from '../Icons/Icons';
import { Input } from '../Input';
import { HeaderPanelStyles as Styled } from './HeaderPanelMaster.style';

const addPaymentMethodIcon = (
  <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="12px" height="15px" viewBox="0 0 45.40 45.40" strokeWidth="2.5402000000000005">
    <g>
      <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>
    </g>
  </svg>
);

export const HeaderPanelMaster: FC<IHeaderPanelMasterProps> = (props) => {
  const {
    onChangeSearchValueHandler,
    searchValue,
    onAddClickButtonHandler,
    onBlurHandler,
    onFocusSearchHandler,
    isGuard,
    userRole,
    isButton,
    buttonText,
  } = props;

  console.log(isGuard);

  return (
    <Styled.HeaderPanelWrapper>
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
            placeHolder="Search here with name"
          />
          <Styled.IconWrapper>
            <Icon type="smallSearchIcon" />
          </Styled.IconWrapper>
        </Styled.SearchInputWrapper>
      </Styled.SearchWrapper>
      {(isGuard && userRole !== 'user') || isButton ? (
        <Styled.ButtonWrapper>
          <Button
            onClick={onAddClickButtonHandler}
            themedButton="primary"
            width="primary"
          >
            {/* {addPaymentMethodIcon} &nbsp;{buttonText} */}
              <Icon type="addSign" />
            {buttonText}
          </Button>
        </Styled.ButtonWrapper>
      ) : null}
    </Styled.HeaderPanelWrapper>
  );
};
