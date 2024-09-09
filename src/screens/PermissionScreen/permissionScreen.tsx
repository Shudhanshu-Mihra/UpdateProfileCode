import React, { FC, useEffect, useState } from 'react';
import * as Styled from "./permissionScreen.style";
import { Icon } from "../../components/Icons/Icons";
import { PermissionsScreenState } from "./permissionScreen.state";
import { ReUseActionButton } from "../../ReUseComponents/reUseActionButton/ReUseActionButton";
import { FormButtonPanel } from 'components/FormButtonPanel';
import { permissionsData } from '../../components/Permission/permission.Const';
interface IsubPermissions {
};
export interface PermissionTableProps {
    newUserRole: string | null;
    PermissionsForAPIHandler: (selectedPermission: any[]) => void;
}
export const PermissionScreen: FC<IsubPermissions> = () => {
    // const permissions = permissionsData;
    const {
        permissions,
        toggleSubPermissions,
        radioPermissionHandler,
        sendCustomPermissionsData,
        setPermissions,
        resetPermissionsScreenHandaler,
    } = PermissionsScreenState();
    const applyHandler = () => {
        console.log(permissions);
        sendCustomPermissionsData(permissions);
    };


    const [isButtonActive, setIsButtonActive] = useState(true);
    const arraysEqual = (permissionsData: any[], permissions: any[]): boolean => {
      return JSON.stringify(permissionsData) === JSON.stringify(permissions);
    };
    useEffect(() => {
      // Check if arrays are equal and set the button state
      if (arraysEqual(permissionsData, permissions)) {
        setIsButtonActive(true);
       
      } else {
        setIsButtonActive(false);
        
      }
    }, [permissionsData, permissions]);
  
    console.log(permissions);

    
    return (
        <Styled.Section>

            <Styled.InsideSection2>

                <Styled.Table>
                    <thead>
                        <Styled.Tr>
                            <Styled.Th style={{ textAlign: 'left' }}></Styled.Th>
                            <Styled.Th colSpan={3}>Admin Access</Styled.Th>
                            <Styled.Th colSpan={3}>Accountant Access</Styled.Th>
                            <Styled.Th colSpan={3}>Ragular User Access</Styled.Th>
                        </Styled.Tr>
                        <Styled.Tr>
                            <Styled.Th>Permissions</Styled.Th>
                            <Styled.Th style={{ textAlign: "right" }}>Full</Styled.Th>
                            <Styled.Th>View</Styled.Th>
                            <Styled.Th style={{ textAlign: "left" }}>None</Styled.Th>
                            <Styled.Th style={{ textAlign: "right" }}>Full</Styled.Th>
                            <Styled.Th>View</Styled.Th>
                            <Styled.Th style={{ textAlign: "left" }}>None</Styled.Th>
                            <Styled.Th style={{ textAlign: "right" }}>Full</Styled.Th>
                            <Styled.Th>View</Styled.Th>
                            <Styled.Th style={{ textAlign: "left" }}>None</Styled.Th>
                        </Styled.Tr>
                    </thead>
                    <Styled.TableBody>
                        {/* {count} */}
                        {permissions.map(permission => (
                            <React.Fragment key={permission.id}>
                                <tr>
                                    {/* <Styled.Td>{permission.name}</Styled.Td> */}
                                    <Styled.PermissionCell onClick={permission.subPermissions ? () => toggleSubPermissions(permission.id) : undefined}>
                                        {permission.subPermissions && (
                                            <Styled.ToggleIcon expanded={permission.expandStatus ?? false}>
                                                <Icon type='arrowRight' fill="black" />
                                            </Styled.ToggleIcon>
                                        )}
                                        {permission.name}
                                    </Styled.PermissionCell>
                                    <Styled.Td style={{ textAlign: "right" }} ><Styled.RadioButton type="radio" name={`admin_${permission.id}`} value="Full" onChange={(e) => radioPermissionHandler(e, permission.id, 'Full', 'admin')} checked={permission.adminDefault === "Full"} /></Styled.Td>
                                    <Styled.Td><Styled.RadioButton type="radio" name={`admin_${permission.id}`} value="View" checked={permission.adminDefault === "View"} onChange={(e) => radioPermissionHandler(e, permission.id, 'View', 'admin')} /></Styled.Td>
                                    <Styled.Td style={{ textAlign: "left" }}><Styled.RadioButton type="radio" name={`admin_${permission.id}`} value="None" checked={permission.adminDefault === "None"} onChange={(e) => radioPermissionHandler(e, permission.id, 'None', 'admin')} /></Styled.Td>
                                    <Styled.Td style={{ textAlign: "right" }} ><Styled.RadioButton type="radio" name={`accountent_${permission.id}`} value="Full" checked={permission.accountantDefault === "Full"} onChange={(e) => radioPermissionHandler(e, permission.id, 'Full', 'accountant')} /></Styled.Td>
                                    <Styled.Td><Styled.RadioButton type="radio" name={`accountent_${permission.id}`} value="View" checked={permission.accountantDefault === "View"} onChange={(e) => radioPermissionHandler(e, permission.id, 'View', 'accountant')} /></Styled.Td>
                                    <Styled.Td style={{ textAlign: "left" }}><Styled.RadioButton type="radio" name={`accountent_${permission.id}`} value="None" checked={permission.accountantDefault === "None"} onChange={(e) => radioPermissionHandler(e, permission.id, 'None', 'accountant')} /></Styled.Td>
                                    <Styled.Td style={{ textAlign: "right" }} ><Styled.RadioButton type="radio" name={`user_${permission.id}`} value="Full" checked={permission.userDefault === "Full"} onChange={(e) => radioPermissionHandler(e, permission.id, 'Full', 'user')} /></Styled.Td>
                                    <Styled.Td><Styled.RadioButton type="radio" name={`user_${permission.id}`} value="View" checked={permission.userDefault === "View"} onChange={(e) => radioPermissionHandler(e, permission.id, 'View', 'user')} /></Styled.Td>
                                    <Styled.Td style={{ textAlign: "left" }}><Styled.RadioButton type="radio" name={`user_${permission.id}`} value="None" checked={permission.userDefault === "None"} onChange={(e) => radioPermissionHandler(e, permission.id, 'None', 'user')} /></Styled.Td>
                                </tr>
                                {permission.expandStatus && permission.subPermissions?.map((subPermission) => (
                                    <tr key={subPermission.id}>
                                        <Styled.Td style={{ paddingLeft: '20px', textAlign: "left" }}>{subPermission.name}</Styled.Td>
                                        <Styled.Td style={{ textAlign: "right" }}><Styled.RadioButton
                                            type="radio"
                                            name={`admin_${subPermission.id}`}
                                            value="Full"
                                            onChange={(e) => radioPermissionHandler(e, subPermission.id, 'Full', 'admin')}
                                            checked={subPermission.adminDefault === "Full"}
                                        /></Styled.Td>
                                        <Styled.Td><Styled.RadioButton
                                            type="radio"
                                            name={`admin_${subPermission.id}`}
                                            value="View"
                                            onChange={(e) => radioPermissionHandler(e, subPermission.id, 'View', 'admin')}
                                            checked={subPermission.adminDefault === "View"}
                                        /></Styled.Td>
                                        <Styled.Td style={{ textAlign: "left" }}><Styled.RadioButton type="radio" name={`admin_${subPermission.id}`} value="None" checked={subPermission.adminDefault === "None"} onChange={(e) => radioPermissionHandler(e, subPermission.id, 'None', 'admin')} /></Styled.Td>
                                        <Styled.Td style={{ textAlign: "right" }}><Styled.RadioButton type="radio" name={`manager_${subPermission.id}`} value="Full" checked={subPermission.accountantDefault === "Full"} onChange={(e) => radioPermissionHandler(e, subPermission.id, 'Full', 'accountant')} /></Styled.Td>
                                        <Styled.Td><Styled.RadioButton type="radio" name={`manager_${subPermission.id}`} value="View" checked={subPermission.accountantDefault === "View"} onChange={(e) => radioPermissionHandler(e, subPermission.id, 'View', 'accountant')} /></Styled.Td>
                                        <Styled.Td style={{ textAlign: "left" }}><Styled.RadioButton type="radio" name={`manager_${subPermission.id}`} value="None" checked={subPermission.accountantDefault === "None"} onChange={(e) => radioPermissionHandler(e, subPermission.id, 'None', 'accountant')} /></Styled.Td>
                                        <Styled.Td style={{ textAlign: "right" }}><Styled.RadioButton type="radio" name={`user_${subPermission.id}`} value="Full" checked={subPermission.userDefault === "Full"} onChange={(e) => radioPermissionHandler(e, subPermission.id, 'Full', 'user')} /></Styled.Td>
                                        <Styled.Td><Styled.RadioButton type="radio" name={`user_${subPermission.id}`} value="View" checked={subPermission.userDefault === "View"} onChange={(e) => radioPermissionHandler(e, subPermission.id, 'View', 'user')} /></Styled.Td>
                                        <Styled.Td style={{ textAlign: "left" }}><Styled.RadioButton type="radio" name={`user_${subPermission.id}`} value="None" checked={subPermission.userDefault === "None"} onChange={(e) => radioPermissionHandler(e, subPermission.id, 'None', 'user')} /></Styled.Td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </Styled.TableBody>

                </Styled.Table>
            </Styled.InsideSection2>
            <FormButtonPanel>
                <Styled.ButtonsWrapper>
                    <ReUseActionButton widthType='rounded' displayText="Reset Permissions" themedButton='roundedWhite' buttonType="actionButton"  onClick = { resetPermissionsScreenHandaler } />  {/**/}
                    <ReUseActionButton displayText="Apply" buttonType="actionButton" onClick={applyHandler}  widthType="primary"  isDisabled={isButtonActive}  themedButton='primary' displayIconType="tickIcon" />
                </Styled.ButtonsWrapper>
            </FormButtonPanel>

        </Styled.Section>


    );
};