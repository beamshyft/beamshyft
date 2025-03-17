import React, { useState, useEffect } from 'react';

function AlternatingText({ texts, interval = 2000, className }: { texts: string[]; interval?: number, className?: string}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timerId);
  }, [texts, interval]);

  return <span className={className}>{texts[currentIndex]}</span>;
}

export default AlternatingText;