import React, {useState, useEffect} from "react";

interface InfoSectionProps {
  title: string;
  description?: string | undefined;
  number?: number;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  titleClassName?: string;
}

const InfoSection = ({
  title,
  description,
  number,
  leftChild,
  rightChild,
  titleClassName,
}: InfoSectionProps) => {
  // Reformat page on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
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
    <section className="w-full bg-transparent h-[640px] relative">
      <div className="grid grid-cols-2 gap-4 p-8">
        <div className="flex flex-row gap-8">
          {number ? (
            <div className="rounded-full bg-white flex items-center justify-center min-w-[40px] h-[40px]">
              <p className="text-black text-2xl font-bold">{number}</p>
            </div>
          ) : <div className="min-w-[40px]"></div>}
          <div className="flex flex-col gap-4 z-10">
            <h2 className={titleClassName ? titleClassName : "text-3xl font-bold"}>{title}</h2>
            <p className="">{description}</p>
            <div>{leftChild}</div>
          </div>
        </div>
        <div>
          {rightChild}
        </div>
      </div>
    </section>
  ) : (
    <section className="w-full bg-transparent h-[640px]">
      <div className="grid grid-rows-2 gap-4 p-8">
        <div className="flex flex-col gap-4 z-10">
          {number && (
            <div className="rounded-full bg-white flex items-center justify-center min-w-[40px] w-[40px] h-[40px]">
              <p className="text-black text-2xl font-bold">{number}</p>
            </div>
          )}
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="">{description}</p>
          <div>{leftChild}</div>
        </div>
        <div>{rightChild}</div>
      </div>
    </section>
  );
};

export default InfoSection;