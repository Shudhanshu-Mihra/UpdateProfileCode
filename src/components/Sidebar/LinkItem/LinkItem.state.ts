import { useLocation, useMatch } from 'react-router-dom';

export const useLinkItemState = (props: { path: string; exact?: boolean }) => {
  const { path, exact } = props;
  const location = useLocation();

  let isActive;
  const isNotExactActive = useMatch({
    path: path,
    end: path.length === 1,
  });

  if (exact) {
    isActive = location.pathname === path ? 'true' : '';
  } else {
    isActive = isNotExactActive;
  }
  return isActive;
};
