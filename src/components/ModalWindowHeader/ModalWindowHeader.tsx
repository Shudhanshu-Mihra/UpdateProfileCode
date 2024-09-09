import { FC } from 'react';

import { ModalWindowHeaderStyles as Styled } from './ModalWindowHeader.style';

interface IModalWindowHeaderProps {
  headerTitle: string;
}

export const ModalWindowHeader: FC<IModalWindowHeaderProps> = (props) => {
  const { headerTitle } = props;
  return (
    <Styled.HeaderBox>
      <Styled.Title>{headerTitle}</Styled.Title>
    </Styled.HeaderBox>
  );
};
