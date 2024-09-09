import { styled, Z_INDEX } from 'styles/theme';

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5.5px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
`;

export const RadioButtonStyles = {
  StyledRadioButton: styled.div<{ isChecked: boolean }>`
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${Z_INDEX.xs};
    background-clip: border-box;
    background: ${(props) =>
      props.isChecked ? props.theme.colors.white : 'transparent'};
    border-radius: 50%;
    border: ${({ theme, isChecked }) =>
      isChecked
        ? `solid 4px ${theme.colors.darkRed}`
        : `solid 1px ${theme.colors.checkboxBorder}`};
    transition: all 50ms;
    cursor: pointer;
    :hover {
      border: solid 1px ${(props) => props.theme.colors.darkRed};
    }
  `,
  RadioButtonLabel: styled.label<{ isChecked: boolean }>`
    display: flex;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 2px;
    :hover {
      ${RadioButtonWrapper} {
        ::before {
          background-color: ${(props) => props.theme.colors.hoveredCheckbox};
        }
      }
      div > div {
        border: ${({ theme, isChecked }) =>
          isChecked
            ? `solid 4px ${theme.colors.darkRed}`
            : `solid 1px ${theme.colors.darkRed}`};
      }
    }
  `,
  HiddenRadioButtonInput: styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 0px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `,
  LabelText: styled.span`
    margin-left: 13px;
    color: ${(props) => props.theme.colors.lightBlack};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.size.default};
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 40px;
    max-width: 80px;
  `,
};
