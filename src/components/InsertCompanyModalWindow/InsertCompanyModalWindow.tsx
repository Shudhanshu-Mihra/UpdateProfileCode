
import { FC } from 'react';
import ReactModal from 'react-modal';
import { ActionMeta } from 'react-select';
import { Input } from '../Input';
import { ModalButtonsBox } from '../ModalButtonsBox';
import { ModalWindowHeader } from '../ModalWindowHeader';
import { UploadLogoButton } from '../UploadLogoButton';
import { CustomSelect } from 'components/CustomSelect';
import { countries } from 'constants/countries-array';
import { STRINGS } from '../../screens/Settings/CompanyList/companyList.constants';
import { InsertCompanyModalState } from './InsertCompanyModalWindow.state';
import {
  CompanyModalWindowStyles,
  InsertCompanyModalWindowStyles as Styled,
} from './InsertCompanyModalWindow.style';
import { useCompanyListState } from '../../screens/Settings/CompanyList/CompanyList.state';
import { DATE_FORMATS } from 'constants/strings';
import capium from '../../assets/IntegrationCompanyImages/Capium.png';
import {Icon} from '../../components/Icons/Icons';
import { ReactComponent as Close } from 'assets/icons/close.svg';

interface IInsertCompanyModalWindowProps extends IMasterModalWindowProps {
  onUploadCompanyLogoHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onDeleteLogoHandler: () => void;
  logoSrc: string;
  logoName: string;
  isCompanyLogoLoading: boolean;
  isEdit: boolean;
  onDeleteCompanyLogo: () => Promise<void>;
  countryValue: {
    label: string;
    value: string;
  };
  onChangeCountryValueHandler: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ) => void;

}
// integration part start 
//tst for adding in git 
interface companyIntegrationProps {
  integrationCompanyArr: {
    id: number;
    name: string;
    imageUrl: string;
  }[];
}

// integration part end 

