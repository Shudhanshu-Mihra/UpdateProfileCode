export const formikInitialValues = {
  email: '',
  fullName: '',
  password: '',
};

export const inputs = [
  {
    inputType: 'email',
    labelText: 'Email',
    inputName: 'email',
  },
  {
    inputType: 'text',
    labelText: 'Full Name',
    inputName: 'fullName',
  },
  {
    inputType: 'select',
    labelText: 'Country',
    inputName: 'country',
  },
  {
    inputType: 'password',
    labelText: 'Password',
    inputName: 'password',
  },
];

export const mockedState = {
  user: {
    email: 'test@gmail.com',
    password: '123456789',
    fullName: 'User',
    country: 'Ukraine',
    id: 'asdv12',
    accounts: null,
    active_account: null,
    socialAuth: null,
    profile_image: '',
  },
  token: 'tjgidojandie',
  refreshToken: 'tgted4gg',
  socialAccount: {
    capium: {
      capiumEmail: '',
      capiumId: '',
      id: '',
    },
    google: {
      googleEmail: '',
      googleId: '',
      id: '',
    },
    isLinkedSocAcc: false,
  },
  userInfo: {
    company: {
      currency: {
        country: '',
        description: '',
        id: '',
        value: '',
      },
      created: '',
      date_format: '',
      id: '',
      name: '',
      logo: '',
    },
  },
  currencies: [
    {
      country: '',
      description: '',
      id: '',
      value: '',
    },
  ],
  isSkipOnboarding: false,
};

export const currencies = [
  {
    country: 'Ukraine',
    description: 'grivna',
    id: 'avc2',
    value: 'UKR',
  },
  {
    country: 'United Kingdom',
    description: 'pound',
    id: 'agr1',
    value: 'GBP',
  },
];

export const mockedCompany = {
  currency: currencies[0],
  created: '11.12.22',
  date_format: 'dd-MM-yy',
  id: 'asdc2',
  name: 'Company',
  logo: 'logo.png',
};
