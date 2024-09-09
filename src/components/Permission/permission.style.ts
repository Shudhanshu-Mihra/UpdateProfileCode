import styled, { StyledComponent } from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border-bottom: 1px solid  #4f4f4f;
  padding: 8px;
`;

export const Td = styled.td`
  border-bottom: 1px solid #ddddd;
text-align:center;
  padding: 8px;
`;

export const Tr = styled.tr`
  // &:nth-child(even) {
    // background-color: #f2f2f2;
  border-bottom:1px solid #d1cece;

  // }
`;

export const SubPermissionRow = styled.tr`
  // background-color: #f9f9f9;
  border-bottom:1px solid #d1cece;
`;

export const PermissionCell = styled.td`
  cursor: pointer;
  display:flex;
  gap:10px;
  font-weight: bold;
  padding:8px;
`;
// RadioButton
export const RadioButton = styled.input.attrs({ type: 'radio' })`
             accent-color: red;
cursor:pointer;
`;
export const SubPermissionCell = styled.td`
text-align:left;
padding-left:30px;
  // padding:8px;

`;

export const ToggleIcon = styled.span<{ expanded: boolean }>`
 display: inline-block;
  margin-left: 8px;
  transform: ${({ expanded }) => (expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-in-out;
`;

export const resetPermission = styled.button`
display:flex;
align-items:center;
// background-color:#DF1C29;
color:black;
gap:7px;
border-radius:5px;
padding: 5px  15px`;

export const applyPermission = styled.button`
display:flex;
align-items:center;
background-color:#DF1C29;
color:white;
gap:7px;
border-radius:5px;
padding: 5px  15px;`
;
export const buttonWraper = styled.div`
// display: "flex", justifyContent: 'space-between', flexWrap: 'wrap' ,paddingTop:'20px'
display:flex;
justify-content:space-between;
flex-wrap:wrap;
padding:10px 0px 10px 0px;
`;
// export const tbody = styled.tbody`
// // height:80%;
// // overflow-y:scroll;
// `;
