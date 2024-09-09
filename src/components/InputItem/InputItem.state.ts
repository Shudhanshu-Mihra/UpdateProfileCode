import { useState } from 'react';

interface IuseInputItemState {
  isShowPassword: boolean;
}

export const useInputItemState = () => {
  
  const initialState = {
    isShowPassword: false,
  };

  const [state, setState] = useState<IuseInputItemState>(initialState);

  const onTogglePasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: !prevState.isShowPassword,
    }));
  };

  return {
    ...state,
    onTogglePasswordVisibility,
  };
};
