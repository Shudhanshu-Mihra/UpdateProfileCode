import { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { setInterseptors } from 'services/api-service';

import { Layout } from 'components/Layout/Layout';
import { RedirectOAuthPage } from 'components/RedirectOAuthPage';

import { PrivacyPolicy } from 'components/PrivacyPolicy';
import { TermsOfService } from 'components/TermsOfService';
import { BindSocialAccount } from 'screens/BindSocialAccount';
import { CapiumLogin } from 'screens/CapiumLogin/CapiumLogin';
import { Dashboard } from 'screens/Dashboard';
import { FilesUploadPreview } from 'screens/FilesUploadPreview';
import { FilesUpload } from 'screens/FilesUpload';
import { ForgotPassword } from 'screens/ForgotPassword';
import { Inbox } from 'screens/Inbox';
import { Invites } from 'screens/Invites';
import { Login } from 'screens/Login/Login';
import { Master } from 'screens/Master';
import { NotFound } from 'screens/NotFound';
import { Preference } from 'screens/Preference';
import { ReceiptDetails } from 'screens/ReceiptDetails';
import { ResetPassword } from 'screens/ResetPassword';
import { SalesInvoices } from 'screens/SalesInvoices';
import { SalesInvoicesDetails } from 'screens/SalesInvoicesDetails';
import { Settings } from 'screens/Settings';
import { CompanyList } from 'screens/Settings/CompanyList';
import { MyAccount } from 'screens/Settings/MyAccount';
import { UsersList } from 'screens/Settings/UsersList';
import { SignUp } from 'screens/SignUp/SignUp';
import { SignUpNewMember } from 'screens/SignUpNewMember';
import { Support } from 'screens/Support';
import { WorkSpacePicker } from 'screens/WorkSpacePicker';
import { PermissionScreen } from 'screens/PermissionScreen/permissionScreen';
import { PrivateRouter } from './privateRouter';

import { ROUTES } from 'constants/routes';
import { useSelector } from 'react-redux';
import { getUserExist } from '../screens/Dashboard/dashboard.api';
import { IState } from '../services/redux/reducer';
import { ExpenseReport } from 'screens/ExpenseReport';
import { ExpenseDetails } from 'screens/ExpenseDetails';

export const AppRouter: FC = () => {
  setInterseptors();
  const {
    user: {
      user,
    },

  } = useSelector((state: IState) => state);
  const payload = {
    date_start: '',
    date_end: '',
    active_account: user?.id || '',
  };

  const testUSer = async () => {
    try {
      const { data } = await getUserExist(payload);


      if (data === "USER DELETED") {
        localStorage.clear();
        window.location.reload()
      }

    } catch (e) {
    }
  }
  useEffect(() => {
    testUSer()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Layout />}>
          <Route element={<PrivateRouter />}>
            <Route index element={<Dashboard />} />
            <Route path={ROUTES.invites} element={<Invites />} />
            <Route path={ROUTES.purchaseInvoices} element={<Inbox />}>
              <Route
                path={ROUTES.receiptDetails}
                element={<ReceiptDetails />}
              />
            </Route>
            <Route
              path={ROUTES.salesInvoices}
              element={<SalesInvoices />}
            ></Route>
            <Route
              path={ROUTES.invoiceDetails}
              element={<SalesInvoicesDetails />}
            />
            <Route
              path={ROUTES.expenseReport}
              element={<ExpenseReport />}
            />
            <Route
              path={ROUTES.expenseDetails}
              element={<ExpenseDetails />}
            />
            <Route
              path={ROUTES.receiptUploadFile}
              element={<FilesUpload />}
            />
            <Route
              path={ROUTES.invoiceUploadFile}
              element={<FilesUpload />}
            />
            <Route
              path={ROUTES.filesUploadPreview}
              element={<FilesUploadPreview />}
            />
            <Route
              path={ROUTES.filesUploadPreviewsales}
              element={<FilesUploadPreview />}
            />
            <Route path={ROUTES.settings} element={<Settings />}>
              <Route index element={<MyAccount />} />
              <Route path={ROUTES.usersList} element={<UsersList />} />
              <Route path={ROUTES.permission} element={<PermissionScreen/>} />
              <Route path={ROUTES.companiesList} element={<CompanyList />} />
              <Route
                path={ROUTES.termsOfService}
                element={<TermsOfService />}
              />
              <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
              {/* <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} /> */}
            </Route>
            <Route path={ROUTES.support} element={<Support />} />
            <Route path={ROUTES.notFound} element={<NotFound />} />
            <Route path={ROUTES.manage} element={<Master />} />
          </Route>
        </Route>
        <Route path={ROUTES.callback} element={<RedirectOAuthPage />} />
        <Route path={ROUTES.preference} element={<Preference />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.sign_up} element={<SignUp />} />
        <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
        <Route path={ROUTES.resetPassword} element={<ResetPassword />} />
        <Route path={ROUTES.capiumLogin} element={<CapiumLogin />} />
        <Route path={ROUTES.signUpNewMember} element={<SignUpNewMember />} />
        <Route path={ROUTES.chooseCompany} element={<WorkSpacePicker />} />
        <Route
          path={ROUTES.bindSocialAccount}
          element={<BindSocialAccount />}
        />
      </Routes>
    </BrowserRouter>
  );
};
