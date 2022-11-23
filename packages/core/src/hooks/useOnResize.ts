import { useEffect, useState } from 'react';

export default function useOnResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      const { innerWidth } = window;
      setWidth(innerWidth);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return [width];
}
