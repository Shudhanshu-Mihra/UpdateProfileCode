import { FC } from 'react';

import { InfoPopupStyles as Styled } from './InfoPopup.style';

interface IInfoPopupProps {
  text: string;
}

export const InfoPopup: FC<IInfoPopupProps> = (props) => {
  const { text } = props;

  return (
    <Styled.Wrapper>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Wrapper>
  );
};
