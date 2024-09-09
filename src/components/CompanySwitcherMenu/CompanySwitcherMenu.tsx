import { FC } from 'react';

import { CompanySwitcherMenuStyles as Styled } from './CompanySwitcherMenu.style';
import { CompanySwitcherMenuItem } from './CompanySwitcherMenuItem';

export interface ICompanySwitcherMenu {
  isLoading?: boolean;
  activeAccountId: string;
  companies: ICompaniesSwitcher[];
  onSwitchCompanyHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const CompanySwitcherMenu: FC<ICompanySwitcherMenu> = (props) => {
  const { companies, activeAccountId, onSwitchCompanyHandler } = props;

  return (
    <Styled.Wrapper data-testid="switcher-list">
      <Styled.Title>Company(s)</Styled.Title>
      <Styled.CompaniesWrapper isMargin={companies.length === 5}>
        {companies?.map((company) => (
          <CompanySwitcherMenuItem
            key={company.id}
            isActive={company.id === activeAccountId}
            companyId={company.id}
            companyName={company.company.name}
            onClick={onSwitchCompanyHandler}
            companyLogoSrc={company.company?.logo}
          />
        ))}
      </Styled.CompaniesWrapper>
    </Styled.Wrapper>
  );
};
