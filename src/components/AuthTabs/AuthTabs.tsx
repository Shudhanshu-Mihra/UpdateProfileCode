import { FC } from 'react';

import { AuthTabsStyles as Styled } from './AuthTabs.styles';

import { STRINGS } from 'constants/strings';

interface IAuthTabsprops {
  tabText?: string;
  isAuth?: boolean;
  isSignUp?: boolean;
  onSignUpClickHandler?: () => void;
  onSignInClickHandler?: () => void;
}

export const AuthTabs: FC<IAuthTabsprops> = (props) => {
  const {
    onSignInClickHandler,
    onSignUpClickHandler,
    isSignUp,
    isAuth,
    tabText,
  } = props;
  return (
    <Styled.TabsWrapper>
      {isAuth ? (
        <>
          <Styled.ActiveTabWrapper onClick={onSignInClickHandler}>
            <Styled.Tab isActive={!isSignUp}>
              {STRINGS.sign_in_up.sign_in}
            </Styled.Tab>
          </Styled.ActiveTabWrapper>
          <Styled.ActiveTabWrapper>
            <Styled.Tab isActive={isSignUp} onClick={onSignUpClickHandler}>
              {STRINGS.sign_in_up.sign_up}
            </Styled.Tab>
          </Styled.ActiveTabWrapper>
        </>
      ) : (
        <Styled.ActiveTabWrapper>
          <Styled.Tab isActive>{tabText}</Styled.Tab>
        </Styled.ActiveTabWrapper>
      )}
    </Styled.TabsWrapper>
  );
};
