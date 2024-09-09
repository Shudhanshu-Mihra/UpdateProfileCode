interface IuseTableMasterItemStateProps {
  onDeleteIconClickHandler: (itemId: string) => Promise<void>;
  onEditIconClickHandler: (itemId: string) => Promise<void>;
  categoryId: string;
  
}

export const useMasterItemState = (props: IuseTableMasterItemStateProps) => {
  const { categoryId, onDeleteIconClickHandler, onEditIconClickHandler } =
    props;

  const onEditIconHandler = () => onEditIconClickHandler(categoryId);

  const onDeleteIconHandler = () => onDeleteIconClickHandler(categoryId);

  return {
    onEditIconHandler,
    onDeleteIconHandler,
  };
};
