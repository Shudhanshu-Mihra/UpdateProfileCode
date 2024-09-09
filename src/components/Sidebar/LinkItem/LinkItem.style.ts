import { Link, PathMatch } from 'react-router-dom';
import { styled } from 'styles/theme';

export const LinkItemStyles = {
  Link : styled(Link)<{
    active?: PathMatch<string> | null | string;
    is_last?: string;
    is_disabled?: string;
  }>`
    width: 100%;
    height: 100%;
    max-height: 40px;
    min-height: 30px;
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.size.default};
    font-weight: ${(props) => {
      if (Array.isArray(props.children) && props.children.includes("Delete Account")) {
            return props.theme.fontWeight.normal;
          }
  return props.active ? props.theme.fontWeight.semiBold : props.theme.fontWeight.normal;
}};

        color: ${(props) => {
          if (Array.isArray(props.children) && props.children.includes("Delete Account")) {
            return props.theme.colors.lightBlack;
          }
  return props.active ? props.theme.colors.darkRed : props.theme.colors.lightBlack;
}};

    padding-left: 50px;
    margin: 0;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background: ${(props) => props.theme.colors.pink};
      color: ${(props) => props.theme.colors.lightBlack};
     border-radius:15px ;
    }
    pointer-events: ${({ is_disabled }) => is_disabled && 'none'};
    color: ${({ is_disabled, theme }) => is_disabled && theme.colors.gray};
   `,
  IconsDesign: styled.div<{ active?: PathMatch<string> | null | string;   iconType?: string}>`
 
   margin-right: 10px;
       & svg {
        
               stroke: none;
        fill: ${(props) => {
    console.log("icon Name",props.iconType);
      if (props.iconType === 'deleteAccount') {
        return props.theme.colors.lightBlack;
      }
      return props.active ? props.theme.colors.darkRed : props.theme.colors.lightBlack;
    }};
  }
 
    color: ${(props) =>
      props.active ? props.theme.colors.darkRed : props.theme.colors.lightGray};
    border-radius: 0px;`,


};
    
// margin: 2px 8px 0 0; 


// pointer-events: ${({ is_disabled }) => is_disabled && 'none'};

// color: ${({ is_disabled, theme }) => is_disabled && theme.colors.gray};

// & svg {
//   fill: ${(props) =>
//     props.active
//       ? props.theme.colors.darkRed
//       : props.theme.colors.lightBlack};
// border-color: ${(props) =>
//   props.active
//     ? props.theme.colors.darkRed
//     : props.theme.colors.lightBlack};
// border-width: 1px;
// border-style: solid;