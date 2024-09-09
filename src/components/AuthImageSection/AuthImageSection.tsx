import { FC } from 'react';

import { AuthImageSectionStyles as Styled } from './AuthImageSection.styles';

import { STRINGS } from 'constants/strings';

import signIn from 'assets/icons/sign-in-up.png';

export const AuthImageSection: FC = () => (
  <Styled.Section>
    <Styled.Wrapper>
      <Styled.LeftSideContentWrapper>
        <Styled.Title>
          {STRINGS.sign_in_up.title}
          <Styled.BoldText>{STRINGS.sign_in_up.hub}</Styled.BoldText>
        </Styled.Title>
        <Styled.SubTitle>{STRINGS.sign_in_up.sub_title}</Styled.SubTitle>
        <Styled.Image src={signIn} />
      </Styled.LeftSideContentWrapper>
    </Styled.Wrapper>
  </Styled.Section>
);
