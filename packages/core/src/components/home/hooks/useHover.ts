import { useEffect, useState } from 'react';

export default function useHover(ref: HTMLDivElement | null) {
  const [hover, setHover] = useState(false);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    const mouseEnter = () => setHover(true);
    const mouseLeave = () => setHover(false);

    if (mount) {
      if (ref) {
        ref.addEventListener('mouseenter', mouseEnter);
        ref.addEventListener('mouseleave', mouseLeave);
      }
    }

    return () => {
      ref?.removeEventListener('mouseenter', mouseEnter);
      ref?.removeEventListener('mouseleave', mouseLeave);
    };
  }, [mount]);

  return [hover];
}
