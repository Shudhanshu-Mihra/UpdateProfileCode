import { FC } from 'react';

import { PrivacyPolicyStyles as Styles } from './PrivacyPolicy.style';

import {
  PRIVACY_POLICY_TITLE,
  PRIVACY_POLICY,
} from './privacyPolicy.constants';

export const PrivacyPolicy: FC = () => {
  return (
    <Styles.Wrappper>
      <Styles.ContentWrapper>
        <Styles.Paragraph>{PRIVACY_POLICY_TITLE.text}</Styles.Paragraph>
        {PRIVACY_POLICY.map((item) => (
          <div key={item.title}>
            <Styles.SubTitle>{item.title}</Styles.SubTitle>
            {item.value.map((p) => (
              <Styles.Paragraph key={p}>{p}</Styles.Paragraph>
            ))}
          </div>
        ))}
      </Styles.ContentWrapper>
    </Styles.Wrappper>
  );
};
