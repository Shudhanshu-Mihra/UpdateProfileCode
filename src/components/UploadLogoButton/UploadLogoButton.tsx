import { FC } from 'react';

import { Icon } from '../Icons';
import { LoaderComponent } from '../Loader';
import { UploadInput } from '../UploadInput';
import { UploadLogoButtonStyles as Styled } from './UploadLogoButton.style';

interface IUploadLogoButtonProps {
  id?: string;
  name?: string;
  isCompanyLogoLoading?: boolean;
  isEdit: boolean;
  logoName: string;
  logoSrc: string;
  onDeleteCompanyLogo: () => Promise<void>;
  onUploadCompanyLogoHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onDeleteLogoHandler: () => void;
}
export const UploadLogoButton: FC<IUploadLogoButtonProps> = (props) => {
  const {
    onUploadCompanyLogoHandler,
    onDeleteLogoHandler,
    id,
    name,
    logoName,
    logoSrc,
    isCompanyLogoLoading,
  } = props;
  return (
    <Styled.Wrapper>
     
      {isCompanyLogoLoading ? (
        <LoaderComponent theme="preview" />
      ) : !!logoSrc ? (
        <Styled.Logo>
         
          <Styled.ImageWrapper>
            <Styled.Image src={logoSrc} alt={logoName} />
          </Styled.ImageWrapper>

          <Styled.IconWrapper onClick={onDeleteLogoHandler}>
            {/* modify  */}
            {/* <Icon type="deletePhotoIcon" /> */}
            <Styled.deleteLink>Delete Photo</Styled.deleteLink>
          </Styled.IconWrapper>
        </Styled.Logo>
      ) : (
        <>
          <UploadInput
            id={id}
            name={name}
            onChangeFiles={onUploadCompanyLogoHandler}
          />
          <Styled.Label htmlFor={id}>
            <Icon type="insertLogo" width={65} height={55} />
          </Styled.Label>
        </>
      )}
       <Styled.LogoTextWrapper>
        Logo
        <Styled.Size> (Size: 75 x 75 px)</Styled.Size>
      </Styled.LogoTextWrapper>
    </Styled.Wrapper>
  );
};
