import { SingleValue } from 'react-select';

import { getInputFields } from '../MyAccount.constants';

export interface IGetInputFieldsProps {
  isDisabledCountry?: boolean;
  isDisabledSelect?: boolean;
  funcArray: any[];
  state: {
    currency: SingleValue<IOption> | any;
    dateFormat: SingleValue<IOption> | any;
    country: SingleValue<IOption> | any;
  };
  formatedCurrencies: { label: string; value: string; id: string }[];
  countries: IOption[];
  dateFormats: IOption[];
}

export interface IGetResetPasswordFields {
  isShowPassword: {
    isShowCurrentPassword: boolean;
    isShowNewPassword: boolean;
    isShowConfirmPassword: boolean;
  };
  funcsArray: (() => void)[];
}

export type TInputFields = ReturnType<typeof getInputFields>;

export interface IResetPasswordFields {
  ShowPasswordHandler: () => void;
  onInputChange: (optionName: "currency" | "newPassword" | "confirmPassword" | "currentPassword" | "country" | "dateFormat", value: string) => void;
  onToggleVisibility: () => void;
  isShowPassword: boolean;
  label: string;
  name: string;
  type: string;
  value: string;
  // handleSubmit?: () => void;
}
