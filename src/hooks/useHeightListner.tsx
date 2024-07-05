import React, { useEffect, useState } from 'react';

export default function useDynamicHeight(ref: React.RefObject<HTMLElement>) {
  const [height, setHeight] = useState(0); 
  
  useEffect(() => {
    if (!ref.current) return;

    const calculateAndSetHeight = () => {
      setHeight(ref.current?.clientHeight ?? 0); 
    };

    calculateAndSetHeight(); 

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setHeight(entry.target.clientHeight);
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [ref]); 

  return height; 
}