import { useState, useEffect } from 'react';

export const useNotice = (url: string) => {
  const [hasNotice, setHasNotice] = useState(false);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();

        if (data.hasNotice) {
          setHasNotice(true);
        } else {
          setHasNotice(false);
        }
      } catch (error) {
        console.error('Error fetching notice:', error);
        setHasNotice(false);
      }
    };

    fetchNotice();
  }, [url]);

  return hasNotice;
};
