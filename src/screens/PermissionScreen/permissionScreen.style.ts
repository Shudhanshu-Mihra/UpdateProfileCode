// import { styled } from 'styles/theme';
import styled, { StyledComponent } from 'styled-components';

export const Section = styled.div`
    width: 100%;
    max-height: calc(100vh - 56px);
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    padding:15px 15px 60px 15px;
        overflow:auto;

  `;
export const TableWrapper = styled.div`
    width: 100%;
  `;
export const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  `;
// permission style components

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

export const TableBody = styled.tbody`
width:100%;
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
// export const SpacedTh = styled.th`
//     padding: 0 10px;
// `;
export const InsideSection1 = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:20px;
`;
export const InsideSection2 = styled.div`
height:calc(100%-20px);
overflow:auto;`;
export const Heading = styled.p`
color:#727B8E;
font-size:25px;`;
export const ButtonsBox = styled.div<{ isNoPadding?: boolean; buttonPosition?: string; isCancelButton?: boolean; }>`
display: flex;
    width: 100%;
    gap:20px;
    align-items:center;
    justify-content: ${({ buttonPosition }) =>
      buttonPosition ? buttonPosition : 'center'};
    padding: ${({ isNoPadding }) => (isNoPadding ? '0' : '0 30px 0 30px')};
`;
export const ButtonsWrapper = styled.div`
 display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ReUseActionButton = styled.button<{ disabled: boolean }>`
  background-color: ${props => (props.disabled ? '#ddd' : '#007bff')};
  color: ${props => (props.disabled ? '#888' : '#fff')};
  border: none;
  padding: 10px 20px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => (props.disabled ? '#ddd' : '#0056b3')};
  }
`;