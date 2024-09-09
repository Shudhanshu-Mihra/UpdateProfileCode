import { useState } from 'react';

interface IOpenSigninWindowProps {
  url: string;
  name?: string;
  receiveMessageHandler: (event: MessageEvent<any>) => void;
}

export const useOAuthWindow = () => {
  const [windowObjectReference, setWindowObjectReference] =
    useState<Window | null>(null);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);

  const openSignInWindow = (props: IOpenSigninWindowProps) => {
    const { receiveMessageHandler, url, name } = props;
    window.removeEventListener('message', receiveMessageHandler);

    const strWindowFeatures =
      'toolbar=no, menubar=no, width=650, height=700, top=100, left=100';

    if (windowObjectReference === null || windowObjectReference.closed) {
      const popUpWindow = window?.open(url || '', name, strWindowFeatures);
      setWindowObjectReference(popUpWindow);
    } else if (previousUrl !== url) {
      const popUpWindow = window?.open(url || '', name, strWindowFeatures);
      setWindowObjectReference(popUpWindow);
      popUpWindow?.focus();
    } else {
      windowObjectReference?.focus();
    }
    window.addEventListener(
      'message',
      (event) => {
        return receiveMessageHandler(event);
      },
      false
    );
    setPreviousUrl(url);
  };

  return {
    openSignInWindow,
  };
};
