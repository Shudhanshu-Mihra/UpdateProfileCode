import React from 'react';

import { TableSettingsStyles as Styled } from './TableSettings.style';
import { TableSettingsCompanyItem } from './TableSettingsItem/TableSettingsCompanyItem';
import { TableButton } from '../TableButton/TableButton';

export const TableSettingsCompany: React.FC<TableSettingsProps> = (props) => {
  const {
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    userRole,
    companies,
    searchedCompanies,
    searchValue,
  } = props;

  const isRegularUser = userRole?.role === 'user';
  const tableRowTheme = isRegularUser ? 'companyUser' : 'company';
  return (
    <>
      <Styled.Head rowStyle={tableRowTheme}>
        {isRegularUser ? null : <Styled.Actions>Actions</Styled.Actions>}
        <Styled.Column>
          <TableButton>Company</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created On</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created By</TableButton>
        </Styled.Column>
      </Styled.Head>

      {searchedCompanies?.length && searchValue ? (
        searchedCompanies?.map((company) => (
          <TableSettingsCompanyItem
            key={company.id}
            companyId={company.id}
            dateFormat={company.date_format}
            createdAt={company.created}
            createdBy={company?.members[0]?.name}
            creatorRole={company?.members[0]?.role}
            creatorId={company?.members[0]?.id}
            companyName={company.name}
            userRole={userRole}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            tableRowTheme={tableRowTheme}
          />
        ))
      ) : searchValue && !searchedCompanies?.length ? (
        <Styled.EmptyContentWrapper>
          No results found
        </Styled.EmptyContentWrapper>
      ) : (
        companies?.map((company) => (
          <TableSettingsCompanyItem
            key={company.id}
            dateFormat={company.date_format}
            createdAt={company.created}
            createdBy={company?.members[0]?.name}
            creatorRole={company?.members[0]?.role}
            creatorId={company?.members[0]?.id}
            companyId={company.id}
            companyName={company.name}
            userRole={userRole}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            tableRowTheme={tableRowTheme}
          />
        ))
      )}
    </>
  );
};
