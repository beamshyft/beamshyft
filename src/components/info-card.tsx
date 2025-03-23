import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
interface InfoSectionProps {
  title: string;
  description?: string | undefined;
  imageSrc: string;
  bottomChild?: React.ReactNode;
  titleClassName?: string;
}

const InfoSection = ({
  title,
  description,
  imageSrc,
  bottomChild,
  titleClassName,
}: InfoSectionProps) => {
  return (
    <Card className="relative flex flex-col overflow-hidden max-w-[300px] info-card">
      <div className="h-[300px] overflow-hidden">
        <Image src={imageSrc} alt={title} width={300} height={300} style={{height: "inherit"}}/>
      </div>
      <div className="flex flex-col gap-4 z-10 p-8">
        <h2 className={titleClassName ? titleClassName : "text-3xl font-bold"}>{title}</h2>
        <p className="">{description}</p>
        <div>{bottomChild}</div>
      </div>
    </Card>
  );
};

export default InfoSection;