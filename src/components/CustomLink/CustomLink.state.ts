import { useState } from 'react';

export const useCustomLinkState = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnterHandler = () => setIsHover(true);
  const onMouseLeaveHandler = () => setIsHover(false);

  return { onMouseEnterHandler, onMouseLeaveHandler, isHover };
};
