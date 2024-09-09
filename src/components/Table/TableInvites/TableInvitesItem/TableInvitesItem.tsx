import { FC } from 'react';

import { getFirstLetterUppercase, getFormattedDate } from 'services/utils';

import { Icon } from '../../../Icons';

import { TableInvitesItemStyles as Styled } from './TableInvitesItem.style';
import { DATE_FORMATS } from 'constants/strings';
import { useTableInvitesItemState } from './useTableInvitesItem.state';

interface ITableInviteItem {
  createdAt: string;
  createdBy: string;
  inviteId: string;
  creatorRole: string;
  inviteEmail: string;
  isActive: boolean;
  onDeleteIconClickHandler: (inviteId: string) => void;
  onEditIconClickHandler: (inviteId: string) => void;
  onResendInvitationHandler: (inviteId: string) => void;
}
export const TableInvitesItem: FC<ITableInviteItem> = (props) => {
  const {
    isActive,
    createdAt,
    createdBy,
    onResendInvitationHandler,
    creatorRole,
    inviteId,
    inviteEmail,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
  } = props;

  const {
    onClickDeleteIconHandler,
    onClickEditIconHandler,
    onClickResendInviteHandler,
  } = useTableInvitesItemState({
    inviteId,
    onDeleteIconClickHandler,
    onResendInvitationHandler,
    onEditIconClickHandler,
  });

  const userRole = creatorRole === 'user' ? 'regular user' : creatorRole;
  return (
    <Styled.Item>
      <Styled.Action>
        <Styled.ActionButton
          isDisabled={isActive}
          onClick={onClickEditIconHandler}
        >
          <Icon type="edit" />
        </Styled.ActionButton>
        <Styled.ActionButton
          isDisabled={isActive}
          onClick={onClickDeleteIconHandler}
        >
          <Icon type="remove" />
        </Styled.ActionButton>
      </Styled.Action>
      <Styled.Column>
        <Styled.ValueWrapper>{inviteEmail}</Styled.ValueWrapper>
      </Styled.Column>
      <Styled.Column>{getFirstLetterUppercase(userRole || '')}</Styled.Column>
      <Styled.Column>
        {isActive ? (
          <Styled.TextWrapper>Active</Styled.TextWrapper>
        ) : (
          <Styled.TextWrapper
            isExpired={!isActive}
            onClick={onClickResendInviteHandler}
          >
            Resend invitation
          </Styled.TextWrapper>
        )}
      </Styled.Column>
      <Styled.Column>
        {getFormattedDate(createdAt, DATE_FORMATS[0].value)}
      </Styled.Column>
      <Styled.Column>{createdBy}</Styled.Column>
    </Styled.Item>
  );
};
