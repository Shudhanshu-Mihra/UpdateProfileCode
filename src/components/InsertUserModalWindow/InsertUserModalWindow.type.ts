export interface PermissionProps {
  // code not use 
    onCheckedItemHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckedAllItemsHandler?: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;

    isPAllChecked: boolean;
    permissionState: any[];
    // setPermission?: () => void;
    setPAllChecked: () => void;
  // code not use 
// permission model start
// setIsSecondModalOpen: boolean;
// isSecondModalOpen:boolean;
// openSecondModal:() => void;
// permission model end
};