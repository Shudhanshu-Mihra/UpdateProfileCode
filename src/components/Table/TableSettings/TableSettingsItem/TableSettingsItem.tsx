import { FC } from 'react';

import { getFirstLetterUppercase, getFormattedDate } from 'services/utils';

import { Icon } from 'components/Icons/Icons';

import { TableSettingsItemStyles as Styled } from './TableSettingsItem.style';
import { useTableSettingsItemState } from './TableSettingsItem.state';

interface ITableSettingsItemProps extends TableSettingsItemProps {
  onResendInvitationHandler?: (token: string) => void;
  memberEmail?: string;
  companyName?: string;
  memberInvitation: IMemberInvite | null;
  createdBy?: string;
  memberId: string;
  memberName: string;
  memberRole: TRoles;
  createdAt: string;
  dateFormat: string;
  tableRowTheme: 'user' | 'member';
}
export const TableSettingsItem: FC<ITableSettingsItemProps> = (props) => {
  const {
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onResendInvitationHandler,
    createdAt,
    createdBy,
    userRole,
    memberEmail,
    memberRole,
    memberId,
    memberName,
    dateFormat,
    companyName,
    memberInvitation,
    tableRowTheme,
  } = props;

  const {
    onClickDeleteIconHandler,
    onClickEditIconHandler,
    onClickResendInviteHandler,
  } = useTableSettingsItemState({
    itemId: memberId,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onResendInvitationHandler,
    invitationId: memberInvitation?.id,
  });

  const isHideEditButton =
    memberRole === 'owner' ? true : userRole?.role !== 'owner' && false;
  const isHideDeleteButton =
    memberRole === 'owner' ||
    (memberRole === userRole?.role && userRole.id === memberId);

  const invitationStatus =
    !memberInvitation || memberInvitation?.isCompanyInvite
      ? 'Active'
      : 'Resend invitation';
  const email =
    memberInvitation?.isCompanyInvite || !memberInvitation
      ? memberEmail
      : memberInvitation?.email;

  return (
    <Styled.Item rowStyle={tableRowTheme}>
      {userRole?.role === 'user' ? null : (
        <Styled.Action>
          <Styled.ActionButton
            isDisabled={isHideEditButton}
            onClick={onClickEditIconHandler}
          >
            <Icon type="edit" />
          </Styled.ActionButton>
          <Styled.ActionButton
            isDisabled={isHideDeleteButton}
            onClick={onClickDeleteIconHandler}
          >
            <Icon type="remove" />
          </Styled.ActionButton>
        </Styled.Action>
      )}
      <Styled.Column>
        <Styled.TextWrapper>{memberName}</Styled.TextWrapper>
      </Styled.Column>
      <Styled.Column>
        <Styled.TextWrapper>{email}</Styled.TextWrapper>
      </Styled.Column>
      <Styled.Column>{getFirstLetterUppercase(memberRole)}</Styled.Column>
      <Styled.Column>
        <Styled.TextWrapper>{companyName}</Styled.TextWrapper>
      </Styled.Column>
      <Styled.Column>
        {invitationStatus === 'Resend invitation' ? (
          <Styled.TextWrapper
            isExpired={true}
            onClick={onClickResendInviteHandler}
          >
            Resend invitation
          </Styled.TextWrapper>
        ) : (
          <Styled.TextWrapper>{invitationStatus}</Styled.TextWrapper>
        )}
      </Styled.Column>
      <Styled.Column>{getFormattedDate(createdAt, dateFormat)}</Styled.Column>
      <Styled.Column>
        <Styled.TextWrapper>{createdBy}</Styled.TextWrapper>
      </Styled.Column>
    </Styled.Item>
  );
};
