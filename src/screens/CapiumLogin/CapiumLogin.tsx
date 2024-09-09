import { FC } from 'react';

import { AuthImageSection } from 'components/AuthImageSection/AuthImageSection';
import { AuthTabs } from 'components/AuthTabs/AuthTabs';
import { CapiumAccountModalWindow } from 'components/CapiumAccountModalWindow';

import { CapiumLoginStyle as Styled } from './CapiumLogin.style';
import { CapiumLoginForm } from './CapiumLoginForm/CapiumLoginForm';
import { useCapiumLoginState } from './CapiumLogin.state';

import { CAPIUM_LOGIN_STRINGS } from './capiumLogin.contants';

export const CapiumLogin: FC = () => {
  const {
    isHoverInfo,
    isShowPassword,
    formik,
    isModalOpen,
    capiumAccounts,
    onChooseCapiumAccountHandler,
    onToggleModalWindowHandler,
    onTogglePasswordVisibility,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  } = useCapiumLoginState();

  return (
    <Styled.MainWrapper data-testid="capium-login-page">
      <CapiumAccountModalWindow
        isModalWindowOpen={isModalOpen}
        accounts={capiumAccounts}
        onCloseModalWindowHandler={onToggleModalWindowHandler}
        onChooseCapiumAccountHandler={onChooseCapiumAccountHandler}
      />
      <AuthImageSection />

      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <Styled.TabWrapper>
            <AuthTabs tabText={CAPIUM_LOGIN_STRINGS.continueCapium} />
          </Styled.TabWrapper>
          <CapiumLoginForm
            isHoverInfo={isHoverInfo}
            isShowPassword={isShowPassword}
            formikProps={formik.getFieldProps}
            formikMeta={formik.getFieldMeta}
            isValid={formik.isValid && formik.dirty}
            onTogglePasswordVisibility={onTogglePasswordVisibility}
            onSubmitFormHandler={formik.handleSubmit}
            onMouseEnterHandler={onMouseEnterHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
            isSubmiting={formik.isSubmitting}
          />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
