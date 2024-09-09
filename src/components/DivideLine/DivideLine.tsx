import { FC } from 'react';

import { DivideLineStyles as Styled } from './DivideLine.styles';

interface IDivideLineProps {
  isAuth?: boolean;
  isSignUp?: boolean;
}

export const DivideLine: FC<IDivideLineProps> = (props) => (
  <Styled.Line isAuth={props.isAuth} isSignUp={props.isSignUp} />
);
