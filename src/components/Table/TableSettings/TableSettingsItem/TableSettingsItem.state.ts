interface IuseTableSettingsItemStateProps {
  invitationId?: string;
  onResendInvitationHandler?: (token: string) => void;
  onDeleteIconClickHandler: (itemId: string) => void;
  onEditIconClickHandler: (itemId: string) => void;
  itemId: string;
}
export const useTableSettingsItemState = (
  props: IuseTableSettingsItemStateProps
) => {
  const {
    itemId,
    onDeleteIconClickHandler,
    onEditIconClickHandler,
    onResendInvitationHandler,
    invitationId,
  } = props;

  const onClickDeleteIconHandler = () => onDeleteIconClickHandler(itemId);
  const onClickEditIconHandler = () => onEditIconClickHandler(itemId);
  const onClickResendInviteHandler = () =>
    onResendInvitationHandler && onResendInvitationHandler(invitationId || '');

  return {
    onClickEditIconHandler,
    onClickDeleteIconHandler,
    onClickResendInviteHandler,
  };
};
