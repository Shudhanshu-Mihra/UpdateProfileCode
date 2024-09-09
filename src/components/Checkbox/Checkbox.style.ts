import { styled } from 'styles/theme';

export const CheckboxContainer = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const Checkbox = {
  CheckboxContainer: styled.div`
    border-radius: 50%;
  `,
  HiddenCheckbox: styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `,
  StyledCheckbox: styled.div<{ isChecked: boolean }>`
    width: 16px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) =>
      props.isChecked
        ? props.theme.colors.darkRed
        : props.theme.colors.checkboxBackground};
    border-radius: 5px;
    border: solid 2px
      ${(props) =>
        props.isChecked
          ? props.theme.colors.darkRed
          : props.theme.colors.checkboxBorder};
    transition: all 50ms;
    cursor: pointer;
    :hover {
      border: solid 2px ${(props) => props.theme.colors.darkRed};
    }
  `,
  LabelText: styled.span`
    margin-left: 13px;
    color: ${(props) => props.theme.colors.lightBlack};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-size: ${(props) => props.theme.size.default};
    cursor: pointer;
  `,
  Label: styled.label`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 50%;
    :hover {
      ${CheckboxContainer} {
        background-color: ${(props) => props.theme.colors.hoveredCheckbox};
      }
      div > div {
        border: solid 2px ${(props) => props.theme.colors.darkRed};
      }
    }
  `,
};
