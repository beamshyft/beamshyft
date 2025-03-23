import React, { useState, useEffect } from 'react';

function AlternatingText({ texts, interval = 2000, className }: { texts: string[]; interval?: number, className?: string}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {

      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);

    }, interval);

    return () => clearInterval(timerId);
  }, [texts, interval]);

  return <div className={className + " alternating-text pb-6"}><span className="current" style={{fontFamily: "serif", fontStyle: "italic" }}>{texts[currentIndex]}</span></div>;
}

export default AlternatingText;