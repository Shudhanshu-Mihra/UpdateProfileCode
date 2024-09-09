// Define the types for the field options
import { useState, useEffect } from 'react';
import { permissionsData ,permissionsResetData } from '../../components/Permission/permission.Const';
import {
  companyCustomPermissions
} from '../Settings/settings.api';
import {
  setCompany,
} from '../SignUp/reducer/signup.reducer';
import { useDispatch , useSelector } from 'react-redux';
import { IState } from 'services/redux/reducer';
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
export const PermissionsScreenState = () => {
  const [permissions, setPermissions] = useState<IPermissions[]>(permissionsData); // =============>>>>
const dispatch = useDispatch();
const {
  inbox: { totalCount, count, receipts, isCompanyChanged, isAllChecked },
  user: {
    user: { active_account, accounts },
    userInfo: { company },
    token,
  },
} = useSelector((state: IState) => state);
  
  const sendCustomPermissionsData = async (permissions: any[]) => {
    const payload = {
      company_id: company.id,
      company_name: company.name,
      company_default_permissions:permissions
    }
    const { data } = await companyCustomPermissions(payload);
    data.company && dispatch(setCompany(data.company));
    // console.log(data);
    // try {
    //     const response = await fetch('http://localhost:3000/test/permissions', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(permissions),
    //     });

    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     console.log('Permissions successfully posted:', data);
    //     return data;
    // } catch (error) {
    //     console.error('Error posting permissions:', error);
    //     throw error;
    // }
};
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
  const radioPermissionHandler = (
    event: React.ChangeEvent<HTMLInputElement>, 
    id: number, 
    type: 'Full' | 'View' | 'None', 
    role: 'admin' | 'accountant' | 'user'
  ) => {
    const updatedType = event.target.value as 'Full' | 'View' | 'None';
  
    setPermissions(prevItems =>
      prevItems.map(item => {
        // Check if the item is the main permission or contains the sub-permission to be updated
        if (item.id === id) {
          return { 
            ...item, 
            [`${role}Default`]: updatedType 
          };
        } else if (item.subPermissions) {
          const updatedSubPermissions = item.subPermissions.map(subItem =>
            subItem.id === id ? { ...subItem, [`${role}Default`]: updatedType } : subItem
          );
          return { ...item, subPermissions: updatedSubPermissions };
        }
        return item;
      })
    );
  };
  console.log(permissionsResetData);
  const resetPermissionsScreenHandaler = () => {
    console.log('reset run ');
    setPermissions([...permissionsResetData]);
    console.log(permissionsResetData);
  };
  // const resetPermision = () => {
  //   return setPermissions([...permissionsData]);
     
  // };

  // const radioPermissionHandler = (event: React.ChangeEvent<HTMLInputElement>, id: number, type: 'Full' | 'View' | 'None',role:'Admin'|'Accountant'|'User') => {
  //   const updatedType = event.target.value;
  
  //   setPermissions(prevItems =>
  //     prevItems.map(item => {
  //       // Update the main permission if its ID matches
  //       if (item.id === id) {
  //       // console.log("ID", item.id,"ADMIN",item.adminDefault ,"Accountent",item.accountantDefault ,"user", item.userDefault  );

  //         return { ...item, adminDefault: type ,userDefault:type,accountantDefault:type };
  //       } 
  //       // Update sub-permissions if they exist
  //       else if (item.subPermissions) {
  //         const updatedSubPermissions = item.subPermissions.map(subItem => 
  //           subItem.id === id ? { ...subItem, adminDefault: type ,userDefault:type,accountantDefault:type} : subItem
  //         );
  //         return { ...item, subPermissions: updatedSubPermissions };
  //       }
        
  //       return item;
  //     })
  //   );
  // };
  return {
    permissions,
    radioPermissionHandler,
    toggleSubPermissions,
    setPermissions,
    sendCustomPermissionsData,
    resetPermissionsScreenHandaler
    // permissionsResetData,
    // resetPermision
    // isButtonActive
  };
};
