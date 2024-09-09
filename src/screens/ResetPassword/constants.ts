export const RESET_PASSWORD_STRINGS = {
  resetPassword: 'Reset password',
  buttonText: 'Save',
};

export const formikResetPasswordInitialValues = {
  newPassword: '',
  confirmPassword: '',
};

export const RESET_PASSWORD_INPUTS = [
  {
    inputType: 'password',
    labelText: 'New password',
    inputName: 'newPassword',
  },
  {
    inputType: 'password',
    labelText: 'Confirm new password',
    inputName: 'confirmPassword',
  },
];
