import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { signInWithGoogle } from 'services/firebase';

import { loginWithGoogle } from 'screens/Login/login.api';
import {
  setCurrencies,
  setGoogleSocialAccount,
  setUser,
  setUserInfo,
} from 'screens/SignUp/reducer/signup.reducer';

import { ROUTES } from 'constants/routes';

export const useGoogleButton = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onGoogleButtonClickHandler = async () => {
    try {
      const userData = await signInWithGoogle();
      if (!userData) return;

      setIsGoogleLoading(true);
      const payload: IOAuthLogin = {
        socialAccountId: userData?.id || '',
        email: userData?.email || '',
        fullName: userData?.name || '',
        type: 'google',
      };

      const { data } = await loginWithGoogle(payload);
      dispatch(setUser(data));
      data.company && dispatch(setUserInfo({ company: data.company }));
      dispatch(setCurrencies(data.currencies));
      dispatch(
        setGoogleSocialAccount({
          accData: {
            googleEmail: data.socialAccount.googleEmail,
            googleId: data.socialAccount.googleId,
            id: data.socialAccount.id,
          },
          isLinkedSocAcc: data.isLinkedSocAcc,
        })
      );

      setIsGoogleLoading(false);
      navigate(
        !data.user.active_account || !data.user.accounts.length
          ? ROUTES.preference
          : ROUTES.home
      );
    } catch (err) {
      setIsGoogleLoading(false);
      console.log(err);
    }
  };

  return {
    isGoogleLoading,
    onGoogleButtonClickHandler,
  };
};
