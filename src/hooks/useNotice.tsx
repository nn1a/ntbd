import { useState, useEffect } from 'react';

export const useNotice = (url: string = '') => {
  const [hasNotice, setHasNotice] = useState(false);

  useEffect(() => {
    const fetchNotice = async (url: string) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();

          if (data.hasNotice) {
            setHasNotice(true);
          } else {
            setHasNotice(false);
          }
        }
      } catch (_e) {
        setHasNotice(false);
      }
    };
    if (url !== '') fetchNotice(url);
  }, [url]);

  return hasNotice;
};
