import { FC } from 'react';

import { AuthImageSection } from 'components/AuthImageSection/AuthImageSection';
import { CustomSelect } from 'components/CustomSelect';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input';
import { CheckboxItem } from 'components/Checkbox';

import { PreferenceStyles as Styled } from './Preference.style';
import { usePreferenceState } from './Preference.state';
import { STRINGS } from './constants';

import { DATE_FORMATS } from 'constants/strings';

export const Preference: FC = () => {
  const {
    onChangeCurrencyHandler,
    onChangeDateFormatHandler,
    onChangeIamAccountantHandler,
    isChecked,
    isLoading,
    isDisabledButton,
    formik,
    formatedCurrencies,
    selectedCurrencyValue,
    selectedFormatDate,
    ownerAccount,
  } = usePreferenceState();
  return (
    <Styled.MainWrapper>
      <AuthImageSection />

      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <Styled.TitleWrapper>
            <Styled.Title>{STRINGS.preferenceTitle}</Styled.Title>
          </Styled.TitleWrapper>
          <Styled.Form onSubmit={formik.handleSubmit}>
            <Input
              errorText={formik.errors.companyName}
              touched={formik.touched.companyName}
              value={formik.values.companyName}
              inputName="companyName"
              text="Company Name"
              onChangeValue={formik.handleChange}
              onBlur={formik.handleBlur}
              isDisabled={isChecked}
              isRemoveBorder
            />
            <Styled.SubTitle>{STRINGS.currency}</Styled.SubTitle>
            <CustomSelect
              isDisabled={isChecked}
              options={formatedCurrencies}
              onChangeValueHandler={onChangeCurrencyHandler}
              value={selectedCurrencyValue}
              isRemoveBorder
            />
            <Styled.SubTitle>{STRINGS.dateFormat}</Styled.SubTitle>
            <CustomSelect
              isDisabled={isChecked}
              options={DATE_FORMATS}
              onChangeValueHandler={onChangeDateFormatHandler}
              value={selectedFormatDate}
              isRemoveBorder
            />
            {!ownerAccount && (
              <Styled.CheckBoxWrapper>
                <CheckboxItem
                  isChecked={isChecked}
                  labelText="Skip onboarding"
                  onChange={onChangeIamAccountantHandler}
                />
              </Styled.CheckBoxWrapper>
            )}
            <Button
              themedButton="primary"
              width="auth"
              type="submit"
              isDisabled={isDisabledButton}
              isLoading={isLoading}
            >
              {isChecked ? STRINGS.buttonTextInbox : STRINGS.buttonText}
            </Button>
          </Styled.Form>
          <Styled.EmptyDiv />
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
