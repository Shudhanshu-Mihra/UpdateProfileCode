import { ROUTES } from 'constants/routes';
// export const getSettingsLinks = (logout: () => void) => [
export const getSettingsLinks = (onDeleteModalWindowToggle: () => void) => [
  { title: 'My Account', route: ROUTES.settings , icon :"accountIcon" },
  { title: 'Companies', route: ROUTES.companiesList , icon:"locationIcon"   },
  { title: 'Users', route: ROUTES.usersList ,icon :"sideBarUSer"  },
  { title: 'Permissions', route: ROUTES.permission, icon:"permissionIcon"},
  { title: 'Terms of Service', route: ROUTES.termsOfService , icon :"termAndService" },
  { title: 'Privacy Policy', route: ROUTES.privacyPolicy, icon:"privecy"  },
  { title: 'Delete Account', route: ROUTES.settings  , onClick: onDeleteModalWindowToggle , icon:"deleteAccount"},
];

