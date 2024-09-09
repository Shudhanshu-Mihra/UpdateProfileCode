import { FC } from 'react';

import { getCompanyInitials } from 'services/utils';

import { CompanySwitcherLogoStyles as Styled } from './CompanySwitcherLogo.style';

interface ICompanySwitcherLogoProps {
  companyLogoSrc?: string | null;
  isBigLogo?: boolean;
  companyName: string;
}

export const CompanySwitcherLogo: FC<ICompanySwitcherLogoProps> = (props) => {
  const { companyLogoSrc, companyName, isBigLogo } = props;
  const companyInitials = getCompanyInitials(companyName);

  return !!companyLogoSrc ? (
    <Styled.LogoImage
      src={companyLogoSrc}
      alt={companyName}
      isBigLogo={isBigLogo}
    />
  ) : (
    <Styled.Wrapper isBigLogo={isBigLogo}>
      <Styled.Text>{companyInitials}</Styled.Text>
    </Styled.Wrapper>
  );
};
