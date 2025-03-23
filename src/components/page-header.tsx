
import Image from "next/image";
import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, description, imageSrc, children }: PageHeaderProps) => (
  <section className="w-full h-[30vh] bg-primary-background relative flex flex-col items-center justify-center">
    <div className="flex flex-col items-center z-[5] w-full gap-8 p-8">
      <div className="flex flex-col items-start sm:items-center gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {title}
        </h1>
        <p className="scroll-m-20 mt-4 sm:text-center lg:text-xl max-w-[640px]">
          {description}
        </p>
        {children}
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1] bg-secondary opacity-30">
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
