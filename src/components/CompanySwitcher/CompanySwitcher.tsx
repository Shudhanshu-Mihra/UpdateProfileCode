import { FC } from 'react';

import { CompanySwitcherStyles as Styled } from './CompanySwitcher.style';
import { CompanySwitcherMenu } from '../CompanySwitcherMenu';
import { CompanySwitcherLogo } from '../CompanySwitcherLogo';
import { Icon } from "components/Icons/Icons";


export interface ICompanySwitcher {
  isLoading?: boolean;
  activeCompany?: ICompaniesSwitcher;
  activeAccountId: string;
  isOpenSwitcher: boolean;
  onClickSwitcherHandler: () => void;
  onSwitchCompanyHandler: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  switcherRef: React.MutableRefObject<null>;
  companies: ICompaniesSwitcher[];
}

export const CompanySwitcher: FC<ICompanySwitcher> = (props) => {
  const {
    isOpenSwitcher,
    switcherRef,
    companies,
    activeCompany,
    activeAccountId,
    onSwitchCompanyHandler,
    onClickSwitcherHandler,
  } = props;

  return (
    <Styled.Wrapper
      data-testid="company-switcher"
      ref={switcherRef}
      onClick={onClickSwitcherHandler}
    >
      <CompanySwitcherLogo
        companyLogoSrc={activeCompany?.company.logo || ''}
        companyName={activeCompany?.company.name || ''}
      />
      <Styled.Content>{activeCompany?.company.name}</Styled.Content>
      <Styled.Arrow><Icon type="dropDownArrow" /></Styled.Arrow>
      {isOpenSwitcher && (
        <CompanySwitcherMenu
          onSwitchCompanyHandler={onSwitchCompanyHandler}
          companies={companies}
          activeAccountId={activeAccountId}
        />
      )}
    </Styled.Wrapper>
  );
};
