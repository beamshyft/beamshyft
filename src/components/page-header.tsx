
import Image from "next/image";
import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, description, imageSrc, children }: PageHeaderProps) => (
  <section className="w-full h-[30vh] md:h-[60vh] bg-primary-background relative flex flex-col items-center justify-center">
    <div className="flex flex-col z-[5] w-full gap-8 max-w-[1200px]">
      <div className="flex flex-col items-start gap-4 bg-[white] max-w-[750px] p-8 md:p-20 md:pr-40">
        <h1 className="scroll-m-20 text-6xl font-bold tracking-tight lg:text-7xl">
          {title}
        </h1>
        <p className="scroll-m-20 mt-4">
          {description}
        </p>
        {children}
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1] bg-secondary">
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        alt={imageSrc}
      />
    </div>
  </section>
); 

export default PageHeader;
