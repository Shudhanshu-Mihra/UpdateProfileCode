interface IuseTableInvitesItemStateProps {
  inviteId: string;
  onDeleteIconClickHandler: (itemId: string) => void;
  onEditIconClickHandler: (itemId: string) => void;
  onResendInvitationHandler: (inviteId: string) => void;
}
export const useTableInvitesItemState = (
  props: IuseTableInvitesItemStateProps
) => {
  const {
    inviteId,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onResendInvitationHandler,
  } = props;

  const onClickDeleteIconHandler = () => onDeleteIconClickHandler(inviteId);
  const onClickEditIconHandler = () => onEditIconClickHandler(inviteId);
  const onClickResendInviteHandler = () => onResendInvitationHandler(inviteId);

  return {
    onClickEditIconHandler,
    onClickDeleteIconHandler,
    onClickResendInviteHandler,
  };
};
