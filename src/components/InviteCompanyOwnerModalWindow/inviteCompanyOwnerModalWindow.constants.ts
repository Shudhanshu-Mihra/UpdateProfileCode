import { USER_ROLES } from 'constants/strings';

export const InsertUserInputs = [
  {
    labelText: 'Full Name',
    inputName: 'fullName',
    inputType: 'input',
  },
  {
    labelText: 'Email',
    inputType: 'input',
    inputName: 'email',
  },
  {
    labelText: 'Company',
    inputName: 'company',
    inputType: 'select',
    isMulti: true,
  },
  {
    labelText: 'Role',
    inputName: 'Role',
    inputType: 'select',
    options: USER_ROLES,
  },
];
