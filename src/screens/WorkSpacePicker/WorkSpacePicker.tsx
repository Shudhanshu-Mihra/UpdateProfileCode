import { useEffect } from 'react';

import { AuthImageSection } from 'components/AuthImageSection';
import { CompanySwitcherMenuItem } from 'components/CompanySwitcherMenu/CompanySwitcherMenuItem';
import { useWorkSpacePickerState } from './WorkSpacePicker.state';

import { WorkSpacePickerStyles as Styled } from './WorkSpacePicker.style';

export const WorkSpacePicker = () => {
  const { companies, getAllCompaniesHandler, onChooseCompanyClickHandler } =
    useWorkSpacePickerState();

  useEffect(() => {
    getAllCompaniesHandler();
  }, []);
  return (
    <Styled.MainWrapper>
      <AuthImageSection />

      <Styled.Section>
        <Styled.RightSideContentWrapper>
          <Styled.TitleWrapper>
            <Styled.Title>Choose your company</Styled.Title>
          </Styled.TitleWrapper>
          <Styled.SubTitle>
            All of these companies are listed under your email.
          </Styled.SubTitle>
          <Styled.CompaniesWrapper>
            {companies.map(({ company, id }) => (
              <CompanySwitcherMenuItem
                key={id}
                isActive={false}
                companyName={company.name}
                onClick={onChooseCompanyClickHandler}
                companyLogoSrc={company.logo}
                companyId={id}
                isCompanyPicker
              />
            ))}
          </Styled.CompaniesWrapper>
        </Styled.RightSideContentWrapper>
      </Styled.Section>
    </Styled.MainWrapper>
  );
};
