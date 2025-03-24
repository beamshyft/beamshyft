import React, { useState, useEffect } from 'react';

function AlternatingText({ texts, interval = 2000, className }: { texts: string[]; interval?: number, className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {

      document.getElementById("current")?.setAttribute("class", "text-fade");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        document.getElementById("current")?.setAttribute("class", "text-show");
      }, interval/3);

    }, interval);

    return () => clearInterval(timerId);
  }, [texts, interval]);

  return <div className={className + " alternating-text pb-6"}>
    <style>
      {`
      .text-show {
        opacity: 1;
        transition: all 0.6s ease;
      }

      .text-fade {
        opacity: 0;
        transition: all 0.6s ease;
      }`}
    </style>
    <span id="current" style={{ fontFamily: "serif", fontStyle: "italic" }}>{texts[currentIndex]}</span></div>;
}

export default AlternatingText;