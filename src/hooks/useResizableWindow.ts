// External Dependencies
import { useCallback, useEffect, useState } from 'react';

export const useResizableWindow = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);

    return () => {
      window.removeEventListener('resize', handleResize, false);
    };
  }, [handleResize]);

  return windowWidth;
};
