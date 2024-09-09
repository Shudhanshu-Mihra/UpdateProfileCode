import { FC } from 'react';

import { getInitials } from 'services/utils';

import { AccountItemStyles as Styled } from './AccountItem.style';

interface IAccountItemProps {
  onChooseCapiumAccountHandler: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  name: string;
  email: string;
  itemId: string;
}

export const AccountItem: FC<IAccountItemProps> = (props) => {
  const { email, name, itemId, onChooseCapiumAccountHandler } = props;

  return (
    <Styled.Wrapper id={itemId} data-testid='click-item' onClick={onChooseCapiumAccountHandler}>
      <Styled.UserInitials>{getInitials(name)}</Styled.UserInitials>
      <Styled.UserInfoWrapper>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Email>{email}</Styled.Email>
      </Styled.UserInfoWrapper>
    </Styled.Wrapper>
  );
};