export const InsertCompanyModalWindow: FC<IInsertCompanyModalWindowProps> = (
  props
) => {
  const {
    headerText,
    inputValue,
    isLoading,
    isModalWindowOpen,
    logoName,
    isCompanyLogoLoading,
    isEdit,
    onDeleteLogoHandler,
    onChangePaginationInputValueHandler,
    onCloseModalWindowHandler,
    onEnterCreateItemClick,
    onSaveButtonCLickHandler,
    onUploadCompanyLogoHandler,
    onDeleteCompanyLogo,
    isDisableButton,
    logoSrc,
    onChangeCountryValueHandler,
    countryValue
  } = props;

  const {
    formatedCurrencies,
    onChangeCurrencyHandler,
  } = useCompanyListState();

  const {
    isChecked,
    // isLoading,
    isDisabledButton,
    formik,
    onChangeDateFormatHandler,
    // formatedCurrencies,
    selectedFormatDate,
    selectedCurrencyValue,
    // modify start
    activeTab,
    isOpen,
    toggleModal,
    switchTab,
    // isActive

    // final
    integrateCompanyArr,
    integration_company,
    handleConnect,
    handleDisConnect,
    items
  } = InsertCompanyModalState();
  // test purpos 

  // test purpos end


  //   if (!isOpen) {
  //     return <button onClick={toggleModal}>Open Modal</button>;
  // }

  return (
    <ReactModal
      isOpen={isModalWindowOpen}
      onRequestClose={onCloseModalWindowHandler}
      ariaHideApp={false}
      style={CompanyModalWindowStyles}
    >
      <Styled.WrapHeader>
        <ModalWindowHeader headerTitle={headerText} />
        {/* modify start */}
        <Styled.Header>
          <Styled.TabButton isActive={activeTab === 'companyDetail'} onClick={() => switchTab('companyDetail')}>
            Company Detail
          </Styled.TabButton>
          <Styled.CloseIconWrapper>
          <Close width={18} onClick={onCloseModalWindowHandler} />
          </Styled.CloseIconWrapper>
          <Styled.TabButton isActive={activeTab === 'bankDetail'} onClick={() => switchTab('bankDetail')}>
            Integration
          </Styled.TabButton>
        </Styled.Header>
        {/* modify end */}
        <Styled.Content>
          {activeTab === 'companyDetail' ? (
            <>
              <Input
                value={inputValue}
                text="Company"
                onChangeValue={onChangePaginationInputValueHandler}
                onKeyDown={onEnterCreateItemClick}
                isRemoveBorder
              />

              {/* <Styled.Label>Country</Styled.Label> */}
              <CustomSelect
                value={countryValue}
                onChangeValueHandler={onChangeCountryValueHandler}
                name='companyName'
                isRemoveBorder
                label='Country'
                options={countries}
              />

              {/* <Styled.SubTitle>{STRINGS.currency}</Styled.SubTitle> */}
              <CustomSelect
                isDisabled={isChecked}
                options={formatedCurrencies}
                onChangeValueHandler={onChangeCurrencyHandler}
                value={selectedCurrencyValue}
                isRemoveBorder
                label={STRINGS.currency}
              />

              {/* <Styled.SubTitle>{STRINGS.dateFormat}</Styled.SubTitle> */}
              <CustomSelect
                isDisabled={isChecked}
                options={DATE_FORMATS}
                onChangeValueHandler={onChangeDateFormatHandler}
                value={selectedFormatDate}
                isRemoveBorder
                label={STRINGS.dateFormat}
              />

              <UploadLogoButton
                id="insertLogo"
                name="insertLogo"
                isEdit={isEdit}
                isCompanyLogoLoading={isCompanyLogoLoading}
                logoSrc={logoSrc}
                logoName={logoName}
                onDeleteCompanyLogo={onDeleteCompanyLogo}
                onUploadCompanyLogoHandler={onUploadCompanyLogoHandler}
                onDeleteLogoHandler={onDeleteLogoHandler}
              />
            </>
          ) : (
            // modify start 
            <Styled.ContentSecond>
              {/* <div>Bank Detail Content</div> */}
               <Styled.List>
      {items.map(item => (
        <Styled.ListItem key={item.integrate_company_id}>
          <Styled.ItemImage src={capium} alt={item.integrate_company_name} />
          {/* <Styled.ItemImage src={item.imageUrl} alt={item.integrate_company_name} /> */}
          {/* <span>{item.integrate_company_name}</span> */}
          <Styled.ItemTextAndButton>
            {item.isIntegrate ? (
<Styled.RedTextWrapper onClick={() => handleDisConnect(item.integrate_company_id)}>
              <Styled.RedText>
                <Styled.IconHolder>
                  <Icon type="arrowLeft" fill="red" />
                  <Icon type="arrowLeft" fill="red" />
                </Styled.IconHolder>
                Disconnect
              </Styled.RedText>
              </Styled.RedTextWrapper>

            ) : null}
            <Styled.ItemButton onClick={() => handleConnect(item.integrate_company_id)}>
              {item.isIntegrate ? (
                <Styled.textWithIcon>
                  Refresh
                  <Icon type="loderIcon" fill="white" />
                </Styled.textWithIcon>
              ) : (
                <Styled.textWithIcon>
                  Connect
                  <Styled.IconHolder>
                    <Icon type="arrowRight" fill="white" />
                    <Icon type="arrowRight" fill="white" />
                  </Styled.IconHolder>
                </Styled.textWithIcon>
              )}
            </Styled.ItemButton>
          </Styled.ItemTextAndButton>
        </Styled.ListItem>
      ))}
    </Styled.List>

            </Styled.ContentSecond>
            // modify end
          )}
        </Styled.Content>
      </Styled.WrapHeader>
      <Styled.ButtonWrapper>

      <ModalButtonsBox
        isLoading={isLoading}
        onCancelClickHandler={onCloseModalWindowHandler}
        onSaveButtonCLickHandler={onSaveButtonCLickHandler}
        isSaveButton
        isDisableButton={isDisableButton}
        />
      </Styled.ButtonWrapper>
        
    </ReactModal>
  );
};