import { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';

import { COLORS } from 'styles/theme';

import { LoaderComponentStyles } from './LoaderComponent.style';

interface ILoaderComponentProps {
  theme?: 'preview' | 'avatarMin' | '';
}
export const LoaderComponent: FC<ILoaderComponentProps> = (props) => {
  const { theme } = props;

  return (
    <LoaderComponentStyles.Wrapper data-testid="loader">
      <TailSpin
        color={
          theme === 'preview' || theme === 'avatarMin'
            ? COLORS.darkRed
            : COLORS.white
        }
        height={theme === 'preview' ? 40 : 20}
        width={theme === 'preview' ? 40 : 20}
      />
    </LoaderComponentStyles.Wrapper>
  );
};
