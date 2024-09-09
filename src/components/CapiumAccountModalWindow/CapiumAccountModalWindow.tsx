import { FC } from 'react';
import Modal from 'react-modal';

import { Icon } from '../Icons/Icons';

import { ICapiumAccount } from 'screens/CapiumLogin/types/capiumLogin.types';
import { AccountItem } from '../AccountItem';

import {
  CapiumModalWindowStyles,
  CapiumModalWindowContentStyles as Styled,
} from './CapiumAccountModalWindow.style';

interface ICapiumAccountModalWindowProps {
  onCloseModalWindowHandler: () => void;
  onChooseCapiumAccountHandler: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  accounts: ICapiumAccount[];
  isModalWindowOpen: boolean;
}
export const CapiumAccountModalWindow: FC<ICapiumAccountModalWindowProps> = (
  props
) => {
  const {
    isModalWindowOpen,
    accounts,
    onCloseModalWindowHandler,
    onChooseCapiumAccountHandler,
  } = props;
  
  return (
    <Modal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={CapiumModalWindowStyles}
      shouldCloseOnOverlayClick={false}
    >
      <Styled.ContentWrapper>
        <Styled.HeaderBox>
          <Styled.Title>Sign in with Capium</Styled.Title>
        </Styled.HeaderBox>
        <Styled.MainContentWrapper>
          <Styled.SubTitle>Choose an account</Styled.SubTitle>
          <Styled.AccountsWrapper>
            {accounts.map((item) => {
              return (
                <AccountItem
                  key={item.id}
                  itemId={item.id}
                  email={item.email}
                  name={item.fullName}
                  onChooseCapiumAccountHandler={onChooseCapiumAccountHandler}
                />
              );
            })}
          </Styled.AccountsWrapper>
          <Styled.SwitchAccount onClick={onCloseModalWindowHandler}>
            <Icon type={'accountIcon'} />
            <Styled.AnotheAccountText>
              Use another account
            </Styled.AnotheAccountText>
          </Styled.SwitchAccount>
        </Styled.MainContentWrapper>
      </Styled.ContentWrapper>
    </Modal>
  );
};
