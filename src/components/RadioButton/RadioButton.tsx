import { FC } from 'react';

import {
  RadioButtonStyles as Styled,
  RadioButtonWrapper,
} from './RadioButton.style';

interface IRadioButtonProps {
  labelText?: string;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  value: string;
}
export const RadioButton: FC<IRadioButtonProps> = (props) => {
  const { labelText, isChecked, value, onClick } = props;
  return (
    <Styled.RadioButtonLabel isChecked={isChecked}>
      <RadioButtonWrapper>
        <Styled.HiddenRadioButtonInput
          onClick={onClick}
          value={value}
          type="button"
          checked={isChecked}
        />
        <Styled.StyledRadioButton isChecked={isChecked} />
      </RadioButtonWrapper>
      <Styled.LabelText>{labelText}</Styled.LabelText>
    </Styled.RadioButtonLabel>
  );
};
