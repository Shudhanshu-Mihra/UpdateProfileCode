import { FC } from 'react';

// import errorPage from 'assets/icons/error-page.png';
import underProcessImage from 'assets/icons/under-process.jpg';

// import { Button } from 'components/Button';

import { NotFoundStyles as Styled } from './underDevelop.style';
import { NOT_FOUND_STRINGS as Strings } from './constants';

// import { ROUTES } from 'constants/routes';

export const UnderDevelop: FC = () => (
  <Styled.MainWrapper>
    <Styled.ContentWrapper>
      <Styled.Image src={underProcessImage} />
      <Styled.Title>{Strings.title}</Styled.Title>
      <Styled.SubTitle>{Strings.subTitle}</Styled.SubTitle>
      {/* <Styled.Link to={ROUTES.login}>
        <Button themedButton="roundedRed" width="rounded">
          {Strings.buttonText}
        </Button>
      </Styled.Link> */}
    </Styled.ContentWrapper>
  </Styled.MainWrapper>
);
