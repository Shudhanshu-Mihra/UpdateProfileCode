import React, { useState, useEffect, FC } from 'react';
import * as Styled from './permission.style';
import { Icon } from '../Icons/Icons';
import { PermissionsState } from './permission.state';


export interface PermissionTableProps {
  newUserRole: string | null;
  PermissionsForAPIHandler: (selectedPermission: any[]) => void;
  closeSecondModal: () => void;
}
export const PermissionModule: FC<PermissionTableProps> = (props) => {
  const {
    permissions,
    radioPermissionHandler,
    setPermissions,
    toggleSubPermissions,
  } = PermissionsState();

  const {PermissionsForAPIHandler, newUserRole, closeSecondModal} = props;

  const applyHandler = () => {
    console.log(permissions);
    PermissionsForAPIHandler(permissions);
    closeSecondModal();
  };

  const defaultRoleKey = newUserRole ? (newUserRole == "admin" ? "adminDefault" : newUserRole == "user" ? "userDefault" : newUserRole == "accountant" ? "accountantDefault" : "adminDefault") : "adminDefault";

  const resetPermissionsHandler = () => {
    setPermissions(prevItems =>
      prevItems.map(item => {
        // console.log(item);
        if(!item.subPermissions) {
        return { ...item, value: item[defaultRoleKey]}
        }
        return { ...item, value: item[defaultRoleKey], subPermissions: item.subPermissions.map(subItem => ({ ...subItem, value: subItem[defaultRoleKey]}) )}
      }
    ));
 }

  useEffect(() => {
    resetPermissionsHandler();
  }, []);


  return (
    <>

      <Styled.buttonWraper>

        <Styled.resetPermission onClick={() => resetPermissionsHandler()}>Reset</Styled.resetPermission>
        <Styled.applyPermission onClick={() => applyHandler()}>Apply</Styled.applyPermission>
        {/* <button onClick={handleSubmit}>Admin Default Permission</button>
<button onClick={handleSubmit}>User Default Permission</button>
<button onClick={handleSubmit}>Accountent Default Permission</button> */}
      </Styled.buttonWraper>


      <Styled.Table>
  <thead>
    <Styled.Tr>
      <Styled.Th style={{textAlign:'left'}}>Permission</Styled.Th>
      <Styled.Th>Full</Styled.Th>
      <Styled.Th>View</Styled.Th>
      <Styled.Th>None</Styled.Th>
    </Styled.Tr>
  </thead>
  <tbody>
  {/* <Styled.tbody> */}
    {permissions.map((permission) => (
      <React.Fragment key={permission.id}>
        <Styled.Tr>
          <Styled.PermissionCell onClick={permission.subPermissions ? () => toggleSubPermissions(permission.id) : undefined}>
            {permission.subPermissions && (
              <Styled.ToggleIcon expanded={permission.expandStatus ?? false}>
                <Icon type='arrowRight' fill="black" />
              </Styled.ToggleIcon>
            )}
            {permission.name}
          </Styled.PermissionCell>
          <Styled.Td>
            <Styled.RadioButton
              id={`full-${permission.id}`}
              name={`permission-${permission.id}`}
              value="Full"
              checked={permission.value === 'Full'}
              onChange={(e) => radioPermissionHandler(e, permission.id, 'Full')}
            />
          </Styled.Td>
          <Styled.Td>
            <Styled.RadioButton
              type="radio"
              name={`permission-${permission.id}`}
              value="View"
              checked={permission.value === 'View'}
              onChange={(e) => radioPermissionHandler(e, permission.id, 'View')}
            />
          </Styled.Td>
          <Styled.Td>
            <Styled.RadioButton
              type="radio"
              name={`permission-${permission.id}`}
              value="None"
              checked={permission.value === 'None'}
              onChange={(e) => radioPermissionHandler(e, permission.id, 'None')}
            />
          </Styled.Td>
        </Styled.Tr>
        {permission.expandStatus && permission.subPermissions?.map((subPermission) => (
          <Styled.SubPermissionRow key={subPermission.id}>
            <Styled.SubPermissionCell>{subPermission.name}</Styled.SubPermissionCell>
            <Styled.Td>
              <Styled.RadioButton
                type="radio"
                name={`sub-${subPermission.id}`}
                value="Full"
                checked={subPermission.value === 'Full'}
                onChange={(e) => radioPermissionHandler(e, subPermission.id, 'Full')}
              />
            </Styled.Td>
            <Styled.Td>
              <Styled.RadioButton
                type="radio"
                name={`sub-${subPermission.id}`}
                value="View"
                checked={subPermission.value === 'View'}
                onChange={(e) => radioPermissionHandler(e, subPermission.id, 'View')}
              />
            </Styled.Td>
            <Styled.Td>
              <Styled.RadioButton
                type="radio"
                name={`sub-${subPermission.id}`}
                value="None"
                checked={subPermission.value === 'None'}
                onChange={(e) => radioPermissionHandler(e, subPermission.id, 'None')}
              />
            </Styled.Td>
          </Styled.SubPermissionRow>
        ))}
      </React.Fragment>
    ))}
  {/* </Styled.tbody> */}
  </tbody>
</Styled.Table>


    </>
  );
};
