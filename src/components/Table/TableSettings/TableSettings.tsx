import React from 'react';

import { getFilteredMembers } from 'services/utils';

import { TableSettingsStyles as Styled } from './TableSettings.style';
import { TableSettingsItem } from './TableSettingsItem/TableSettingsItem';
import { TableButton } from '../TableButton/TableButton';

export const TableSettingsMember: React.FC<IMemberTableProps> = (props) => {
  const {
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onResendInvitationHandler,
    userRole,
    members,
    searchedUsers,
    searchValue,
  } = props;

  const isRegularUser = userRole?.role === 'user';

  const filteredSearchedUsers = isRegularUser
    ? getFilteredMembers(searchedUsers || [])
    : searchedUsers;

  const filteredMembersUsers = isRegularUser
    ? getFilteredMembers(members || [])
    : members;

  const tableRowTheme = isRegularUser ? 'user' : 'member';
  return (
    <>
      <Styled.Head rowStyle={tableRowTheme}>
        {userRole?.role === 'user' ? null : (
          <Styled.Actions>Actions</Styled.Actions>
        )}
        <Styled.Column>
          <TableButton>Name</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Email</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Role</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Company</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Status</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created On</TableButton>
        </Styled.Column>
        <Styled.Column>
          <TableButton>Created By</TableButton>
        </Styled.Column>
      </Styled.Head>
      {filteredSearchedUsers?.length && searchValue ? (
        filteredSearchedUsers?.map((member) => (
          <TableSettingsItem
            key={member.id}
            memberId={member.id}
            memberEmail={member?.user?.email}
            dateFormat={member.company.date_format}
            createdAt={member.created}
            createdBy={member?.userInvitorName}
            memberName={member.name}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            memberRole={member.role}
            companyName={member.company?.name}
            memberInvitation={member?.memberInvite}
            onResendInvitationHandler={onResendInvitationHandler}
            userRole={userRole}
            tableRowTheme={tableRowTheme}
          />
        ))
      ) : searchValue && !filteredSearchedUsers?.length ? (
        <Styled.EmptyContentWrapper>
          No results found
        </Styled.EmptyContentWrapper>
      ) : (
        filteredMembersUsers?.map((member) => (
          <TableSettingsItem
            key={member.id}
            memberId={member.id}
            dateFormat={member.company.date_format}
            createdAt={member.created}
            createdBy={member?.userInvitorName}
            memberEmail={member?.user?.email}
            memberName={member.name}
            onDeleteIconClickHandler={onDeleteIconClickHandler}
            onEditIconClickHandler={onEditIconClickHandler}
            onResendInvitationHandler={onResendInvitationHandler}
            memberRole={member.role}
            companyName={member.company?.name}
            memberInvitation={member?.memberInvite}
            userRole={userRole}
            tableRowTheme={tableRowTheme}
          />
        ))
      )}
    </>
  );
};
