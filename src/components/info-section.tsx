import React, { useState, useEffect } from "react";

interface InfoSectionProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode | undefined;
  number?: number;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  titleClassName?: string;
  height?: string;
  reverse?: boolean;
}

const InfoSection = ({
  title,
  description,
  number,
  leftChild,
  rightChild,
  titleClassName,
  height,
  reverse = false,
}: InfoSectionProps) => {
  // Reformat page on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return !isMobile ? (
    <section className={`w-full bg-transparent min-h-[500px] relative`} style={height ? {minHeight: height} : {}}>
      <div className="grid grid-cols-2 gap-16 p-8">
        <div
          className="flex flex-row gap-8"
          style={{
            order: reverse ? 1 : -1,
            flexDirection: reverse ? "row-reverse" : "row",
          }}
        >
          {number && !reverse ? (
            <div className="rounded-full bg-accent/90 flex items-center justify-center min-w-[40px] h-[40px]">
              <p className="text-white text-2xl font-bold">{number}</p>
            </div>
          ) : (
            <div className="min-w-[40px]"></div>
          )}
          <div className="flex flex-col gap-4 z-10" style={{alignItems: reverse ? "flex-end" : "flex-start"}}>
            <h2
              className={titleClassName ? titleClassName : "text-3xl font-bold"}
            >
              {title}
            </h2>
            <p style={{textAlign: reverse ? "end" : "start"}}>{description}</p>
            <div>{leftChild}</div>
          </div>
        </div>
        <div
          className="flex flex-row gap-8  justify-end"
          style={{ order: reverse ? -1 : 1, flexDirection: reverse ? "row-reverse" : "row" }}
        >
          {rightChild}
          {number && reverse ? (
            <div className="rounded-full bg-accent/90 flex items-center justify-center min-w-[40px] h-[40px]">
              <p className="text-white text-2xl font-bold">{number}</p>
            </div>
          ) : (
            <div className="min-w-[40px]"></div>
          )}
        </div>
      </div>
    </section>
  ) : (
    <section className={`w-full bg-transparent min-h-[500px] relative`} style={height ? {minHeight: height} : {}}>
      <div className="flex flex-col gap-16 p-8">
        <div className="flex flex-col gap-4 z-10 text-center">
          {number && (
            <div className="rounded-full bg-accent/90 flex items-center justify-center min-w-[40px] w-[40px] h-[40px]">
              <p className="text-white text-2xl font-bold">{number}</p>
            </div>
          )}
          <h2 className={titleClassName ? titleClassName : "text-3xl font-bold"}>{title}</h2>
          <p className="self-start">{description}</p>
          {leftChild && <div>{leftChild}</div>}
        </div>
        <div>{rightChild}</div>
      </div>
    </section>
  );
};

export default InfoSection;
