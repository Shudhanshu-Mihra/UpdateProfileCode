// Define the types for the field options
import { useState, useEffect } from 'react';
import { permissionsData } from './permission.Const';

export interface Option {
  label: string;
  value: string;
}
// Define the types for the fields in the form
// Define the types for the component props

export interface IPermissions {
  id: number;
  name: string;
  value: string;
  userDefault: string;
  adminDefault: string;
  accountantDefault: string;
  expandStatus?: boolean;
  subPermissions?: IsubPermissions[];
}
export interface IsubPermissions {
  id: number;
  name: string;
  value: string;
  userDefault: string;
  adminDefault: string;
  accountantDefault: string;
}
export type RadioButtonValues = {
  // name:string;
  [permissionName: string]: 'Full' | 'View' | 'None'; // You can use string literals for specific values
};

// ===================================================================================>>>>
export const PermissionsState = () => {
  const [permissions, setPermissions] = useState<IPermissions[]>(permissionsData); // =============>>>>
  // const [isSubExpand, setSubExpand] = useState(true);

  // set default logic


  const toggleSubPermissions = (id: number) => {
    // console.log(id);
    setPermissions(prevItems =>
      prevItems.map(item => {
        // console.log(item);
        return item.id === id ? ({ ...item, expandStatus: !item.expandStatus }) : item;
      }
    ));
    // setSubExpand(!isSubExpand);
  };
  
  const radioPermissionHandler = (event: React.ChangeEvent<HTMLInputElement>, id: number, type: 'Full' | 'View' | 'None') => {
    // const updatedType = event.target.value;
  
    setPermissions(prevItems =>
      prevItems.map(item => {
        // Update the main permission if its ID matches
        if (item.id === id) {
          return { ...item, value: type };
        } 
        // Update sub-permissions if they exist
        else if (item.subPermissions) {
          const updatedSubPermissions = item.subPermissions.map(subItem => 
            subItem.id === id ? { ...subItem, value: type } : subItem
          );
          return { ...item, subPermissions: updatedSubPermissions };
        }
        return item;
      })
    );
  };
  return {
    permissions,
    radioPermissionHandler,
    toggleSubPermissions,
    setPermissions,
  };
};
