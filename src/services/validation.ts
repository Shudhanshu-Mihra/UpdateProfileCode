import * as Yup from 'yup';
import { RequiredStringSchema } from 'yup/lib/string';
import { AnyObject } from 'yup/lib/types';

import { REGEXPS } from 'constants/validation-regexp';

export const VALIDATION_TYPE = {
  password: 'password',
  email: 'email',
};
export const emailValidation = Yup.string()
  .required('Enter a valid email')
  .matches(REGEXPS.email, 'Email should be like example@email.com');

export const passwordValidation = Yup.string()
  .required('Enter password please')
  .min(8, 'Password must be at least 8 characters')
  .max(30, 'Password must be no more than 30 characters')
  .matches(REGEXPS.password, 'Password should be like "example123@@"');

export const currentPasswordValidation = Yup.string()
  .required('Enter a current password please')
  .min(8, 'Current password must be at least 8 characters')
  .max(30, 'Current password must be no more than 30 characters')
  .matches(REGEXPS.password, 'Password should be like "example123@@"');

export const resetCurrentPasswordValidation = Yup.string()
  .optional()
  .min(8, 'Current password must be at least 8 characters')
  .max(30, 'Current password must be no more than 30 characters')
  .matches(REGEXPS.password, 'Password should be like "example123@@"');

export const confirmPasswordValidation = Yup.string()
  .required('Please confirm your password')
  .min(8, 'Password must be at least 8 characters')
  .max(30, 'Password must be no more than 30 characters')
  .matches(REGEXPS.password, 'Password should be like "example123@@"')
  .oneOf([Yup.ref('newPassword')], 'Passwords do not match');

export const capiumPasswordValidation = Yup.string()
  .required('Enter password please')
  .min(8, 'Passwords must contain at least eight characters.')
  .max(30, 'Password must be no more than 30 characters');

export const countryValidation = Yup.string()
  .required('Enter a country please')
  .matches(
    /^[A-Za-z ]*$/,
    'Country must be at least 2 characters and contains only latin letters'
  )
  .min(2, 'Country must be at least 2 characters');

export const nameValidation = Yup.string()
  .trim()
  .matches(
    /^[A-Za-z ]*$/,
    'Name must be at least 3 characters and contains only latin letters'
  )
  .max(40)
  .min(3, 'Full name must be at least 3 characters')
  .required('Full name is a required field');

export const companyNameValidation = Yup.string()
  .trim()
  .matches(
    /^[A-Za-z ]*$/,
    'Company Name must be at least 3 characters and contains only latin letters'
  )
  .max(30)
  .min(3, 'Company Name must be at least 3 characters')
  .required('Company Name is a required field');

export const subjectValidation = Yup.string()
  .trim()
  .matches(
    /[a-z0-9.,_-\s]*$/,
    'Subject must contains at least 3 characters, begins with capital character'
  )
  .max(40)
  .min(3, 'subject must be at least 3 characters')
  .required('Subject is a required field');

export const bindSocialAccdValidationSchema = Yup.object().shape({
  email: emailValidation,
  newPassword: passwordValidation,
  confirmPassword: confirmPasswordValidation,
});

export const companyNameValidationScheme = Yup.object().shape({
  companyName: companyNameValidation,
});

export const myAccountValidationScheme = Yup.object().shape({
  fullName: nameValidation,
  email: emailValidation,
});

export const createCompanyInvitationScheme = Yup.object().shape({
  email: emailValidation,
});

export const resetPasswordValidationScheme = Yup.object().shape({
  currentPassword: resetCurrentPasswordValidation,
  newPassword: passwordValidation,
  confirmPassword: confirmPasswordValidation,
});

export const signUpValidationSchema = Yup.object().shape({
  email: emailValidation,
  fullName: nameValidation,
  password: passwordValidation,
});

export const emailSendValidationSchema = Yup.object().shape({
  to: emailValidation,
  subject: subjectValidation,
});

export const capiumValidationSchema = Yup.object().shape({
  email: emailValidation,
  password: capiumPasswordValidation,
});

export const resetPasswordValidationSchema = Yup.object().shape({
  newPassword: passwordValidation,
  confirmPassword: confirmPasswordValidation,
});

export const validationHashMapping: {
  [x: string]: RequiredStringSchema<string | undefined, AnyObject>;
} = {
  [VALIDATION_TYPE.email]: emailValidation,
  [VALIDATION_TYPE.password]: passwordValidation,
};
