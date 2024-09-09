import { useEffect } from 'react';

export const RedirectOAuthPage = () => {
  useEffect(() => {
    const params = window.location.search;

    if (window.opener) {
      window.opener.postMessage(params);
      window.close();
    }
  }, []);
  return <p>Processing...</p>;
};
